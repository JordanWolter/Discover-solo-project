import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <div>
      <footer>&copy; Jordan Wolter

        <Link id='about' className="navLink" to="/about">
          About
        </Link>


      </footer>
    </div>
  );
}

export default Footer;
