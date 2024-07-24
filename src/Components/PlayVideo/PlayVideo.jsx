import React from 'react'
import './PlayVideo.css'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src='/video.mp4' controls autoPlay muted></video>
            <h3>Best Youtube Channel to Learn Web Development</h3>
            <div className="play-video-info">
                <p>1525 Views &bull; 2 days ago</p>
                <div>
                    <span><img src="/like.png" alt="" />125</span>
                    <span><img src="/dislike.png" alt="" />2</span>
                    <span><img src="/share.png" alt="" />Share</span>
                    <span><img src="/save.png" alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src="/jack.png" alt="" />
                <div>
                    <p>GreatStack</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="video-description">
                <p>Channel that makes learning easy</p>
                <p>Subscribe GreatStack to watch more Tutorials on Web Development</p>
                <hr />
                <h4>130 Comments</h4>

                <div className="comment">
                    <img src="/user_profile.jpg" alt="" />
                    <div>
                        <h3>Komalpreet Singh <span>1 day ago</span> </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestias assumenda pariatur repellendus possimus! Consequuntur blanditiis at expedita nulla, autem ullam. Itaque sit numquam facilis suscipit ipsam eum! Modi, doloribus.</p>

                        <div className="comment-action">
                            <img src="/like.png" alt="" />
                            <span>244</span>

                            <img src="/dislike.png" alt="" />
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlayVideo
