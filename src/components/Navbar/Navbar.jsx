import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={menuOpen ? 'sticky' : ''}>
      <div className='Navbar__Wrapper'>
        <img
          src='src/assets/logo.png'
          alt=''
          width={75}
          height={75}
        />
        <ul className={`Navbar__List ${menuOpen ? 'active' : ''}`}>
          <li>
            <a
              href='#home'
              className='Navbar__Links'
              onClick={closeMenu}>
              HOME
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='Navbar__Links'
              onClick={closeMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a
              href='#skills'
              className='Navbar__Links'
              onClick={closeMenu}>
              SKILLS
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='Navbar__Links'
              onClick={closeMenu}>
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='Navbar__Links'
              onClick={closeMenu}>
              CONTACT
            </a>
          </li>
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
