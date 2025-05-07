import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={menuOpen ? 'sticky' : ''}>
<ul className={`navbar ${menuOpen ? 'active' : ''}`}>
        <li>
          <a
            href='#home'
            className='nav-link'
            onClick={closeMenu}>
            HOME
          </a>
        </li>
        <li>
          <a
            href='#about'
            className='nav-link'
            onClick={closeMenu}>
            ABOUT
          </a>
        </li>
        <li>
          <a
            href='#skills'
            className='nav-link'
            onClick={closeMenu}>
            SKILLS
          </a>
        </li>
        <li>
          <a
            href='#projects'
            className='nav-link'
            onClick={closeMenu}>
            PROJECTS
          </a>
        </li>
        <li>
          <a
            href='#contact'
            className='nav-link'
            onClick={closeMenu}>
            CONTACT
          </a>
        </li>
      </ul>

      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </header>
  );
};

export default Navbar;
