import React, { useState } from 'react';

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
        <a
          onClick={closeMobileNav}
          href="#home"
          className="tab-button text-xs font-bold uppercase text-gray-600 hover:text-gray-800"
        >
          Home
        </a>
        <a
          onClick={closeMobileNav}
          href="#about"
          className="tab-button text-xs font-bold uppercase text-gray-600 hover:text-gray-800"
        >
          About
        </a>
        <a
          onClick={closeMobileNav}
          href="#experience"
          className="tab-button text-xs font-bold uppercase text-gray-600 hover:text-gray-800"
        >
          Experience
        </a>
        <a
          onClick={closeMobileNav}
          href="#projects"
          className="tab-button text-xs font-bold uppercase text-gray-600 hover:text-gray-800"
        >
          Projects
        </a>
        <a
          onClick={closeMobileNav}
          href="#skills"
          className="tab-button text-xs font-bold uppercase text-gray-600 hover:text-gray-800"
        >
          Skills
        </a>
        <a
          onClick={closeMobileNav}
          href="#contact"
          className="tab-button text-xs font-bold uppercase text-gray-600 hover:text-gray-800"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
