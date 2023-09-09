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
              className='my-5 sm:pr-8 text-sm sm:text-base'
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-offset='200'
              data-aos-once='true'>
              I'm a Full-Stack Web Developer who loves creating functional
              applications that are pleasing to look at and easy to use.
              I&#39;ve been using websites since I was young, relying on them
              for entertainment and information every day. The web has changed
              my personal life a lot and got me curious about the steps to build
              websites. Things like design, efficiency, and features, and how
              they work together, made me really want to learn how to make them
              myself. This led me to want to join the process of making web
              applications so that other people can feel the same happiness I
              have felt.{' '}
            </p>
            <p
              className='my-5 sm:pr-8 text-sm sm:text-base'
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-offset='200'
              data-aos-once='true'>
              My journey began by following tutorials on YouTube to create
              simple websites using basic HTML and CSS. Later, I added
              JavaScript for functionality and custom animations. I made
              numerous small projects and a couple of larger websites before
              advancing. After mastering the basics, I dove into frameworks,
              libraries, databases, and services. This allowed me to explore
              Full-Stack Web Development deeply. These skills enabled me to set
              up both the front-end and back-end of applications, ensuring a
              seamless and steady development process.{' '}
            </p>
            <p
              className='my-5 sm:pr-8 text-sm sm:text-base'
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-offset='200'
              data-aos-once='true'>
              Eager to expand my knowledge, I&#39;ve consistently been learning
              every day from various resources to improve my skills. Going from
              knowing nothing about the web to having a solid concept of what it
              involves makes me want to learn even more. Adopting a growth
              mindset toward development has enabled me to understand key
              concepts and turn them into complete applications. With these
              acquired skills, I&#39;m able to create functional software that
              work well and look impressive. I&#39;m very excited to keep
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
            <div className='w-auto h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-100 rounded-full flex items-center justify-center p-4 hover:scale-105 hover:shadow-[#8c52ff] hover:text-[#8c52ff] ease-in duration-300'>
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
