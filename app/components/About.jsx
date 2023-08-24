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
      className='px-2 sm:px-16 md:px-28 lg:px-40 flex items-center'>
      <div className='max-w-[1240px] m-auto'>
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
        <div className='flex lg:flex-row flex-col'>
          <p
            className='flex items-center justify-center my-5 sm:pr-8 text-sm sm:text-base'
            data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-offset='200'
            data-aos-once='true'>
            I am a self-taught developer who is passionate about delivering
            functional applications that is aesthetically pleasing and seamless
            for the user. Eager to grow my knowledge, I have consistently been
            learning every day from many resources to improve my skills. <br />
            <br /> Interacting with websites from a young age, I was very
            intrigued by the steps needed to build them. I started off with HTML
            and CSS, including a little JavaScript. Then, I focused on React and
            mastered JavaScript as my primary skills along with frameworks like
            Next.js and TailwindCSS. Finally, I learned back-end technologies
            such as MongoDB, Express, and Node.js to create a full-stack
            product.
            <br />
            <br />
            With these skills that I have learned, I am able to create
            functional products that perform well and looks great. I am
            continuing to learn more every single day to improve my knowledge. I
            hope that I can use my skills to make a product that can satisfy
            you!{' '}
          </p>
          <div
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
