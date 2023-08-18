'use client';
import React from 'react';
import { skills } from '../data';
import Image from 'next/image';

const Skills = () => {
  return (
    <div
      id='skills'
      className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h6>Skills</h6>
        <h2>What I Can Do</h2>
        <div className='text-sm sm:text-base grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className='p-6 shadow-lg shadow-gray-400 dark:shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#8c52ff] hover:text-[#8c52ff] ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto cursor-pointer'>
                  <Image
                    src={skill.img}
                    width='64'
                    height='64'
                    alt='HTML'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
