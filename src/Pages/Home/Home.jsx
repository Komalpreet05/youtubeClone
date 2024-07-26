import React, { useEffect, useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Navbar from '../../Components/Navbar/Navbar'

const Home = ({ sidebar, category, setCategory, setSidebar, homePage, setHomePage, input, setInput }) => {
    useEffect(() => {
        setHomePage(true);
    }, [])
    return (
        <>

            <Navbar setSidebar={setSidebar} homePage={homePage} setHomePage={setHomePage} setInput={setInput} />
            <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
            <div className={`container ${sidebar ? "" : "large-container"}`}>
                <Feed category={category} setSidebar={setSidebar} input={input} />
            </div>
        </>
    )
}

export default Home