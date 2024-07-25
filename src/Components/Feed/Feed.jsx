import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { value_converter } from '../../data'
import moment from 'moment'

const Feed = ({ category }) => {
    const [data, setData] = useState([]);
    const api_key = import.meta.env.VITE_API_KEY;
    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${api_key}`
        await fetch(videoList_url).then(res => res.json()).then(data => setData(data.items))
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [category])

    return (
        <div className='feed'>
            {data.map((item, index) => {
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={index} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_converter(item.statistics.viewCount)} Views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })}
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
