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
    <header className={shadow ? 'Navbar__Shadow' : ''}>
      <div className={menuOpen ? 'sticky' : ''}>
        <div className='Navbar__Wrapper'>
          <img
            src='/assets/logo.png'
            alt=''
            width={75}
            height={75}
          />
          <ul
            className={`Navbar__List ${
              menuOpen ? 'active Navbar__Shadow' : ''
            }`}>
            {navs.map((nav) => (
              <li>
                <a
                  key={nav.id}
                  href={nav.url}
                  className='Navbar__Links'
                  onClick={closeMenu}>
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`Navbar__Hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}>
            <span className='Navbar__Bar'></span>
            <span className='Navbar__Bar'></span>
            <span className='Navbar__Bar'></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;