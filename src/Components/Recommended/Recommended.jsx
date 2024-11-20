import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Recommended.css'
import { API_KEY, valueConverter } from '../../data.js'

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([])

    const fetchData = async () => {
        const relatedVideoUr = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideoUr)
            .then(res => res.json())
            .then(data => setApiData(data.items))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='recommended'>
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='recommended__side-video-list'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className='recommended__side-video-list_vid-info'>
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{valueConverter(item.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recommended