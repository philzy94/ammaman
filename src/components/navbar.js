import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function closeMobileNav() {
    setShowNav(false);
  }

  function toggleNav() {
    setShowNav(!showNav);
  }

  function closeMobileNavOnResize() {
    if (window.innerWidth > 700) {
      closeMobileNav();
    }
  }

  window.onresize = closeMobileNavOnResize;

  return (
    <div className="topbar w-full">
      <div className="profile-pic">
        <img src="{ProfilePic}" alt="" />
      </div>
      <div onClick={toggleNav} className="nav-toggler">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className={`tabs ${showNav && 'mobile-tabs'}`}>
        <Link to="/">
          <a
            onClick={closeMobileNav}
            href=""
            className="tab-button text-xs font-bold uppercase text-gray-600 hover:text-gray-800"
          >
            Home
          </a>
        </Link>
        <Link to="/about">
          <a
            onClick={closeMobileNav}
            href=""
            className="tab-button text-xs font-bold uppercase text-gray-600 hover:text-gray-800"
          >
            About
          </a>
        </Link>
        <Link to="/experience">
          <a
            onClick={closeMobileNav}
            href=""
            className="tab-button text-xs font-bold uppercase text-gray-600 hover:text-gray-800"
          >
            Experience
          </a>
        </Link>
        <Link to="/projects">
          <a
            onClick={closeMobileNav}
            href=""
            className="tab-button text-xs font-bold uppercase text-gray-600 hover:text-gray-800"
          >
            Projects
          </a>
        </Link>
        <Link to="/skills">
          <a
            onClick={closeMobileNav}
            href=""
            className="tab-button text-xs font-bold uppercase text-gray-600 hover:text-gray-800"
          >
            Skills
          </a>
        </Link>
        <Link to="/contact">
          <a
            onClick={closeMobileNav}
            href=""
            className="tab-button text-xs font-bold uppercase text-gray-600 hover:text-gray-800"
          >
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
}
