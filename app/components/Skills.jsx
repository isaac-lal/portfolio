'use client';
import React, { useEffect } from 'react';
import { skills } from '../data';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id='skills'
      className='w-full mt-32 px-6 sm:px-16 md:px-28'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h6
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-offset='200'
          data-aos-once='true'>
          Skills
        </h6>
        <h2
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-offset='200'
          data-aos-once='true'>
          What I Can Do
        </h2>
        <div className='text-xs sm:text-sm grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4'>
          {skills.map(skill => (
            <div key={skill.id}>
              <div
                data-aos='zoom-in-up'
                data-aos-duration='1000'
                data-aos-offset='200'
                data-aos-once='true'>
                <div className='p-6 shadow-lg shadow-gray-400 dark:shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#8c52ff] hover:text-[#8c52ff] ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto cursor-pointer'>
                      <Image
                        src={skill.img}
                        width='64'
                        alt='HTML'
                        data-aos='fade-up'
                        data-aos-duration='1500'
                        data-aos-offset='200'
                        data-aos-once='true'
                      />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3>{skill.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
