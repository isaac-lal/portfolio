'use client';
import React, { useEffect } from 'react';
import { links } from '../data';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id='home'
      className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p
            className='tracking-widest text-gray-800 dark:text-gray-500 text-sm sm:text-base'
            data-aos='fade-down'
            data-aos-duration='2000'>
            Welcome, my name is
          </p>
          <h1
            className='text-4xl sm:text-5xl py-1 sm:py-4 text-gray-700 dark:text-gray-400'
            data-aos='fade-down'
            data-aos-duration='2000'>
            <span className='text-[#8c52ff]'>Isaac Lal</span>
          </h1>
          <h2
            className='py-4 justify-center flex text-base sm:text-lg text-gray-700 dark:text-gray-400'
            data-aos='fade-down'
            data-aos-duration='2000'>
            <TypeAnimation
              sequence={[
                'A Software Engineer',
                3500,
                'A Web Developer',
                3500,
                'A Coder',
                3500,
                'A Tech Enthusiast',
                3500,
                'A Digital Consumer',
                3500,
                'A Nerd',
                3500,
                'A Nice Person',
                3500,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em' }}
            />
          </h2>
          <p
            className='text-sm sm:text-base py-2 sm:py-4 pb-10 sm:pb-20 sm:max-w-[70%] m-auto'
            data-aos='fade-up'
            data-aos-duration='3000'>
            Self-taught developer who is passionate about delivering functional
            applications that is aesthetically pleasing and seamless for the
            user. Eager to grow my knowledge, I have consistently been learning
            every day from my peers and studying many resources to improve my
            skills. I am really passionate about developing outstanding products
            and I am hoping to have an opportunity to do the same with you.
          </p>
          <p
            className='text-sm sm:text-base uppercase tracking-widest text-[#8c52ff]'
            data-aos='fade-up'
            data-aos-duration='3000'>
            Let&#39;s Connect
          </p>
          <div
            className='text-base sm:text-lg flex items-center justify-between max-w-[330px] m-auto py-4'
            data-aos='fade-up'
            data-aos-duration='3000'>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.name}
                target='_blank'
                rel='noreferrer'
                passHref>
                <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#8c52ff] hover:text-[#8c52ff] ease-in duration-300'>
                  {link.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
