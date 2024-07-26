import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Navbar = ({ setSidebar, homePage, setInput }) => {
    const { videoId } = useParams();
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                {homePage && <img src="/menu.png" alt="menu-icon" className='menu-icon' onClick={() => { setSidebar(prev => !prev) }} />}

                <Link to="/">
                    <img src="/logo.png" alt="logo" className='logo' />
                </Link>
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search' onChange={(e) => setInput(e.target.value)} />
                    <img src="/search.png" alt="search-icon" className='search-icon' />
                </div>

            </div>

            <div className="nav-right flex-div">
                <img src="/upload.png" alt="upload" />
                <img src="/more.png" alt="more" />
                <img src="/notification.png" alt="notification" />
                <img src="/jack.png" alt="profile" className='user-icon' />
            </div>

        </nav>
    )
}

export default Navbar
