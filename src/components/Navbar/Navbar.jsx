import React, { useState, useEffect } from 'react';
import { navs } from '../data';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <header className={shadow ? 'navbar-shadow' : ''}>
      <div className={menuOpen ? 'sticky' : ''}>
        <div className='navbar-wrapper'>
          <img
            src='/assets/logo.png'
            alt=''
            width={75}
            height={75}
          />
          <ul
            className={`navbar-list ${
              menuOpen ? 'active navbar-shadow' : ''
            }`}>
            {navs.map((nav) => (
              <li key={nav.id}>
                <a
                  href={nav.url}
                  className='navbar-links'
                  onClick={closeMenu}>
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`navbar-hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}>
            <span className='navbar-bar'></span>
            <span className='navbar-bar'></span>
            <span className='navbar-bar'></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;