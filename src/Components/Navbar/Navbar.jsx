import React from 'react'
import './Navbar.css'

const Navbar = ({ setSidebar }) => {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img src="/menu.png" alt="menu-icon" className='menu-icon' onClick={() => { setSidebar(prev => !prev) }} />
                <img src="/logo.png" alt="logo" className='logo' />
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search' />
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
