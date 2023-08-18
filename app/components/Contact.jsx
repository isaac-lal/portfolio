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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            '"Thank you for sending your message! I\'ll contact you shortly! :)" -Isaac Lal'
          );
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert(
            '"There was an error sending your message. If it continues, send me an email at: isaaclal124@gmail.com :)" -Isaac Lal'
          );
        }
      );
  };

  return (
    <div
      id='contact'
      className='w-full lg:h-screen flex items-center'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <h6
          data-aos='fade-right'
          data-aos-duration='2000'>
          Contact
        </h6>
        <h2
          data-aos='fade-right'
          data-aos-duration='2000'>
          Where I&#39;m Available
        </h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div
            className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-gray-100 rounded-xl p-4 hover:shadow-[#8c52ff] ease-in duration-100'
            data-aos='flip-right'
            data-aos-duration='2000'>
            <div
              className='lg:p-4 h-full'
              data-aos='fade-up'
              data-aos-duration='3000'>
              <div>
                <Image
                  className='rounded-xl ease-in duration-300'
                  src={Contact_IMG}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2 text-[#8c52ff] text-center'>Isaac Lal</h2>
                <h3 className='text-center'>Software Engineer</h3>
                <p className='text-sm text-center sm:text-base py-4'>
                  I am available for communication through email. Just fill out
                  the form to send me an email and we&#39;ll talk!
                </p>
              </div>
              <div>
                <p className='text-sm sm:text-base uppercase pt-8 text-[#8c52ff] text-center'>
                  Let&#39;s Connect
                </p>
                <div className='text-base sm:text-lg flex items-center justify-between py-4'>
                  {links.map((link) => (
                    <Link
                      key={link.id}
                      href={link.name}
                      target='_blank'
                      rel='noreferrer'
                      passHref>
                      <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#8c52ff] hover:text-[#8c52ff] ease-in duration-300'>
                        {link.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* right */}

          <div
            className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-100 rounded-xl lg:p-4 hover:shadow-[#8c52ff] ease-in duration-100'
            data-aos='flip-left'
            data-aos-duration='2000'>
            <div
              className='p-4'
              data-aos='fade-up'
              data-aos-duration='3000'>
              <form
                ref={form}
                onSubmit={sendEmail}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      type='text'
                      name='user_name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      name='user_number'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    type='email'
                    name='user_email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='dark:bg-[#121212] border-2 border-gray-300 dark:border-[#313131] rounded-lg p-3 flex'
                    rows='16'
                    name='message'></textarea>
                </div>
                <button className='cursor-pointer hover:scale-105 w-full p-4 text-black dark:text-gray-100 mt-4 hover:bg-[#8c52ff] ease-in duration-200'>
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
            <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-100 p-4 cursor-pointer hover:scale-110 hover:shadow-[#8c52ff] hover:text-[#8c52ff] ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='hover:text-[#8c52ff]'
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
