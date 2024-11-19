import React, { useEffect, useState } from "react";
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, valueConverter } from '../../data.js'
import moment from "moment";

const PlayVideo = ({ videoId }) => {
    const [apiData, setApiData] = useState(null)
    const [channelData, setChannelData] = useState(null)

    const fetchVideoData = async () => {
        // Fetching Videos Data
        const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetailsUrl)
            .then(res => res.json())
            .then(data => setApiData(data.items[0]))
    }

    const fetchOtherData = async () => {
        // Fetching Channel Data
        const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelDataUrl)
            .then(res => res.json())
            .then(data => setChannelData(data.items[0]))
    }

    useEffect(() => {
        fetchVideoData()
    }, [])

    useEffect(() => {
        fetchOtherData()
    }, [apiData])
    return (
        <div className="play-video">
            {/* <video src={video1} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData ? apiData.snippet.title : 'Title Here'}</h3>
            <div className="play-video__info">
                <p>{apiData ? valueConverter(apiData.statistics.viewCount) : '16K'} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ''}</p>
                <div>
                    <span><img src={like} alt="" /> {apiData ? valueConverter(apiData.statistics.likeCount) : '155'}</span>
                    <span><img src={dislike} alt="" /> 2</span>
                    <span><img src={share} alt="" /> Share</span>
                    <span><img src={save} alt="" /> Save</span>
                </div>
            </div>
            <hr />
            <div className="play-video__publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ''} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : ''}</p>
                    <span>{channelData ? valueConverter(channelData.statistics.subscriberCount) : '1M'} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="play-video__vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : 'Description Here'}</p>
                <hr />
                <h4>{apiData ? valueConverter(apiData.statistics.commentCount) : 102} Comments</h4>
                <div className="play-video__vid-description_comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>John Smith <span>1 day ago</span></h3>
                        <p>"Comment" Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Ut, ipsum corporis fugit optio in minus eligendi natus necessitatibus ab ducimus.
                        </p>
                        <div className="play-video__vid-description_comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="play-video__vid-description_comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>John Smith <span>1 day ago</span></h3>
                        <p>"Comment" Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Ut, ipsum corporis fugit optio in minus eligendi natus necessitatibus ab ducimus.
                        </p>
                        <div className="play-video__vid-description_comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="play-video__vid-description_comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>John Smith <span>1 day ago</span></h3>
                        <p>"Comment" Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Ut, ipsum corporis fugit optio in minus eligendi natus necessitatibus ab ducimus.
                        </p>
                        <div className="play-video__vid-description_comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="play-video__vid-description_comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>John Smith <span>1 day ago</span></h3>
                        <p>"Comment" Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Ut, ipsum corporis fugit optio in minus eligendi natus necessitatibus ab ducimus.
                        </p>
                        <div className="play-video__vid-description_comment-action">
                            <img src={like} alt="" />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo