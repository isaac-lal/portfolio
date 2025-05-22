import HTML_IMG from '/assets/skills/html.png';
import CSS_IMG from '/assets/skills/css.png';
import JavaScript_IMG from '/assets/skills/javascript.png';
import React_IMG from '/assets/skills/react.png';
import CPP_IMG from '/assets/skills/cpp.png';
import Python_IMG from '/assets/skills/python.png';
import CSharp_IMG from '/assets/skills/csharp.png';
import Unity_IMG from '/assets/skills/unity.png';
import WIP_IMG from '/assets/projects/wip.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';

export const skills = [
  {
    id: 1,
    name: 'HTML',
    img: HTML_IMG,
  },
  {
    id: 2,
    name: 'CSS',
    img: CSS_IMG,
  },
  {
    id: 3,
    name: 'JavaScript',
    img: JavaScript_IMG,
  },
  {
    id: 4,
    name: 'React',
    img: React_IMG,
  },
  {
    id: 5,
    name: 'C++',
    img: CPP_IMG,
  },
  {
    id: 6,
    name: 'Python',
    img: Python_IMG,
  },
  {
    id: 7,
    name: 'C#',
    img: CSharp_IMG,
  },
  {
    id: 8,
    name: 'Unity',
    img: Unity_IMG,
  },
];

export const projects = [
  {
    id: 1,
    name: 'Work In Progress',
    img: WIP_IMG,
    codeURL: '#',
    demoURL: '#',
  },
  {
    id: 2,
    name: 'Work In Progress',
    img: WIP_IMG,
    codeURL: '#',
    demoURL: '#',
  },
  {
    id: 3,
    name: 'Work In Progress',
    img: WIP_IMG,
    codeURL: '#',
    demoURL: '#',
  },
  {
    id: 4,
    name: 'Work In Progress',
    img: WIP_IMG,
    codeURL: '#',
    demoURL: '#',
  },
];

export const navs = [
  {
    id: 1,
    name: 'HOME',
    url: '/#home',
  },
  {
    id: 2,
    name: 'SKILLS',
    url: '/#skills',
  },
  {
    id: 3,
    name: 'PROJECTS',
    url: '/#projects',
  },
  {
    id: 4,
    name: 'CONTACT',
    url: '/#contact',
  },
];

export const links = [
  {
    id: 1,
    name: 'https://www.linkedin.com/in/isaac-lal/',
    icon: <FaLinkedinIn />,
  },
  {
    id: 2,
    name: 'https://github.com/isaac-lal',
    icon: <FaGithub />,
  },
  {
    id: 3,
    name: 'https://drive.google.com/file/d/1gFVD45ODOElkMoLkal-TSXvTorwp0IJH/view?usp=sharing',
    icon: <BsFillPersonFill />,
  },
  {
    id: 4,
    name: 'mailto:isaaclal124@gmail.com',
    icon: <AiOutlineMail />,
  },
];
