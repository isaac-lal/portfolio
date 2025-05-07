import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import './Home.css';

const Home = () => {
  return (
    <div
      id='home'
      className='Home__Header'>
      <div>
        <p className='Home__Intro'>Welcome, my name is</p>
        <h1 className='Home__Name'>Isaac Lal</h1>
        <h2 className='Home__TypeAnimation'>
          <TypeAnimation
            sequence={[
              'A Web Developer',
              3000,
              'A I.T. Professional',
              3000,
              'A Software Engineer',
              3000,
              'A Coder',
              3000,
              'A Gamer',
              3000,
              'A Nerd',
              3000,
              'A Nice Person',
              3000,
            ]}
            wrapper='div'
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1.4em' }}
          />
        </h2>
        <p className='Home__Description'>
          Here is my portfolio, displaying all of my expertise as a Web
          Developer with full-stack experience. This is where you&#39;ll
          discover my skills in relevant technologies, my best projects, and a
          contact form for getting in touch with me. I hope you will enjoy!
        </p>
        <p className='Home__Connect'>Let's Connect</p>
        <div className='Home__Links'>
          <a
            href='https://www.linkedin.com/in/isaac-lal/'
            target='_blank'
            rel='noreferrer'>
            <div className='Home__LinkIcons'>
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href='https://github.com/isaac-lal'
            target='_blank'
            rel='noreferrer'>
            <div className='Home__LinkIcons'>
              <FaGithub />
            </div>
          </a>
          <a
            href='https://drive.google.com/file/d/1gFVD45ODOElkMoLkal-TSXvTorwp0IJH/view?usp=sharing'
            target='_blank'
            rel='noreferrer'>
            <div className='Home__LinkIcons'>
              <BsFillPersonFill />
            </div>
          </a>
          <a
            href='mailto:isaaclal124@gmail.com'
            target='_blank'
            rel='noreferrer'>
            <div className='Home__LinkIcons'>
              <AiOutlineMail />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
