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
              seamless for the user. Eager to grow my knowledge, I have
              consistently been learning every day from many resources to
              improve my skills.{' '}
            </p>
            <p
              className='my-5 sm:pr-8 text-sm sm:text-base'
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-offset='200'
              data-aos-once='true'>
              Interacting with websites from a young age, I was very intrigued
              by the steps needed to build them. I started off by following
              tutorials on YouTube on how to build a simple landing page with
              HTML and CSS. Afterwards, I wanted to implement functionality in
              my website so I used JavaScript. When I was more advanced I then
              got into the advanced concepts by using all the modern
              technologies today.{' '}
            </p>
            <p
              className='my-5 sm:pr-8 text-sm sm:text-base'
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-offset='200'
              data-aos-once='true'>
              Having a growth mindset towards development has allowed me to
              understand key concepts and translate them into a fully fledged
              application. With these skills that I have learned, I am able to
              create functional products that perform well and looks great. I am
              continuing to learn more every single day to improve my knowledge.{' '}
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
