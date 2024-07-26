import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { value_converter } from '../../data'
import moment from 'moment'
import Spinner from '../Spinner/Spinner'

const Feed = ({ category, input }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const api_key = import.meta.env.VITE_API_KEY;
    const fetchData = async () => {
        setLoading(true);
        console.log(input)
        let videoList_url;
        if (input) {
            // videoList_url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${input}&type=video&videoCategoryId=${category}&key=${api_key}`

            videoList_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=25&q=${input}&type=video&videoCategoryId=20&key=${api_key}`
            console.log("inisde input")
        }
        else {
            videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${api_key}`
            console.log("inisde input not")

        }

        await fetch(videoList_url).then(res => res.json()).then(data => setData(data.items))

        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [category, input])

    console.log(data)

    return (
        <div className='feed'>
            {loading ? <div className='spinnerLoad'><Spinner /></div> :
                data &&
                data.map((item, index) => {
                    return (
                        <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={index} className='card'>
                            <img src={item.snippet.thumbnails.medium.url} alt="" />
                            <h2>{item.snippet.title}</h2>
                            <h3>{item.snippet.channelTitle}</h3>
                            <p>{item.statistics ? value_converter(item.statistics.viewCount) : ""} Views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                        </Link>
                    )
                })
            }

            {/* 
            <div className='card'>
                <img src="/thumbnail8.png" alt="" />
                <h2>Best Channel to learn coding that help you to be a Web Developer</h2>
                <h3>GreatStack</h3>
                <p>15K Views &bull; 2 days ago</p>
            </div> */}
        </div>
    )
}

export default Feed
