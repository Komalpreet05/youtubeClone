import React from 'react'
import './Sidebar.css'

const Sidebar = ({ sidebar }) => {
    return (
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="shortcut-links">
                <div className="side-link ">
                    <img src="/home.png" alt="" />

                    <p>Home</p>
                </div>
                <div className="side-link">
                    <img src="/game_icon.png" alt="" />
                    <p>Gaming</p>
                </div>
                <div className="side-link">
                    <img src="/sports.png" alt="" />
                    <p>Sports</p>
                </div>
                <div className="side-link">
                    <img src="/entertainment.png" alt="" />
                    <p>Entertainment</p>
                </div>
                <div className="side-link">
                    <img src="/tech.png" alt="" />
                    <p>Technology</p>
                </div>
                <div className="side-link">
                    <img src="/music.png" alt="" />
                    <p>Music</p>
                </div>
                <div className="side-link">
                    <img src="/blogs.png" alt="" />
                    <p>Blogs</p>
                </div>
                <div className="side-link">
                    <img src="/news.png" alt="" />
                    <p>News</p>
                </div>

                <hr />
            </div>

            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src="/jack.png" alt="" />
                    <p>PewDiePie</p>
                </div>

                <div className="side-link">
                    <img src="/simon.png" alt="" />
                    <p>Mr. Beast</p>
                </div>

                <div className="side-link">
                    <img src="/tom.png" alt="" />
                    <p>Justin Bieber</p>
                </div>
                <div className="side-link">
                    <img src="/megan.png" alt="" />
                    <p>5-minute craft</p>
                </div>
                <div className="side-link">
                    <img src="/cameron.png" alt="" />
                    <p>Nas Daily</p>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
