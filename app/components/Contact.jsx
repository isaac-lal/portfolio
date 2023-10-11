'use client';
import React, { useRef, useEffect } from 'react';
import { links } from '../data';
import Contact_IMG from '../../public/assets/contact.jpg';
import emailjs from '@emailjs/browser';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
          alert(
            '"Thank you for sending your message! I\'ll contact you shortly! :)" -Isaac Lal'
          );
          e.target.reset();
        },
        error => {
          console.log(error.text);
          alert(
            '"There was an error sending your message. If it continues, send me an email at: isaaclal124@gmail.com :)" -Isaac Lal'
          );
        }
      );
  };

  return (
    <section
      id='contact'
      className='w-full mt-32 px-6 sm:px-16 md:px-28'>
      <div className='max-w-[1240px] mx-auto'>
        <h6
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-offset='200'
          data-aos-once='true'>
          Contact
        </h6>
        <h2
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-offset='200'
          data-aos-once='true'>
          Where I&#39;m Available
        </h2>
        <div
          data-aos='flip-left'
          data-aos-duration='1000'
          data-aos-offset='200'
          data-aos-once='true'>
          <div className='w-full h-auto shadow-lg shadow-gray-400 hover:scale-105 dark:shadow-gray-100 rounded-xl lg:p-4 hover:shadow-blue-500 ease-in duration-100'>
            <div
              className='p-4'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-offset='200'
              data-aos-once='true'>
              <form
                ref={form}
                onSubmit={sendEmail}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm md:text-base py-2'>
                      Name
                    </label>
                    <input
                      type='text'
                      name='user_name'
                      required
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm md:text-base py-2'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      name='user_number'
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm md:text-base py-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='user_email'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm md:text-base py-2'>
                    Subject
                  </label>
                  <input
                    type='text'
                    name='subject'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm md:text-base py-2'>
                    Message
                  </label>
                  <textarea
                    className='dark:bg-[#121212] border-2 border-gray-300 dark:border-[#313131] rounded-lg p-3 flex'
                    rows='16'
                    name='message'
                    required></textarea>
                </div>
                <button className='cursor-pointer hover:scale-105 w-full p-4 text-black dark:text-gray-100 mt-4 hover:bg-blue-500 ease-in duration-200'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link
            href='/#home'
            passHref>
            <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-100 p-4 cursor-pointer hover:scale-110 hover:shadow-blue-500 hover:text-blue-500 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='hover:text-blue-500'
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
