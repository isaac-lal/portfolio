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
import TodoList_IMG from '../public/assets/projects/todo-list.png';
import WeatherApp_IMG from '../public/assets/projects/weather-app.png';
import EntertainmentSearch_IMG from '../public/assets/projects/entertainment-search.png';
import Calculator_IMG from '../public/assets/projects/calculator.png';
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
    name: 'Vite',
    img: Vite_IMG,
  },
  {
    id: 6,
    name: 'TailwindCSS',
    img: TailwindCSS_IMG,
  },
  {
    id: 7,
    name: 'Next.js',
    img: Nextjs_IMG,
  },
  /*
  {
    id: 8,
    name: 'PostgreSQL',
    img: PostgreSQL_IMG,
  },
  */
  {
    id: 9,
    name: 'MongoDB',
    img: MongoDB_IMG,
  },
  {
    id: 10,
    name: 'Node.js',
    img: Nodejs_IMG,
  },
  {
    id: 11,
    name: 'Express',
    img: Express_IMG,
  },
  /*
  {
    id: 12,
    name: 'TypeScript',
    img: TypeScript_IMG,
  },
  */
];

export const projects = [
  {
    id: 1,
    name: 'Todo List',
    img: TodoList_IMG,
    codeURL: 'https://github.com/isaac-lal/local-todo-list',
    demoURL: 'https://local-todo-list.isaaclal.com/',
    description:
      'This is a todo list that runs locally on the website and tracks tasks with CRUD functionality.',
    technologies: 'React',
  },
  {
    id: 2,
    name: 'Weather App',
    img: WeatherApp_IMG,
    codeURL: 'https://github.com/isaac-lal/minimal-weather-app',
    demoURL: 'https://minimal-weather-app.isaaclal.com/',
    description:
      'This is a minimal weather app that tracks temperature, min, max, feels like, humidity, pressure, and wind speed.',
    technologies: 'React',
  },
  {
    id: 3,
    name: 'Entertainment Search',
    img: EntertainmentSearch_IMG,
    codeURL: 'https://github.com/isaac-lal/simple-entertainment-search',
    demoURL: 'https://simple-entertainment-search.isaaclal.com/',
    description:
      'This is an entertainment search app that uses the OMDB API to search up movies, tv shows, and games.',
    technologies: 'React',
  },
  {
    id: 4,
    name: 'Calculator',
    img: Calculator_IMG,
    codeURL: 'https://github.com/isaac-lal/calculator',
    demoURL: 'https://calculator.isaaclal.com/',
    description:
      'This is a calculator application that can be used to add, subtract, multiply, and divide recurring numbers.',
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
