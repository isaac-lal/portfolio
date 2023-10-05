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
    <section
      id='home'
      className='overflow-auto px-6 w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p
            className='tracking-widest text-gray-800 dark:text-gray-500 text-base sm:text-lg'
            data-aos='fade-down'
            data-aos-duration='1000'
            data-aos-delay='200'
            data-aos-once='true'>
            Welcome, my name is
          </p>
          <h1
            className='text-4xl sm:text-5xl py-1 sm:py-4 text-gray-700 dark:text-gray-400'
            data-aos='fade-down'
            data-aos-duration='1000'
            data-aos-delay='1500'
            data-aos-once='true'>
            <span className='text-[#1BA8F0]'>Isaac Lal</span>
          </h1>
          <h2
            className='py-4 justify-center flex text-lg sm:text-xl text-gray-700 dark:text-gray-400'
            data-aos='zoom-out'
            data-aos-duration='1000'
            data-aos-delay='3000'
            data-aos-once='true'>
            <TypeAnimation
              sequence={[
                'A Web Developer',
                3500,
                'A Front-End Developer',
                3500,
                'A Back-End Developer',
                3500,
                'A Full-Stack Developer',
                3500,
                'A Software Engineer',
                3500,
                'A Passionate Learner',
                3500,
                'A Nerd',
                3500,
                'A Nice Person',
                10000,
                'a one piece fan',
                500,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1.5em' }}
            />
          </h2>
          <p
            className='text-base sm:text-lg py-2 sm:py-4 pb-10 sm:pb-20 sm:max-w-[70%] m-auto'
            data-aos='zoom-out'
            data-aos-duration='1000'
            data-aos-delay='3000'
            data-aos-once='true'>
            Here is my portfolio, displaying all of my expertise as a Web
            Developer with full-stack experience. This is where you&#39;ll
            discover my skills in relevant technologies, my best projects, and a
            contact form for getting in touch with me. I hope you will enjoy!
          </p>
          <p
            className='text-base sm:text-lg uppercase tracking-widest text-[#1BA8F0]'
            data-aos='zoom-out'
            data-aos-duration='1000'
            data-aos-delay='3000'
            data-aos-once='true'>
            Let&#39;s Connect
          </p>
          <div
            className='text-base sm:text-lg flex items-center justify-between max-w-[330px] m-auto py-4'
            data-aos='zoom-out'
            data-aos-duration='1000'
            data-aos-delay='3000'
            data-aos-once='true'>
            {links.map(link => (
              <Link
                key={link.id}
                href={link.name}
                target='_blank'
                rel='noreferrer'
                passHref>
                <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#1BA8F0] hover:text-[#1BA8F0] ease-in duration-300'>
                  {link.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
