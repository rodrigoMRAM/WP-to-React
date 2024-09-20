import React from 'react'
import imagen from "../img/krakioImg.png"
import {
    Link,
  } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center h-[92px] z-20">
        <img src={imagen} alt="" srcset="" width="92px" height="60px"/>
        <ul className="flex font-bold text-white max-sm:flex-col max-sm:absolute max-sm:mtz-50 items-center">
            <li className="ml-10"><Link to="/">Home</Link></li>
            <li className="ml-10"><Link to="/about">About us</Link></li>
            <li className="ml-10"><Link to="">Pages</Link></li>
            <li className="ml-10"><Link to="/contact">Contact</Link></li>
        </ul>
   </nav>
  )
}
