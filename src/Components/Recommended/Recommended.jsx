import React, { useEffect } from 'react'
import { useState } from 'react'
import './Recommended.css'
import { API_KEY } from '../../data'
import { value_converter } from '../../data'
import { Link } from 'react-router-dom'

const Recommended = ({ categoryId }) => {
    const [categoryData, setCategoryData] = useState([])

    const fetchData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&videoCategoryId=${categoryId}&key=${API_KEY}`

        await fetch(relatedVideo_url).then(res => res.json()).then(data => setCategoryData(data.items))
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='recommended'>
            {categoryData &&
                categoryData.map((item, index) => {
                    return (
                        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" key={index}>
                            <img src={item.snippet.thumbnails.medium.url} alt="" />
                            <div className="video-info">
                                <h4>{item.snippet.title}</h4>
                                <p>{item.snippet.channelTitle}</p>
                                <p>{value_converter(item.statistics.viewCount)} Views</p>
                            </div>
                        </Link>
                    )
                })}



        </div>
    )
}

export default Recommended
