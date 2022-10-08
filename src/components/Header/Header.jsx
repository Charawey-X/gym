import React from 'react';
import './Header.css';
import Logo from '../../assets/logo1.png';
import Sidebar from '../Sidebar/Sidebar';


const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={Logo} alt=""/>
        <ul className='header-menu'>
            <li>Programs</li>
            <li>Benefits</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
        </ul>
        <Sidebar pageWrapId={'hero'} outerContainerId={'App'}></Sidebar>
    </div>
  )
}

export default Header