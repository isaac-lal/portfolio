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
      className='w-full mt-16 px-2 sm:px-16 md:px-28 lg:px-40 flex items-center'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h6
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-offset='200'>
          Projects
        </h6>
        <h2
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-offset='200'>
          What I&#39;ve Built
        </h2>

        <div className='grid lg:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <div key={project.id}>
              <div
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-offset='200'>
                <div className='flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-100 rounded-xl p-4 group hover:shadow-[#8c52ff] hover:scale-105 hover:bg-[#ecf0f3] hover:dark:bg-black ease-in duration-100'>
                  <Image
                    className='rounded-xl group-hover:opacity-10'
                    src={project.img}
                    alt='/'
                    width='2000'
                    height='1390'
                  />
                  <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h2 className='text-lg sm:text-xl pb-2 sm:pb-5 tracking-wider text-center '>
                      {project.name}
                    </h2>
                    <div className='flex items-center justify-center'>
                      <div className='pr-2'>
                        <div className='px-2 sm:px-4 p-1.5 sm:p-2 rounded-full bg-white dark:bg-[#323232] cursor-pointer hover:bg-[#8c52ff] ease-in duration-200'>
                          <Link
                            href={project.demoURL}
                            target='_blank'
                            rel='noreferrer'
                            passHref>
                            <div className='flex items-center justify-center'>
                              <p className='font-bold text-sm sm:text-base'>
                                Demo
                              </p>
                              <div className='pl-2'>
                                {' '}
                                <FiExternalLink size={20} />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className='pl-2'>
                        <div className='px-2 sm:px-4 p-1.5 sm:p-2 rounded-full bg-white dark:bg-[#323232] cursor-pointer hover:bg-[#8c52ff] ease-in duration-200'>
                          <Link
                            href={project.codeURL}
                            target='_blank'
                            rel='noreferrer'
                            passHref>
                            <div className='flex items-center justify-center'>
                              <p className='font-bold text-sm sm:text-base'>
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
                    <h2 className='text-center text-xs sm:text-sm text-gray-400 pt-2 sm:pt-8'>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
