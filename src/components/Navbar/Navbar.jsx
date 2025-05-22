import React, { useState } from 'react';
import './Navbar.css';
import { navs } from "../data"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={menuOpen ? 'sticky' : ''}>
      <div className='Navbar__Wrapper'>
        <img
          src='assets/logo.png'
          alt=''
          width={75}
          height={75}
        />
        <ul className={`Navbar__List ${menuOpen ? 'active' : ''}`}>
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
    </header>
  );
};

export default Navbar;
