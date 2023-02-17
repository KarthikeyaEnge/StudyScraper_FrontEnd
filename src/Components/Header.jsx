import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <section className='logo'>
          {/*  <img src={logo} alt="logo" /> */}
           <h1>STUDY SCRAPPER</h1>
        </section>
       <nav>
        <Link to="/">Home</Link>
        <Link to='/scrape'>Scrape</Link>
        <Link to='/signin'><FaUser/></Link>
       </nav>
    </header>
  )
}

export default Header