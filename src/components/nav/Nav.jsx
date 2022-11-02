import React from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {BiMessageSquareDetail} from 'react-icons/bi';


const Nav = () => {
  
  return (
    <nav className='nav'>

      <a href='#home'><AiOutlineHome /></a>

      <a href='#experience'><BiBook /></a>

      <a href='#about'><AiOutlineUser /></a>

      <a href='#contact'><BiMessageSquareDetail /></a>

    </nav>
  )
};

export default Nav;