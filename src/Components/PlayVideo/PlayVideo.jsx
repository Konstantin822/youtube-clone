import React from "react";
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className="play-video">
            <video src={video1} controls autoPlay muted></video>
            <h3>Some Title</h3>
            <div className="play-video__info">
                <p>1525 Views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="" /> 125</span>
                    <span><img src={dislike} alt="" /> 2</span>
                    <span><img src={share} alt="" /> Share</span>
                    <span><img src={save} alt="" /> Save</span>
                </div>
            </div>
            <hr />
            <div className="play-video__publisher">
                <img src={jack} alt="" />
                <div>
                    <p>Channel Name</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="play-video__vid-description">
                <p>Channel that makes learning Easy</p>
                <p>Subscribe "Channel Name" to watch more "Some content" on "Some topic"</p>
                <hr />
                <h4>130 Comments</h4>
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