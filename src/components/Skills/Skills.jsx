import React from 'react';
import { skills } from '../data'; 
import './Skills.css'; 

const Skills = () => {
  return (
    <section id='skills' className='skills-section'>
      <div className='skills-container'>
        <h6 className='skills-subtitle'>
          Skills
        </h6>
        <h2 className='skills-title'>
          What I Can Do
        </h2>
        <div className='skills-grid'>
          {skills.map((skill) => (
            <div key={skill.id} className='skill-card-wrapper'>
              <div>
                <div className='skill-card'>
                  <div className='skill-card-content'>
                    <div className='skill-image-container'>
                      <img
                        src={skill.img}
                        width={64} 
                        alt={skill.name}
                        className='skill-image'
                      />
                    </div>
                    <div className='skill-name-container'>
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