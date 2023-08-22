'use client';
import React, { useEffect } from 'react';
import { projects } from '../data';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
          data-aos-duration='1000'>
          Projects
        </h6>
        <h2
          data-aos='fade-right'
          data-aos-duration='1000'>
          What I&#39;ve Built
        </h2>

        <div className='grid lg:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <div
              data-aos='fade-up'
              data-aos-duration='1000'>
              <div
                key={project.id}
                className='relative flex items-center justify-center h-auto w-full  shadow-xl shadow-gray-400 dark:shadow-gray-100 rounded-xl p-4 group hover:shadow-[#8c52ff] hover:scale-105 hover:bg-[#ecf0f3] hover:dark:bg-black ease-in duration-100'>
                <Image
                  className='rounded-xl group-hover:opacity-10'
                  src={project.img}
                  alt='/'
                  width='2000'
                  height='1390'
                />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                  <h2 className='text-2xl sm:text-3xl pb-5 sm:pb-10 tracking-wider text-center '>
                    {project.name}
                  </h2>
                  <div className='grid md:grid-cols-2 gap-4 sm:gap-8'>
                    <Link
                      href={project.demoURL}
                      target='_blank'
                      rel='noreferrer'
                      passHref>
                      <p className='text-center py-3 rounded-3xl bg-white dark:bg-[#232323] font-bond sm:text-lg cursor-pointer hover:bg-[#8c52ff] ease-in duration-200'>
                        Demo
                      </p>
                    </Link>
                    <Link
                      href={project.codeURL}
                      target='_blank'
                      rel='noreferrer'
                      passHref>
                      <p className='text-center py-3 rounded-3xl bg-white dark:bg-[#232323] font-bond sm:text-lg cursor-pointer hover:bg-[#8c52ff] ease-in duration-200'>
                        Code
                      </p>
                    </Link>
                  </div>
                  <h2 className='text-center text-xl sm:text-2xl pt-2 sm:pt-8'>
                    Enjoy!
                  </h2>
                  <p className='text-center'>(Work In Progress)</p>
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
