'use client';
import React from 'react';
import { links } from '../data';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const Home = () => {
  return (
    <div
      id='home'
      className='w-full h-screen text-center'
    >
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='tracking-widest text-gray-800 dark:text-gray-500 text-sm sm:text-base'>
            Welcome, my name is
          </p>
          <h1 className='text-4xl sm:text-5xl py-1 sm:py-4 text-gray-700 dark:text-gray-400'>
            <span className='text-[#8c52ff]'>Isaac Lal</span>
          </h1>
          <h2 className='py-4 justify-center flex text-base sm:text-lg text-gray-700 dark:text-gray-400'>
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
          <p className='text-sm sm:text-base py-2 sm:py-4 pb-10 sm:pb-20 sm:max-w-[70%] m-auto'>
            I&#39;m a Software Engineer that specializes in full-stack web
            development. I am looking to be a part of the process of making
            beautiful, responsive, and functional applications and learning
            every single day to improve my skills. With the belief that my work
            ethic and dedication can contribute to something great, I hope to
            have the opportunity to deliver that same experience with you.
          </p>
          <p className='text-sm sm:text-base uppercase tracking-widest text-[#8c52ff]'>
            Let&#39;s Connect
          </p>
          <div className='text-base sm:text-lg flex items-center justify-between max-w-[330px] m-auto py-4'>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.name}
                target='_blank'
                rel='noreferrer'
                passHref
              >
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
