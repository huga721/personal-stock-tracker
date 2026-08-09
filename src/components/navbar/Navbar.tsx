import React from 'react';
import "./navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="navbar-title">Personal Stock</p>

      <ul className="navbar-elements">
        <li>Portfolio</li>
        <li>History</li>
        <li>Settings</li>
      </ul>
    </nav>
  )
};