import React, { useState,  useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import More from "../img/more.png";

const Home = () => {
  const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    
  return (
    <div className='home'>
      <div className="container">
        <div onClick={()=>{setIsopen(!isOpen)}}>
          <Sidebar isOpen={isOpen} />
        </div>
        <div className="sidebarIcons">
          <img src={More} alt="" onClick={()=>{setIsopen(!isOpen)}}/>
        </div>
        <Chat />
      </div>
    </div>
  )
}

export default Home