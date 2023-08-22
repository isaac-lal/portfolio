import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className='flex flex-col'>
      <div className='m-0 sticky text-gray-400 text-center bottom-0 p-4'>
        <p>Copyright ©️ 2023 | Isaac Lal</p>
      </div>
    </footer>
  );
};

export default Footer;
