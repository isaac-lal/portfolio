import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { links } from '../data';
import './Home.css';

const Home = () => {
  return (
    <div id='home' className='home-header'>
      <div>
        <p className='home-intro'>Welcome, my name is</p>
        <h1 className='home-name'>Isaac Lal</h1>
        <h2 className='home-type-animation'>
          <TypeAnimation
            sequence={[
              'A Developer',
              3000,
              'A I.T. Enthusiast',
              3000,
              'A Coder',
              3000,
              'A Gamer',
              3000,
              'A Nerd',
              3000,
            ]}
            wrapper='div'
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1.4em' }}
          />
        </h2>
        <p className='home-connect'>Let's Connect</p>
        <div className='home-links'>
          {links.map((link) => (
            <div className='home-spacing' key={link.id}>
              <a href={link.name} target='_blank' rel='noreferrer'>
                <div className='home-link-icons'>
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
