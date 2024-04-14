import React, { useState } from 'react';
import {
    FaBars,
   
}from "react-icons/fa";
import {BiBarChartSquare} from "react-icons/bi";
import {AiOutlineHome} from "react-icons/ai";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<AiOutlineHome/>
        },
        {
            path:"/Data",
            name:"Data",
            // icon:<FaUserAlt/>
           icon: <BiBarChartSquare/>
        },
        
        
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Badal Pilot</h1>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon" >{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main className='main'>{children}</main>
        </div>
    );
};

export default Sidebar;