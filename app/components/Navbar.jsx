'use client';
import React, { useState, useEffect } from 'react';
import Logo from '../../public/assets/logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navs, links } from '../data';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);
  return (
    <header
      data-aos='fade-down'
      data-aos-duration='1500'
      data-aos-offset='200'
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl bg-[#ecf0f3] dark:bg-black shadow-[#CCCCCC] dark:shadow-[#222222] z-[100]'
          : 'fixed w-full h-20 bg-[#ecf0f3] dark:bg-black z-[100]'
      }>
      <div className='flex justify-between items-center w-full h-full px-6 2xl:px-16'>
        <Link
          href='https://github.com/isaac-lal/portfolio'
          target='_blank'
          passHref>
          <Image
            src={Logo}
            alt='/'
            width='125'
            height='100'
          />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            {navs.map((nav) => (
              <Link
                key={nav.id}
                href={nav.url}
                passHref>
                <li className='ml-10 text-sm uppercase hover:border-b-2 transition-all border-[#8c52ff] hover:text-[#8c52ff] ease-in duration-100'>
                  {nav.name}
                </li>
              </Link>
            ))}
          </ul>

          <div
            onClick={handleNav}
            className='md:hidden cursor-pointer'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-[#ecf0f3]/70 dark:bg-black/70'
            : ''
        }>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#000000] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link
                href='https://github.com/isaac-lal/portfolio'
                target='_blank'
                passHref>
                <Image
                  src={Logo}
                  width='100'
                  height='75'
                  alt='/'
                />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-100 p-3 cursor-pointer hover:shadow-[#8c52ff] hover:text-[#8c52ff] ease-in duration-100'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b-4 border-gray-300 dark:border-gray-500 my-4'>
              <p className='text-sm sm:text-base w-[85%] md:w-[90%] py-4'>
                Welcome to my website!
              </p>
            </div>
          </div>
          <div className='py-4'>
            <ul className='uppercase'>
              {navs.map((nav) => (
                <Link
                  key={nav.id}
                  href={nav.url}
                  passHref>
                  <div className='flex items-center justify-center'>
                    <li
                      onClick={() => setNav(false)}
                      className='py-2 sm:py-4 text-sm uppercase hover:border-b-2 transition-0.3 border-[#8c52ff] hover:text-[#8c52ff] ease-in duration-100'>
                      {nav.name}
                    </li>
                  </div>
                </Link>
              ))}
            </ul>
            <div className='pt-10 sm:pt-40'>
              <p className='text-sm flex justify-center items-center sm:text-base uppercase tracking-widest text-[#8c52ff]'>
                Let&#39;s Connect
              </p>
              <div className='text-base sm:text-lg flex items-center justify-between my-4 w-full sm:w-[80%]'>
                {links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.name}
                    target='_blank'
                    rel='noreferrer'
                    passHref>
                    <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-100 p-3 cursor-pointer hover:scale-110 hover:shadow-[#8c52ff] hover:text-[#8c52ff] ease-in duration-300'>
                      {link.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
