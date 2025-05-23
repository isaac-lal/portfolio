import React from 'react';
import { projects } from '../data';
import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import './Projects.css';

const Projects = () => {
  return (
    <section id='projects' className='projects-section'>
      <div className='projects-container'>
        <h6 className='projects-section-subtitle'>Projects</h6>
        <h2 className='projects-section-title'>What I&#39;ve Built</h2>
        <div className='projects-grid'>
          {projects.map((project) => (
            <div key={project.id} className='project-card-wrapper'>
              <div className='project-card'>
                <img
                  className='project-image'
                  src={project.img}
                  alt={project.name || 'Project screenshot'}
                />
                <h2 className='project-name'>{project.name}</h2>
                <div className='project-links-container'>
                  <div className='project-link-wrapper'>
                    <a
                      href={project.demoURL}
                      target='_blank'
                      rel='noreferrer'
                      className='project-link-button'
                    >
                      <div className='project-link-content'>
                        <p className='project-link-text'>Demo</p>
                        <div className='project-link-icon'>
                          <FiExternalLink size={17} />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='project-link-wrapper'>
                    <a
                      href={project.codeURL}
                      target='_blank'
                      rel='noreferrer'
                      className='project-link-button'
                    >
                      <div className='project-link-content'>
                        <p className='project-link-text'>Code</p>
                        <div className='project-link-icon'>
                          <AiFillGithub size={20} />
                        </div>
                      </div>
                    </a>
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
