import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="icon-container">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <img src="/assets/Home.jpg" alt="Home" className="nav-icon" />
        </NavLink>
        <NavLink to="/jobs" className={({ isActive }) => (isActive ? "active" : "")}>
          <img src="/assets/jobs.jpg" alt="Jobs" className="nav-icon" />
        </NavLink>
        <NavLink to="/messages" className={({ isActive }) => (isActive ? "active" : "")}>
          <img src="/assets/chat.jpg" alt="Chat" className="nav-icon" />
        </NavLink>
        <NavLink to="/notifications" className={({ isActive }) => (isActive ? "active" : "")}>
          <img src="/assets/notification.jpg" alt="Notifications" className="nav-icon" />
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
          <img src="/assets/profile.jpg" alt="Profile" className="nav-icon" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
