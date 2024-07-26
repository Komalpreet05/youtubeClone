import React, { useEffect } from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'

const Video = ({ homePage, setHomePage, setSidebar }) => {
    const { videoId, categoryId } = useParams();
    useEffect(() => {
        setSidebar(false)
    }, [])

    useEffect(() => {
        setHomePage(false);
    }, [])
    return (
        <>
            {/* <div className='video-side'>
                <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
            </div> */}
            <Navbar setSidebar={setSidebar} homePage={homePage} setHomePage={setHomePage} />

            <div className='play-container'>
                <PlayVideo categoryId={categoryId} videoId={videoId} />
                <Recommended categoryId={categoryId} />
            </div>
        </>
    )
}

export default Video
