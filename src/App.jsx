import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);
  const [homePage, setHomePage] = useState(true);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState(null);


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} category={category} setCategory={setCategory} setSidebar={setSidebar} homePage={homePage} setHomePage={setHomePage} loading={loading} setLoading={setLoading} input={input} setInput={setInput} />}></Route>
        <Route path='/Video/:categoryId/:videoId' element={<Video sidebar={sidebar} category={category} setCategory={setCategory} setSidebar={setSidebar} homePage={homePage} setHomePage={setHomePage} />}></Route>
      </Routes>
    </div>
  )
}

export default App
