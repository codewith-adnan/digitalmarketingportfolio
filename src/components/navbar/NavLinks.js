import React from 'react';
// Remove Link if you're only using <a> tags, or keep it if you have actual internal links elsewhere
// import { Link } from 'react-router-dom'; // Keep this only if you have internal app links

import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa"; // Import FaPinterest
import { BiEnvelope } from "react-icons/bi";
// import { BsGithub } from "react-icons/bs"; // No longer needed

const NavLinks = ({ handleNav }) => {
  return (
    <ul className='nav-links'>
      {/* Instagram - Use <a> tag */}
      <li onClick={handleNav}>
        <a href="https://www.instagram.com/bajwaa311" target='_blank' rel="noopener noreferrer" className='nav-link'>
          <FaInstagram />
        </a>
      </li>

      {/* LinkedIn - Use <a> tag */}
      <li onClick={handleNav}>
        <a href="https://www.linkedin.com/in/muhammad-ali-a48b99209" target='_blank' rel="noopener noreferrer" className='nav-link'>
          <FaLinkedin />
        </a>
      </li>

      {/* Pinterest - Replaced GitHub */}
      <li onClick={handleNav}>
        <a href="https://www.pinterest.com/MuhammadAliBajwa7474" target='_blank' rel="noopener noreferrer" className='nav-link'>
          <FaPinterest /> {/* Changed to FaPinterest */}
        </a>
      </li>

      {/* Email - Already correct with <a> tag */}
      <li onClick={handleNav}>
        <a href="mailto:bajwaa311@gmail.com" target='_blank' rel="noopener noreferrer" className='nav-link'>
          <BiEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;