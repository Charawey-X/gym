import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Programs
      </a>
      <a className="menu-item" href="/salads">
        Benefits
      </a>
      <a className="menu-item" href="/pizzas">
        Pricing
      </a>
      <a className="menu-item" href="/desserts">
        Testimonials
      </a>
      <a className="menu-item" href="/desserts">
        Contact Us
      </a>
    </Menu>
  )
}

export default Sidebar