import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {
    const { videoId } = useParams();
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);
    const newApi = 'AIzaSyANXuG7glNndFUrTtyL7tLCpcp5XGYs0lc'
    const fetchVideoData = async () => {
        //fetching videos data
        // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}=${API_KEY}
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]))

    }

    const fetchOtherData = async () => {
        //fetching channel data
        if (apiData) {
            const channelData_url = await `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
            await fetch(channelData_url).then(res => res.json()).then(data => setChannelData(data.items[0]))

        }

        const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`

        await fetch(commentUrl).then(res => res.json()).then(data => setCommentData(data.items))
    }
    useEffect(() => {
        fetchVideoData();
        window.scrollTo(0, 0);
    }, [videoId])

    useEffect(() => {
        fetchOtherData();
    }, [apiData])
    console.log(commentData);
    const test = "<br>"

    return (

        <div className='play-video' >

            {/* <video src='/video.mp4' controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`
            } frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : "10K"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
                <div>
                    <span><img src="/like.png" alt="" />{apiData && value_converter(apiData.statistics.likeCount)}</span>
                    <span><img src="/dislike.png" alt="" /></span>
                    <span><img src="/share.png" alt="" />Share</span>
                    <span><img src="/save.png" alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData && channelData.snippet.thumbnails.default.url} alt="" />
                <div>
                    <p>{apiData && apiData.snippet.channelTitle}</p>
                    <span>{channelData && value_converter(channelData.statistics.subscriberCount)} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="video-description">
                <p>{apiData && apiData.snippet.description.slice(0, 250)}</p>
                {/* <p>test</p> */}
                <hr />
                <h4>{apiData && value_converter(apiData.statistics.commentCount)} Comments</h4>



                {commentData && commentData.map((item, index) => {
                    return (
                        <div className="comment" key={index}>
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span> </h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay.replaceAll("<br>", "")}</p>

                                <div className="comment-action">
                                    <img src="/like.png" alt="" />
                                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>

                                    <img src="/dislike.png" alt="" />
                                    <span>2</span>
                                </div>
                            </div>

                        </div>
                    )

                })}

            </div>

        </div>

    )
}

export default PlayVideo
