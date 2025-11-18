import React from 'react';


import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa"; // Import FaPinterest
import { BiEnvelope } from "react-icons/bi";

const NavLinks = ({ handleNav }) => {
  return (
    <ul className='nav-links'>
      {/* Instagram - Use <a> tag */}
      <li onClick={handleNav}>
        <a href="https://www.instagram.com/bajwaa311" target='_blank' rel="noopener noreferrer" className='nav-link'>
          <FaInstagram />
        </a>
      </li>

      <li onClick={handleNav}>
        <a href="https://www.linkedin.com/in/muhammad-ali-a48b99209" target='_blank' rel="noopener noreferrer" className='nav-link'>
          <FaLinkedin />
        </a>
      </li>

      <li onClick={handleNav}>
        <a href="https://www.pinterest.com/MuhammadAliBajwa7474" target='_blank' rel="noopener noreferrer" className='nav-link'>
          <FaPinterest /> {/* Changed to FaPinterest */}
        </a>
      </li>

      <li onClick={handleNav}>
        <a href="mailto:bajwaa311@gmail.com" target='_blank' rel="noopener noreferrer" className='nav-link'>
          <BiEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;