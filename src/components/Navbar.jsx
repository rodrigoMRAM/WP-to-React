import React from 'react'
import imagen from "../assets/img/krakioImg.png"
import {
    NavLink,
  } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center h-[92px] z-20">
        <img src={imagen} alt="" width="92px" height="60px"/>
        <ul className="flex font-bold text-white max-sm:flex-col max-sm:absolute max-sm:mtz-50 items-center">
            <li className="ml-10"><NavLink to="/" className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-white'
            }>Home</NavLink></li>
            <li className="ml-10"><NavLink to="/about" className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-white'
            }>About us</NavLink></li>
            <li className="ml-10"><NavLink to="/services" className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-white'
            }>Pages</NavLink></li>
            <li className="ml-10"><NavLink to="/contact" className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-white'
            }>Contact</NavLink></li>
        </ul>
   </nav>
  )
}
