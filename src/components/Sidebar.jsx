import React from 'react'
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = (props) => {
  return (
    // <div className="sidebar">
    <div className={`sidebar ${props.isOpen === true ? 'active' : ''}`}>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;
