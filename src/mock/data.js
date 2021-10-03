import { nanoid } from 'nanoid';
// HEAD DATA
export const headData = {
    title: 'Adam | Developer', // e.g: 'Name | Developer'
    lang: 'en', // e.g: en, es, fr, jp
    description: 'Adam McDaniel', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
    title: '',
    name: '',
    subtitle: 'I\'m a Software Developer.',
    cta: '',
};

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
const arr = x => Array.from(x);
const num = x => Number(x) || 0;
const str = x => String(x);
const isEmpty = xs => xs.length === 0;
const take = n => xs => xs.slice(0, n);
const drop = n => xs => xs.slice(n);
const reverse = xs => xs.slice(0).reverse();
const comp = f => g => x => f(g(x));
const not = x => !x;
const chunk = n => xs =>
    isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
const numToWords = n => {
    let a = [
        '', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    let b = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    let g = [
        '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
        'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
    ];
    // this part is really nasty still
    // it might edit this again later to show how Monoids could fix this up
    let makeGroup = ([ones, tens, huns]) => {
        return [
            num(huns) === 0 ? '' : a[huns] + ' hundred ',
            num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
            a[tens + ones] || a[ones]
        ].join('');
    };
    // "thousands" constructor; no real good names for this, i guess
    let thousand = (group, i) => group === '' ? group : `${group} ${g[i]}`;
    // execute !
    if (typeof n === 'number') return numToWords(String(n));
    if (n === '0') return 'zero';
    return comp(chunk(3))(reverse)(arr(n))
        .map(makeGroup)
        .map(thousand)
        .filter(comp(not)(isEmpty))
        .reverse()
        .join(' ');
};

function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str1.length; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}

const choose = arr => arr[Math.floor(Math.random() * arr.length)];

const getArticle = n => vowel_count(n[0]) > 0 ? 'an' : 'a';

const age = getAge('2002-05-14');
const age_words = numToWords(age);
const article = getArticle(age_words);

export const aboutData = {
    img: choose(['/profile1gray.png', '/profile2.png', '/profile3.png', '/profile4.png']),
    paragraphOne: 'I\'m ' + article + ' ' + age_words + ' year old musician🎸, programmer, and college student🎓. I\'ve been developing software in Python, Rust, C++, and many more different languages for several years now.',
    paragraphTwo: 'Compiler and programming language design is my favorite subject in computer science. I have an unending fondness for Lisp, Forth, and SKI combinator calculus.',
    paragraphThree: 'Although most of my work is in compiler design, I love to write other kinds of software. See my resume for more detail about the other projects I\'ve worked on!',
    git: 'https://github.com/adam-mcdaniel', // if no resume, the button will not show up
    chess: 'https://lichess.org/@/adamthekiwi/tv', // if no resume, the button will not show up
    resume: 'https://github.com/adam-mcdaniel/resume', // if no resume, the button will not show up
    blog: 'https://adam-mcdaniel.github.io/blog', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
    {
        id: nanoid(),
        img: '/dune.png',
        title: 'Dune',
        info: 'A shell🐚 by the beach🏖️!',
        info2: 'Dune is a custom shell designed to be complete, fast, and pretty. In Dune\'s scripting language, anything is possible: It has libraries for anything from TUI widgets to chess!',
        url: 'https://github.com/adam-mcdaniel/dune',
        repo: 'https://github.com/adam-mcdaniel/dune', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: '/chess.png',
        title: 'Chess Engine',
        info: ' A dependency-free chess engine♟️ library built to run anywhere.',
        info2: 'This is built for the browser🏗️, desktop💻, and embedded environments. It has support for managing castling rights, checking legal moves, and generating legal moves. Additionally, multiple chess variants are supported!',
        url: 'https://adam-mcdaniel.github.io/blog/posts/writing-a-chess-engine',
        repo: 'https://github.com/adam-mcdaniel/chess-engine', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: '/oak.png',
        title: 'Oak',
        info: 'An infinitely more portable alternative to the C programming language.',
        info2: 'Oak🪵 is written in Rust, and is blazingly fast. The entire language is built on only a 17 instruction set virtual machine! As of today, Oak can compile to native and run in the web browser with its JavaScript backend.',
        url: 'https://github.com/adam-mcdaniel/oakc',
        repo: 'https://github.com/adam-mcdaniel/oakc', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: '/free.png',
        title: 'Free',
        info: 'A terrible programming language that targets an even worse programming language.',
        info2: 'Free is Oak\'s esoteric predecessor that compiles to a superset of brainf!@%🧠 called SMPL. SMPL introduces three new operators: ?, *, and & which allows the user to dynamically manage memory.',
        url: 'https://github.com/adam-mcdaniel/free',
        repo: 'https://github.com/adam-mcdaniel/free', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: '/sight.png',
        title: 'Sight',
        info: 'An abstracted Python library for vision🔭 processing.',
        info2: 'A lot of Open-CV\'s functions and methods take an image, and return a new image. With several different layers of function calls used on images, code can be a bit messy. Additionally, managing contours, the sizes of images, and their data-types can get difficult. Sight abstracts all of that away, and makes things simple.',
        url: 'https://github.com/adam-mcdaniel/sight',
        repo: 'https://github.com/adam-mcdaniel/sight', // if no repo, the button will not show up
    },
];

// INTERESTS DATA
export const interestsData = [{
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
    networks: [{
            id: nanoid(),
            name: 'twitter',
            url: 'adam_the_kiwi',
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