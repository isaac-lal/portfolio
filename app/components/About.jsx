'use client';
import React, { useEffect } from 'react';
import About_IMG from '../../public/assets/about.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id='about'
      className='w-full px-6 sm:px-16 md:px-28'>
      <div className='max-w-[1240px] mx-auto h-full'>
        <h6
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-offset='200'
          data-aos-once='true'>
          About
        </h6>
        <h2
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-offset='200'
          data-aos-once='true'>
          Who I Am
        </h2>
        <div className='flex items-center justify-center lg:flex-row flex-col'>
          <div>
            <p
              className='my-5 lg:pr-8 text-sm md:text-base'
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-offset='200'
              data-aos-once='true'>
              I&#39;ve been using websites since I was young, relying on them
              for entertainment and information every day. The web has changed
              my personal life and improved it in so many ways. Due to that, it
              got me curious about the steps needed to build websites. Details
              like design, features, and ease of use made me really want to
              learn how to make websites myself. I was then motivated to look
              into the process of making web applications that other people can
              use.{' '}
            </p>
            <p
              className='my-5 lg:pr-8 text-sm md:text-base'
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-offset='200'
              data-aos-once='true'>
              My journey began by following tutorials on YouTube to create
              simple websites using basic HTML and CSS. Later, I added
              JavaScript for dynamic functionality. I made numerous small
              projects with these vanilla technologies before advancing into my
              journey. After mastering the basics, I dove into React using the
              Vite build tool, which I spent a lot of time to get good on. This
              was just the beginning of my journey. Since then, I have learned a
              ton of new technology to keep my knowledge up to date and be as
              efficient as possible.{' '}
            </p>
            <p
              className='my-5 lg:pr-8 text-sm md:text-base'
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-offset='200'
              data-aos-once='true'>
              Going from knowing nothing about the web to having a solid concept
              of what it involves makes me want to learn even more. Adopting a
              growth mindset toward development has enabled me to understand key
              concepts and turn them into complete applications. With these
              acquired skills, I&#39;m able to create functional software that
              works well and looks impressive. I&#39;m very excited to keep
              learning more each day, to increase my knowledge and provide the
              best experience to my users.{' '}
            </p>
          </div>
          <div
            className='lg:pt-0 pt-20'
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-offset='200'
            data-aos-once='true'>
            <div className='w-auto h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-100 rounded-full flex items-center justify-center p-4 hover:scale-105 hover:shadow-blue-500 hover:text-blue-500 ease-in duration-300'>
              <Image
                src={About_IMG}
                className='rounded-full'
                width={2000}
                alt='/'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
