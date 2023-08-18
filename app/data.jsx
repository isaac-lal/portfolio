import HTML_IMG from '../public/assets/skills/html.png';
import CSS_IMG from '../public/assets/skills/css.png';
import JavaScript_IMG from '../public/assets/skills/javascript.png';
import React_IMG from '../public/assets/skills/react.png';
import Tailwind_IMG from '../public/assets/skills/tailwind.png';
import Mongo_IMG from '../public/assets/skills/mongo.png';
import Postgres_IMG from '../public/assets/skills/postgres.png';
import Express_IMG from '../public/assets/skills/express.png';
import Next_IMG from '../public/assets/skills/next.png';
import Node_IMG from '../public/assets/skills/node.png';
import ComingSoon_IMG from '../public/assets/projects/coming-soon.jpg';
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
    name: 'Tailwind CSS',
    img: Tailwind_IMG,
  },
  {
    id: 6,
    name: 'Next.js',
    img: Next_IMG,
  },
  {
    id: 7,
    name: 'PostgreSQL',
    img: Postgres_IMG,
  },
  {
    id: 8,
    name: 'Node.js',
    img: Node_IMG,
  },
];

export const projects = [
  {
    id: 1,
    name: 'Coming Soon',
    img: ComingSoon_IMG,
    codeURL: '',
    demoURL: '',
  },
  {
    id: 2,
    name: 'Coming Soon',
    img: ComingSoon_IMG,
    codeURL: '',
    demoURL: '',
  },
  {
    id: 3,
    name: 'Coming Soon',
    img: ComingSoon_IMG,
    codeURL: '',
    demoURL: '',
  },
  {
    id: 4,
    name: 'Coming Soon',
    img: ComingSoon_IMG,
    codeURL: '',
    demoURL: '',
  },
];

export const navs = [
  {
    id: 1,
    name: 'Home',
    url: '/#home',
  },
  {
    id: 2,
    name: 'About',
    url: '/#about',
  },
  {
    id: 3,
    name: 'Skills',
    url: '/#skills',
  },
  {
    id: 4,
    name: 'Projects',
    url: '/#projects',
  },
  {
    id: 5,
    name: 'Contact',
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
    name: 'https://drive.google.com/file/d/1-FWIofI0mm3qtuvyC77wDHJjD5sbMtu0/view?usp=sharing',
    icon: <BsFillPersonFill />,
  },
  {
    id: 4,
    name: 'mailto:isaaclal124@gmail.com',
    icon: <AiOutlineMail />,
  },
];
