import React, { useState } from 'react'
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
        <Sidebar isOpen={isOpen}/>
        <div className="sidebarIcons" onClick={()=>ToggleSidebar()}>
          <img src={More} alt="" onClick={()=>ToggleSidebar()}/>
        </div>
        <Chat/>
      </div>
    </div>
  )
}

export default Home