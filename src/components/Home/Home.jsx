import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { links } from '../data'
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
        <p className='Home__Connect'>Let's Connect</p>
        <div className='Home__Links'>
          {links.map((link) => (
           <div className='home-spacing'>
          <a
            key={link.id}
                href={link.name}
                target='_blank'
                rel='noreferrer'>
           
            <div className='Home__LinkIcons'>
              {link.icon}
            </div>
          
          </a>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
