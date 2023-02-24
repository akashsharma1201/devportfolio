import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css"

const Sidebar = () => {
    let [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <div className='sideBar px-2'>
            <div className='auther-image-box'>
                <img className='img-fluid'  src='https://tf-react-chester.vercel.app/images/brand-image.jpg' alt='auther-image'/>
            </div>
            <div className='menu-box'>
                <ul>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/project">Project</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar