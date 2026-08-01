import React from 'react';
import "./navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="navbar-title">Personal Stock</h3>

      <ul className="navbar-elements">
        <li>Portfolio</li>
        <li>History</li>
        <li>Settings</li>
      </ul>
    </nav>
  )
};