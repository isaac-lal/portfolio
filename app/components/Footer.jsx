import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='flex flex-col'>
      <div
        className='
        sticky
             text-xl sm:text-2xl sm:translate-y-52 md:translate-y-80 lg:translate-y-96 text-gray-400 text-center
             font-bold
             border-t-4 border-gray-500
             bottom-0
             p-4'
             data-aos='fade-up'
              data-aos-duration='2000'
             >
        © 2023 Isaac Lal
      </div>
    </div>
  );
};

export default Footer;
