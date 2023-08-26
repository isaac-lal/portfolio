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
              I am a self-taught developer who is passionate about delivering
              functional applications that is aesthetically pleasing and
              seamless for the user. Interacting with websites from a young age,
              I was very intrigued by the steps needed to build them. Aspects
              like the design, the buttons, the load speed, and the features
              really made me want to be a part of the process in developing
              them.{' '}
            </p>
            <p
              className='my-5 sm:pr-8 text-sm sm:text-base'
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-offset='200'
              data-aos-once='true'>
              My own journey started off by following tutorials on YouTube on
              how to build really simple websites with basic HTML and CSS. Then,
              I included some JavaScript to add animations and functionality.
              Once I mastered the basics, I entered the world of full-stack web
              development, utilizing knowledge of various frameworks, libraries,
              databases, and services. These skills have allowed me to configure
              both the front-end and back-end of an application to serve a
              smooth and consistent development process.{' '}
            </p>
            <p
              className='my-5 sm:pr-8 text-sm sm:text-base'
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-offset='200'
              data-aos-once='true'>
              Eager to grow my knowledge, I have consistently been learning
              every day from many resources to improve my skills. Having a
              growth mindset towards development has allowed me to understand
              key concepts and translate them into a fully fledged application.
              With these skills that I have learned, I am able to create
              functional products that perform well and looks great. I am super
              excited to continue learning more every single day to expand my
              knowledge and provide the best experience to my users.{' '}
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
