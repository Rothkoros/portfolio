import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '/resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tmbd.png',
    title: 'TMBD',
    info: 'Movie app that is similar in style to IMBD',
    info2: '',
    url: 'https://teras43.github.io/movieGroupProject/login',
    repo: 'https://github.com/Teras43/movieGroupProject', 
  },
  {
    id: nanoid(),
    img: 'helix.png',
    title: 'E-commerce Store',
    info: 'Mock online store.',
    info2: '',
    url: 'https://teras43.github.io/eCommerceStore/',
    repo: 'https://github.com/Teras43/eCommerceStore', 
  },
  {
    id: nanoid(),
    img: 'earthQuake.png',
    title: 'Earth Quake App',
    info: 'Application that tracks earthquake data of Utah.',
    info2: '',
    url: 'https://rothkoros.github.io/CapstoneProject2470/index.html',
    repo: 'https://github.com/Rothkoros/CapstoneProject2470', 
  },
  {
    id: nanoid(),
    img: 'restaurant.png',
    title: 'Restaurant Page',
    info: 'Simple mock restaurant page',
    info2: '',
    url: 'https://rothkoros.github.io/Restaurant/',
    repo: 'https://github.com/Rothkoros/Restaurant', 
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ndombrosky@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nicholas-dombrosky-0806ba15a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Rothkoros?tab=repositories',
    },
  ],
};


