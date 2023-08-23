import HTML_IMG from '../public/assets/skills/html.png';
import CSS_IMG from '../public/assets/skills/css.png';
import JavaScript_IMG from '../public/assets/skills/javascript.png';
import React_IMG from '../public/assets/skills/react.png';
import TailwindCSS_IMG from '../public/assets/skills/tailwind.png';
import MongoDB_IMG from '../public/assets/skills/mongo.png';
import PostgreSQL_IMG from '../public/assets/skills/postgres.png';
import Express_IMG from '../public/assets/skills/express.png';
import Nextjs_IMG from '../public/assets/skills/next.png';
import Nodejs_IMG from '../public/assets/skills/node.png';
import Vite_IMG from '../public/assets/skills/vite.png';
import TypeScript_IMG from '../public/assets/skills/typescript.png';
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
    img: TailwindCSS_IMG,
  },
  {
    id: 6,
    name: 'Next.js',
    img: Nextjs_IMG,
  },
  {
    id: 7,
    name: 'PostgreSQL',
    img: PostgreSQL_IMG,
  },
  {
    id: 8,
    name: 'MongoDB',
    img: MongoDB_IMG,
  },
  {
    id: 9,
    name: 'Vite',
    img: Vite_IMG,
  },
  {
    id: 10,
    name: 'Express',
    img: Express_IMG,
  },
  {
    id: 11,
    name: 'Node.js',
    img: Nodejs_IMG,
  },
  {
    id: 12,
    name: 'TypeScript',
    img: TypeScript_IMG,
  },
];

export const projects = [
  {
    id: 1,
    name: 'Coming Soon',
    img: ComingSoon_IMG,
    codeURL: 'https://github.com/isaac-lal',
    demoURL: 'https://www.isaaclal.com/',
    description: 'This is a project that is coming soon!',
    technologies: 'React',
  },
  {
    id: 2,
    name: 'Coming Soon',
    img: ComingSoon_IMG,
    codeURL: 'https://github.com/isaac-lal',
    demoURL: 'https://www.isaaclal.com/',
    description: 'This is a project that is coming soon!',
    technologies: 'React',
  },
  {
    id: 3,
    name: 'Coming Soon',
    img: ComingSoon_IMG,
    codeURL: 'https://github.com/isaac-lal',
    demoURL: 'https://www.isaaclal.com/',
    description: 'This is a project that is coming soon!',
    technologies: 'React',
  },
  {
    id: 4,
    name: 'Coming Soon',
    img: ComingSoon_IMG,
    codeURL: 'https://github.com/isaac-lal',
    demoURL: 'https://www.isaaclal.com/',
    description: 'This is a project that is coming soon!',
    technologies: 'React',
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
