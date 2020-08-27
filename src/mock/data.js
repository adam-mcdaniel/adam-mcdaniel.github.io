import { nanoid } from 'nanoid';
// HEAD DATA
export const headData = {
  title: 'Adam | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
// ABOUT DATA
export const aboutData = {
  img: '/profile.png',
  paragraphOne: 'I\'m a musician, programmer, and college student. I\'ve been developing software in Python, Rust, C++, and many more different languages for several years now.',
  paragraphTwo: 'Compiler and programming language design is my favorite subject in computer science. I have an unending fondness for Lisp, Forth, Brain****, and SKI combinator calculus.',
  paragraphThree: 'Although most of my work is in compiler design, I love to write other kinds of software. See my resume for more detail about the other projects I\'ve worked on!',
  resume: 'https://github.com/adam-mcdaniel/resume', // if no resume, the button will not show up
  blog: 'https://adam-mcdaniel.github.io/blog', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '/oak.png',
    title: 'Oak',
    info: 'An infinitely more portable alternative to the C programming language.',
    info2: 'Oak is written in Rust, and is blazingly fast. The entire language is built on only a 17 instruction set virtual machine! As of today, Oak can compile to native and run in the web browser with its JavaScript backend.',
    url: 'https://github.com/adam-mcdaniel/oakc',
    repo: 'https://github.com/adam-mcdaniel/oakc', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '/free.png',
    title: 'Free',
    info: 'A terrible programming language that targets an even worse programming language.',
    info2: 'Free is Oak\'s esoteric predecessor that compiles to a superset of brain**** called SMPL. SMPL introduces three new operators: ?, *, and & which allows the user to dynamically manage memory.',
    url: 'https://github.com/adam-mcdaniel/free',
    repo: 'https://github.com/adam-mcdaniel/free', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '/sight.png',
    title: 'Sight',
    info: 'An abstracted Python library for vision processing.',
    info2: 'A lot of Open-CV\'s functions and methods take an image, and return a new image. With several different layers of function calls used on images, code can be a bit messy. Additionally, managing contours, the sizes of images, and their data-types can get difficult. Sight abstracts all of that away, and makes things simple.',
    url: 'https://github.com/adam-mcdaniel/sight',
    repo: 'https://github.com/adam-mcdaniel/sight', // if no repo, the button will not show up
  },
];

// INTERESTS DATA
export const interestsData = [
  {
    id: nanoid(),
    img: '/compiler.png',
    title: 'Compiler Design',
    info: 'Exploring the deepest depths of computer science is incredibly interesting to me. Developing compilers to explore type theory and programming language design is very important to me.',
    info2: 'I\'ve been writing compilers for a few years now, and it\'s given me a huge insight on how to write fast, compact, and correct code. Even the smallest bug in a compiler can have huge consequences.',
    url: 'https://adam-mcdaniel.github.io/blog/posts/the-oak-compiler',
  },
  {
    id: nanoid(),
    img: '/music.jpg',
    title: 'Music',
    info: 'Long before I was a programmer, I was a musician. I\'ve played piano since 4th grade, and guitar since 8th grade.',
    info2: 'Classical, psychedelic, and art rock are my absolute favorites!',
    url: 'https://adam-mcdaniel.github.io/blog/pages/about#music',
  },
  {
    id: nanoid(),
    img: '/ui_ux.png',
    title: 'Building Beautiful Applications',
    info: 'While the practical aspect of an application is incredibly important, I believe that the presentation is significantly more important. If you can\'t display your product to your users in an appealing way, their attention will be drawn to more visually appealing alternatives.',
    info2: 'When I build an application, I\'m always sure to make the presentation as good as possible before launch.',
    url: 'https://adam-mcdaniel.github.io/blog/posts/the-importance-of-beauty',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work with me? Just reach out!',
  btn: 'Shoot me an email',
  email: 'adam.mcdaniel17@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'adamthekiwi99',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/adam-mcdaniel',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/adam-mcdaniel',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adam-mcdaniel-7973a6192/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
