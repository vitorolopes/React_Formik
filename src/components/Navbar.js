/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  return (
    <div className='navbar' >
      <div className="icon">
          <a href="#"   id="btnTheme">
            <FontAwesomeIcon icon={faMoon} />
         </a>
      </div>
 
      <nav>
        <ul>
          <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'activeElement' : '')}>
                  Home
              </NavLink>
          </li>
          <li>
              <NavLink to="/users" className={({ isActive }) => (isActive ? 'activeElement' : '')}>
                  Users
              </NavLink>
          </li>
          <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'activeElement' : '')}>
                  Contact
              </NavLink>
          </li> 
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

