import React from 'react';
import './NavList.css';
import { Link } from 'react-router-dom';

const NavList = () => {
  return (
    <nav className="nav-links">
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
        <li>
          <Link to="trainings">Trainings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
