import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/task-list">Task List</NavLink>
    </nav>
  );
}

export default Navbar;
