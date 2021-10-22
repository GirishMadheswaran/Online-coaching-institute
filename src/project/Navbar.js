import React, {useState} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import {FaBars , FaTimes} from 'react-icons/fa';


function Navbar(){
    const[icon, setIcon] = useState(false)
    const handleClick = () =>{
        setIcon (!icon)
    }

    const closeBar = () =>{
        setIcon(false)
    }


    return(
        <>
            <nav className="nav-tab">
                <Link to ='/' className="nav-logo" ><h1 >ANOOP TECH</h1> </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {
                        icon ? <FaTimes className="fa-times"></FaTimes> 
                        : <FaBars className="fa-bars "></FaBars>
                    }
                </div>
                <ul className = {icon ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link className='nav-links' onClick={closeBar} to='/'>Home</Link></li>
                    <li><Link className='nav-links' onClick={closeBar} to='/courses'>Courses</Link></li>
                    <li><Link className='nav-links' onClick={closeBar} to='/services'>Services</Link></li>
                    <li><Link className='nav-links' onClick={closeBar} to='/contact'>Contact Us</Link></li>
                </ul>
            </nav>
        </>
            
    )
}




export default Navbar;