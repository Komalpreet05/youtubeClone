import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
    const { videoId, categoryId } = useParams();
    console.log(videoId + categoryId)
    return (
        <div className='play-container'>
            <PlayVideo categoryId={categoryId} videoId={videoId} />
            <Recommended categoryId={categoryId} />
        </div>
    )
}

export default Video
