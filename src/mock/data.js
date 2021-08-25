import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '',
  lang: '',
  description: '',
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
  paragraphOne: `I am a Jr. Developer and Computer Science student at Salt Lake Community College and Mountainland Technical College. My goals are to complete my education in computer science and further my career with a great team that I can learn with to become a full stack engineer.`,
  paragraphTwo: '',
  paragraphThree: `I have a passion for tinkering and learning. Whether it's tuning my 3d printer and editing firmware to setting up a raspberry Pi to communicate with Discord bots. I love video games, campfires, and a good cup of coffee.`,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tmdb.png',
    title: 'TMDB',
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
