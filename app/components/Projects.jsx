'use client';
import React, { useEffect } from 'react';
import { projects } from '../data';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id='projects'
      className='w-full mt-32 px-6 sm:px-16 md:px-28'>
      <div className='max-w-[1240px] mx-auto h-full'>
        <h6
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-offset='200'
          data-aos-once='true'>
          Projects
        </h6>
        <h2
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-offset='200'
          data-aos-once='true'>
          What I&#39;ve Built
        </h2>
        <div className='grid lg:grid-cols-2 gap-8'>
          {projects.map(project => (
            <div key={project.id}>
              <div
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-offset='200'
                data-aos-once='true'>
                <div className='items-center justify-center h-auto w-full shadow-lg shadow-gray-400 dark:shadow-gray-100 rounded-xl p-4 group hover:shadow-blue-500 hover:scale-105 ease-in duration-100'>
                  <Image
                    className='rounded-xl group-hover:opacity-30'
                    src={project.img}
                    alt='/'
                    width='2000'
                    height='1390'
                  />
                  <h2 className='text-xl md:text-2xl pb-6 sm:pb-5 tracking-wider text-center '>
                    {project.name}
                  </h2>
                  <div className='flex items-center justify-center'>
                    <div className='pr-2'>
                      <div className='px-2 sm:px-4 p-1.5 sm:p-2 rounded-full bg-white dark:bg-[#323232] cursor-pointer hover:bg-blue-500 ease-in duration-200'>
                        <Link
                          href={project.demoURL}
                          target='_blank'
                          rel='noreferrer'
                          passHref>
                          <div className='flex items-center justify-center'>
                            <p className='font-bold text-sm md:text-base'>
                              Demo
                            </p>
                            <div className='pl-2'>
                              {' '}
                              <FiExternalLink size={17} />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className='pl-2'>
                      <div className='px-2 sm:px-4 p-1.5 sm:p-2 rounded-full bg-white dark:bg-[#323232] cursor-pointer hover:bg-blue-500 ease-in duration-200'>
                        <Link
                          href={project.codeURL}
                          target='_blank'
                          rel='noreferrer'
                          passHref>
                          <div className='flex items-center justify-center'>
                            <p className='font-bold text-sm md:text-base'>
                              Code
                            </p>
                            <div className='pl-2'>
                              {' '}
                              <AiFillGithub size={20} />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <h2 className='text-center text-sm md:text-base text-gray-400 pt-2 sm:pt-8'>
                    {project.description}
                  </h2>
                  <div className='flex items-center justify-center'>
                    <p className='inline-block items-center text-center rounded-full p-1.5 bg-white dark:bg-[#232323] text-xs sm:text-sm'>
                      {project.technologies}
                    </p>
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

export default Projects;
