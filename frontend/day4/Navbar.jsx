import React from 'react';
import './NavBar.css'; // Import your CSS file for styles
import { Link, NavLink } from 'react-router-dom';
// import { FaHome, FaInfo, FaCog, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'; // Import icons

const CustomNavBar = () => {
  return (
    <div style={{backgroundColor:"#00DD00"}}>
    <nav className="main-navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <div className="nav-link">
           <NavLink to="/home"><div style={{color:"black"}}>Home</div></NavLink>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
           <NavLink to="/about"><div style={{color:"black"}}>About</div></NavLink> 
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
           <NavLink to="/plan"><div style={{color:"black"}}>Plans</div></NavLink>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
         <NavLink to="/jio"><div style={{color:"black"}}> Recharge</div> </NavLink>
          </div>
        </li>
        <li className="nav-item nav-item-right">
          
          <div className="sidebar">
            
      
      <div className="dropdown">
      
        <div className="dropbtn">User</div>
        <div className="dropdown-content">
          <Link to="/profile">Profile</Link>
          <Link to="/">Logout</Link>
          
        </div>
      </div>
    </div>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default CustomNavBar;