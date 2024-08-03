import HTML_IMG from '../public/assets/skills/html.png';
import CSS_IMG from '../public/assets/skills/css.png';
import JavaScript_IMG from '../public/assets/skills/javascript.png';
import React_IMG from '../public/assets/skills/react.png';
import TailwindCSS_IMG from '../public/assets/skills/tailwind.png';
import MongoDB_IMG from '../public/assets/skills/mongo.png';
// import PostgreSQL_IMG from '../public/assets/skills/postgres.png';
import Express_IMG from '../public/assets/skills/express.png';
import Nextjs_IMG from '../public/assets/skills/next.png';
// import Redux_IMG from '../public/assets/skills/redux.png'
import SASS_IMG from '../public/assets/skills/sass.png';
import Nodejs_IMG from '../public/assets/skills/node.png';
import Vite_IMG from '../public/assets/skills/vite.png';
import Git_IMG from '../public/assets/skills/git.png';
// import TypeScript_IMG from '../public/assets/skills/typescript.png';
import Vercel_IMG from '../public/assets/skills/vercel.png';
import VSCode_IMG from '../public/assets/skills/vscode.png';
import MUI_IMG from '../public/assets/skills/mui.png';
import MySQL_IMG from '../public/assets/skills/mysql.png';
// import ComingSoon_IMG from '../public/assets/projects/coming-soon.jpg';
import TodoList_IMG from '../public/assets/projects/todo-list.png';
import WeatherApp_IMG from '../public/assets/projects/weather-app.png';
import EntertainmentSearch_IMG from '../public/assets/projects/entertainment-search.png';
import Calculator_IMG from '../public/assets/projects/calculator.png';
import BlogPage_IMG from '../public/assets/projects/blog-page.png';
import EcommerceStore_IMG from '../public/assets/projects/ecommerce-store.png';
import BookingApp_IMG from '../public/assets/projects/booking-app.png';
import ChatApp_IMG from '../public/assets/projects/chat-app.png';
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
  // {
  //   id: 4,
  //   name: 'TypeScript',
  //   img: TypeScript_IMG,
  // },
  {
    id: 4,
    name: 'React',
    img: React_IMG,
  },
  {
    id: 5,
    name: 'MongoDB',
    img: MongoDB_IMG,
  },
  // {
  //   id: 8,
  //   name: 'PostgreSQL',
  //   img: PostgreSQL_IMG,
  // },
  {
    id: 6,
    name: 'Node.js',
    img: Nodejs_IMG,
  },
  {
    id: 7,
    name: 'Express',
    img: Express_IMG,
  },
  {
    id: 8,
    name: 'Next.js',
    img: Nextjs_IMG,
  },
  {
    id: 9,
    name: 'TailwindCSS',
    img: TailwindCSS_IMG,
  },
  {
    id: 10,
    name: 'Git',
    img: Git_IMG,
  },
  {
    id: 11,
    name: 'VS Code',
    img: VSCode_IMG,
  },
  {
    id: 12,
    name: 'Vercel',
    img: Vercel_IMG,
  },
];

export const projects = [
  {
    id: 1,
    name: 'Blog Page',
    img: BlogPage_IMG,
    codeURL: 'https://github.com/isaac-lal/blog-page',
    demoURL: 'https://blog-page.isaaclal.com/',
    tech:
      'TECH: React, MongoDB, Express, Node.js, JavaScript, CSS, JWT',
    features:
      'FEATURES: Auth, REST API, CRUD, SSL, Per User Settings',
  },
  {
    id: 2,
    name: 'Booking App',
    img: BookingApp_IMG,
    codeURL: 'https://github.com/isaac-lal/booking-app',
    demoURL: 'https://booking-app.isaaclal.com/',
    tech:
      'TECH: React, MongoDB, Express, Node.js, JavaScript, TailwindCSS',
    features:
      'FEATURES: Auth, REST API, CRUD, SSL, Per User Settings',
  },
  {
    id: 3,
    name: 'Ecommerce Store',
    img: EcommerceStore_IMG,
    codeURL: 'https://github.com/isaac-lal/ecommerce-store',
    demoURL: 'https://ecommerce-store.isaaclal.com/',
    tech:
      'TECH: React, MongoDB, Express, Node.js, JavaScript, CSS',
    features:
      'FEATURES: Auth, REST API, CRUD, SSL, Stripe Checkout',
  },
  {
    id: 4,
    name: 'Chat App',
    img: ChatApp_IMG,
    codeURL: 'https://github.com/isaac-lal/chat-app',
    demoURL: 'https://chat-app.isaaclal.com/',
    tech:
      'TECH: React, MongoDB, Express, Node.js, JavaScript, TailwindCSS, Websockets',
    features:
      'FEATURES: Auth, REST API, CRUD, SSL, Real-Time Messaging',
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
    name: 'https://drive.google.com/file/d/1gFVD45ODOElkMoLkal-TSXvTorwp0IJH/view?usp=sharing',
    icon: <BsFillPersonFill />,
  },
  {
    id: 4,
    name: 'mailto:isaaclal124@gmail.com',
    icon: <AiOutlineMail />,
  },
];
