import React from 'react';
import './Header.css';
import { companyName } from '/src/data/data.json';
import { Link } from 'react-router-dom';
import NavList from './NavList/NavList';

const Header = () => {
  return (
    <header>
      <Link className="header-logo" to="/">
        <img src="RedShape2D.png" alt="Acentryx logo" />
        <p>{companyName}</p>
      </Link>
      <NavList />
    </header>
  );
};

export default Header;
