import React from 'react'
import { useState } from "react";
import imagen from "../assets/img/krakioImg.png"
import {
    NavLink,
  } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center h-[92px] z-20 px-4">
      <img src={imagen} alt="" width="92px" height="60px" className="max-sm:mr-auto"/>
      <button className="block sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
      </button>
      <ul className={`flex font-bold text-white items-center ${isOpen ? 'block' : 'hidden'} sm:flex sm:flex-row sm:static sm:bg-transparent max-sm:flex-col max-sm:absolute max-sm:top-[92px] max-sm:left-0 max-sm:w-full max-sm:bg-white`}>
        <li className="ml-10 max-sm:py-3"><NavLink to="/" className={({ isActive }) =>
          `max-sm:text-black ${isActive ? 'text-blue-500' : 'text-white'}` 
        } onClick={handleNavLinkClick}>Home</NavLink></li>
        <li className="ml-10 max-sm:py-3"><NavLink to="/about" className={({ isActive }) =>
          `max-sm:text-black ${isActive ? 'text-blue-500' : 'text-white'}` 
        } onClick={handleNavLinkClick}>About us</NavLink></li>
        <li className="ml-10 xl:relative group py-2">
          <a onClick={handleDropdownClick} className="flex items-center max-sm:text-black text-white justify-center">
            Pages
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" width="16" height="16" fill="currentColor" className="bi bi-chevron-down ml-1" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </a>
          <ul className={`xl:absolute flex-col ${isDropdownOpen ? 'flex' : 'hidden'} bg-white text-black mt-2 xl:left-0 w-full`}>
            <li className="px-4 py-2 max-sm:py-3"><NavLink to="/services" className={({ isActive }) =>
              `max-sm:text-black ${isActive ? 'text-blue-500' : 'text-black'}` 
            } onClick={handleNavLinkClick}>Services</NavLink></li>
            <li className="px-4 py-2 max-sm:py-3"><NavLink to="/portfolio" className={({ isActive }) =>
              `max-sm:text-black ${isActive ? 'text-blue-500' : 'text-black'}` 
            } onClick={handleNavLinkClick}>Portfolio</NavLink></li>
          </ul>
        </li>
        <li className="ml-10 max-sm:py-3"><NavLink to="/contact" className={({ isActive }) =>
          `max-sm:text-black ${isActive ? 'text-blue-500' : 'text-white'}` 
        } onClick={handleNavLinkClick}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}
