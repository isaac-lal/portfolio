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
      className='w-full h-screen text-center'>
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
            <span className='text-[#8c52ff]'>Isaac Lal</span>
          </h1>
          <h2
            className='py-4 justify-center flex text-base sm:text-lg text-gray-700 dark:text-gray-400'
            data-aos='fade-down'
            data-aos-duration='1000'
            data-aos-delay='2500'
            data-aos-once='true'>
            <TypeAnimation
              sequence={[
                'A Software Engineer',
                3500,
                'A Web Developer',
                3500,
                'A Full-Stack Developer',
                3500,
                'A Self-Taught Learner',
                3500,
                'A Coder',
                3500,
                'A Programmer',
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
            className='text-sm sm:text-base py-2 sm:py-4 pb-10 sm:pb-20 sm:max-w-[70%] m-auto'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay='2500'
            data-aos-once='true'>
            This is my portfolio, showcasing all of my knowledge as a Software
            Engineer, with a primary focus on Full-Stack Web Development. Here
            you will find my skills in relevant technologies, my finest
            projects, and a contact form to get in touch. I hope you enjoy!
          </p>
          <p
            className='text-sm sm:text-base uppercase tracking-widest text-[#8c52ff]'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay='3000'
            data-aos-once='true'>
            Let&#39;s Connect
          </p>
          <div
            className='text-base sm:text-lg flex items-center justify-between max-w-[330px] m-auto py-4'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay='3000'
            data-aos-once='true'>
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
    </section>
  );
};

export default Home;
