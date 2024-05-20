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
    subtitle: "I'm a Software Engineer.",
    cta: '',
    suffixImage: '/wave.gif'
};

const getAge = (birthDate) => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
const arr = (x) => Array.from(x);
const num = (x) => Number(x) || 0;
const str = (x) => String(x);
const isEmpty = (xs) => xs.length === 0;
const take = (n) => (xs) => xs.slice(0, n);
const drop = (n) => (xs) => xs.slice(n);
const reverse = (xs) => xs.slice(0).reverse();
const comp = (f) => (g) => (x) => f(g(x));
const not = (x) => !x;
const chunk = (n) => (xs) => isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
const numToWords = (n) => {
    let a = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let g = [
        '',
        'thousand',
        'million',
        'billion',
        'trillion',
        'quadrillion',
        'quintillion',
        'sextillion',
        'septillion',
        'octillion',
        'nonillion',
    ];
    // this part is really nasty still
    // it might edit this again later to show how Monoids could fix this up
    let makeGroup = ([ones, tens, huns]) => {
        return [
            num(huns) === 0 ? '' : a[huns] + ' hundred ',
            num(ones) === 0 ? b[tens] : (b[tens] && b[tens] + '-') || '',
            a[tens + ones] || a[ones],
        ].join('');
    };
    // "thousands" constructor; no real good names for this, i guess
    let thousand = (group, i) => (group === '' ? group : `${group} ${g[i]}`);
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

const choose = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getArticle = (n) => (vowel_count(n[0]) > 0 ? 'an' : 'a');

const age = getAge('2002-05-14');
const age_words = numToWords(age);
const article = getArticle(age_words);

export const aboutData = {
    img: choose([
        '/profile1.jpg',
        '/profile2.png',
        '/profile3.png',
        '/profile4.jpg',
        '/profile5.jpg',
        '/profile6.jpg',
        '/profile7.jpg',
        '/profile8.jpg',
        '/profile9.jpg',
    ]),
    paragraphOne:
        "I'm " +
        article +
        ' ' +
        age_words +
        " year old musician🎸, programmer, and PhD student🎓. I've been writing Python🐍 since 7th grade, and Rust🦀 is my favorite programming language.",
    paragraphTwo:
        'Compiler design is easily my favorite subject in computer science: I\'ve implemented several of my own programming languages which you can see below, and read about on my blog. I have an unending fondness for Turing Tarpits and SKI combinator calculus.',
    paragraphThree:
        'I\'m also a huge linguistics nerd: he estado hablando español desde 2021, y puedo hablar bastante bien!🇪🇸 Si tú también lo hablas, envíame un mensaje!',
    paragraphFour: 'Although most of my work is in compilers, I write tons of other kinds of software. I have a lot of experience in crypto, systems programming, machine learning, robotics, and more! Check out all my projects!',
    git: 'https://github.com/adam-mcdaniel', // if no resume, the button will not show up
    chess: 'https://lichess.org/@/adamthekiwi/tv', // if no resume, the button will not show up
    resume: 'https://github.com/adam-mcdaniel/resume', // if no resume, the button will not show up
    blog: 'https://adam-mcdaniel.github.io/blog', // if no resume, the button will not show up
    music: 'https://adam-mcdaniel.github.io/music', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
    {
        id: nanoid(),
        img: '/sage.png',
        title: 'Sage🌱',
        info: "A programming language that's wise beyond its bytes!",
        info2: "Sage is a programming language with an extremely simple yet powerful virtual machine. It's designed to run side-effecting code☢️ across multiple devices while still functioning as intended. It also implements parametric polymorphism⚗️, and uses algebraic data types🧮 with pattern matching🎯! It can even compile in the browser, check out the web demo!",
        url: 'https://adam-mcdaniel.github.io/sage/',
        repo: 'https://github.com/adam-mcdaniel/sage/',
    },
    {
        id: nanoid(),
        img: '/sage-os.png',
        title: 'Sage OS💾',
        info: 'A RISC-V operating system for Sage!',
        info2: 'SageOS is an operating system that runs Sage🌱 programs, with support for C🛸 as well! It has a graphical shell🛰️, a powerpoint presentation app🎬, and a Tic-Tac-Toe🎲❌⭕ game! It supports the Minix3 filesystem💾, GPU devices🖥️, and tablet🖱️ + keyboard⌨️ inputs.',
        url: 'https://github.com/adam-mcdaniel/sage-os/',
        repo: 'https://github.com/adam-mcdaniel/sage-os/',
    },
    {
        id: nanoid(),
        img: '/program-evolution.png',
        title: 'Code Synthesis and Optimization with Genetic Algorithms🧬',
        info: 'A genetic algorithm that evolves🦠 programs to solve problems.',
        info2: 'Evolution could potentially be a powerful tool🛠️ for improving code, but evolving code in widely-used languages is very difficult due to disruptive mutations: syntax trees do not make for great genomes. This research project implements a novel Turing tape📼 based architecture to facilitate better evolution. Some compiler generated programs for the architecture shrank 20% in code size with the genetic algorithm!',
        url: 'https://github.com/adam-mcdaniel/program-evolution/',
        repo: 'https://github.com/adam-mcdaniel/program-evolution/',
    },
    {
        id: nanoid(),
        img: '/dune.png',
        title: 'Dune',
        info: 'A shell🐚 by the beach🏖️!',
        info2: "Dune is a custom shell designed to be complete, fast, and pretty. In Dune's scripting language, anything is possible: It has libraries for anything from TUI widgets to chess! The language itself is also rich with features: it has first class lambda functions, macros, and lazy evaluation🦥. It's the shell I use on all my machines, so it's well maintained!",
        url: 'https://github.com/adam-mcdaniel/dune',
        repo: 'https://github.com/adam-mcdaniel/dune', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: '/regex-engine.png',
        title: 'Regex Engine🚂',
        info: 'A header-only regex📋 engine implementation in C++!',
        info2: 'Regex engines are a powerful tool for parsing text. This regex engine is built in C++, and uses the Thompson🧙‍♂️ NFA algorithm to prevent pathological backtracking! It\'s efficient, supports the typical regex syntax, and can be used in any C++ project without any dependencies!',
        url: 'https://github.com/adam-mcdaniel/regex-engine',
        repo: 'https://github.com/adam-mcdaniel/regex-engine', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: '/chess.png',
        title: 'Chess Engine',
        info: 'A dependency-free chess engine♟️ library built to run anywhere.',
        info2: 'This is built for the browser🏗️, desktop💻, and embedded environments. It has support for managing castling rights, checking legal moves, and generating legal moves. Additionally, it supports multiple chess variants!',
        url: 'https://adam-mcdaniel.github.io/blog/writing-a-chess-engine',
        repo: 'https://github.com/adam-mcdaniel/chess-engine', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: '/capitalist-chess.png',
        title: 'State Capitalist🏦 Chess Engine',
        info: 'My custom chess♟️ variant with a state capitalist economy📈!',
        info2: 'State Capitalist💵 Chess is a variant of the game which adds federal banks, interest rates, a market, and a territory-based economy! Players fight for control of the board to fund the war effort🪖, and flex their economic muscles to purchase pieces and moves to enact the nation-state\'s will. It\'s fun to play, and the AI is pretty challenging!',
        url: 'https://github.com/adam-mcdaniel/capitalist-chess',
        repo: 'https://github.com/adam-mcdaniel/capitalist-chess', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: '/vpn.png',
        title: 'VPN🔒',
        info: 'A VPN implementation in C🔒.',
        info2: 'This is a simple VPN implementation in C. It uses the TUN/TAP🔗 driver to create a virtual network interface, and then encrypts and sends packets over the internet. It also uses TLS/SSL with X.509 certificates to authenticate clients connecting to the server. It\'s a great way to learn about networking, encryption, and VPNs!',
        url: 'https://github.com/adam-mcdaniel/vpn',
        repo: 'https://github.com/adam-mcdaniel/vpn',
    },
    {
        id: nanoid(),
        img: '/reddit-analysis2.png',
        title: 'Reddit Analysis📊',
        info: 'A data analysis project📈 that analyzes Reddit posts📝.',
        info2: 'This project analyses the sentiments of Reddit posts, comments, and comment replies to get a measure of the different qualities of various communities. It uses natural language processing🧠 to categorize each post into different topics, and then uses sentiment analysis to determine metrics like inquisitiveness, condemnation, positivity, and more.',
        url: 'https://github.com/adam-mcdaniel/reddit-analysis',
        repo: 'https://github.com/adam-mcdaniel/reddit-analysis', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: '/bigint.png',
        title: 'Big Integer🧮 Library',
        info: 'A library for mathematical operations on arbitrarily large integers.',
        info2: 'The largest integer that can be stored in a 64-bit integer, the largest integer type in C, is 2^64 - 1. This C library allows you to store and manipulate integers of any size, allowing programs to perform calculations for massive problems like RSA encryption🔒! The library is also header-only and can easily be used in any C project!',
        url: 'https://github.com/adam-mcdaniel/bigint',
        repo: 'https://github.com/adam-mcdaniel/bigint',
    },
    {
        id: nanoid(),
        img: '/adams-bot.png',
        title: "Adam's Bot",
        info: 'A mini me👨‍🦰 for my Discord server💬!',
        info2: "This project is a chat-bot and dungeon master for my personal Discord server. It's powered by GPT-2.0, and allows several people to play Zork together online. Anyone else can download it and set it up for their Discord servers as well! He's rather charming😎.",
        url: 'https://github.com/adam-mcdaniel/adams-bot',
        repo: 'https://github.com/adam-mcdaniel/adams-bot',
    },
    {
        id: nanoid(),
        img: '/rsa.png',
        title: 'RSA Encryption/Decryption🔐 Library',
        info: ' A cryptography library for encrypting and decrypting messages with RSA!',
        info2: 'RSA is a public key encryption algorithm that is widely used for secure data transmission. This library provides a simple interface for encrypting and decrypting messages using RSA. It can generate public and private keys, and use those to securely encrypt and decrypt messages. It\'s written in C, so it\'s fast and portable!',
        url: 'https://github.com/adam-mcdaniel/rsa',
        repo: 'https://github.com/adam-mcdaniel/rsa',
    },
    {
        id: nanoid(),
        img: '/toki-pona.png',
        title: 'Toki Pona Language Model',
        info: 'A language model🧠 trained to speak the constructed language Toki Pona🗣️.',
        info2: "Toki Pona is very unique because its vocabulary is limited to 123 words📚. This language model is trained using Toki Pona content from around the web. It's trained to translate text and follow instructions provided in prompts from the user. Additionally, it's small enough to run on your laptop💻!",
        url: 'https://github.com/adam-mcdaniel/toki-pona-language-model/',
        repo: 'https://github.com/adam-mcdaniel/toki-pona-language-model/',
    },
    {
        id: nanoid(),
        img: '/music-generation.png',
        title: 'Music Theory Library📚 and Song Generator🎵',
        info: 'A library for exploring music theory🎼 and generating songs in any scale you can think of🎶!',
        info2: 'Music is a lifelong passion of mine, and I wanted to combine it with my love of programming. This library allows you to generate songs in all sorts of scales🎼 and explore new theoretical concepts in music. It can generate songs in any key, and in any scale you can think of! It also allows you to provide your own waveforms🌊 for custom audio processing, if you don\'t want to use the built in ones!',
        url: 'https://github.com/adam-mcdaniel/music-generation/',
        repo: 'https://github.com/adam-mcdaniel/music-generation/',
    },
    {
        id: nanoid(),
        img: '/fib.png',
        title: 'Harbor',
        info: 'A language that ports⚓: examining the limits of compilation⚙️.',
        info2: "Harbor is a high level programming language with type checking (supports unsigned integers, booleans, characters, pointers, tuples) and manual memory management🏗️. Essentially, it's a stripped down version of C. What makes Harbor special then? It compiles to a flavor of brainf&%^🧠 called dynamic brainf!@%🧠.",
        url: 'https://adam-mcdaniel.github.io/harbor/',
        repo: 'https://github.com/adam-mcdaniel/harbor', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: '/wisp.png',
        title: 'Wisp',
        info: 'A lisp👽 written in C++.',
        info2: "Writing a Lisp interpreter is an indispensable requirement for becoming a true computer science wizard of the dark arts🧙. So, I've written an easily embeddable Lisp in C++! It supports all the typical Lisp bells and whistles: lots of quoted expressions, special forms, and lambdas. Also, it's compatible with C++98 for maximum portability!", // ADD THIS,
        url: 'https://github.com/adam-mcdaniel/wisp',
        repo: 'https://github.com/adam-mcdaniel/wisp',
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
        img: '/heappulse.png',
        title: 'HeapPulse Memory Profiler',
        info: 'Track memory allocations on a timed interval🕰️.',
        info2: "This is a tool to track all the individual memory💽 allocations a program makes. It allows users to run tests on fixed time intervals⏱️ throughout the program runtime and examine📏 the program's memory at various points in time. It's written in C++!",
        url: 'https://github.com/adam-mcdaniel/allocation-tracker',
        repo: 'https://github.com/adam-mcdaniel/allocation-tracker',
    },
    {
        id: nanoid(),
        img: '/game-of-life.png',
        title: 'Game of Life',
        info: 'A game of life🔬 simulator on an infinite♾️ plane.',
        info2: 'The Game of Life🦠 is a cellular automaton that evolves life-like patterns on a two-dimensional plane. This library implements the Game of Life on an infinite plane, and can be used to create a variety of interesting visualizations!',
        url: 'https://github.com/adam-mcdaniel/game-of-life',
        repo: 'https://github.com/adam-mcdaniel/game-of-life', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: '/blame-tracker.png',
        title: 'Blame Tracker',
        info: 'Accuse guilty developers🫵!',
        info2: "Blame Tracker is a tool that allows you to track down👮🚨 guilty developers and discover who wrote what during a given time period. It's a command line tool that uses git blame to find the guilty⚖️ authors using a series of filters provided by the user. It's written in Python, and runs on all the major operating systems.",
        url: 'https://github.com/adam-mcdaniel/blame-tracker',
        repo: 'https://github.com/adam-mcdaniel/blame-tracker',
    },
    {
        id: nanoid(),
        img: '/free.png',
        title: 'Free',
        info: 'A terrible programming language that targets an even worse programming language.',
        info2: "Free is Oak's esoteric predecessor that compiles to a superset of brainf!@%🧠 called SMPL. SMPL introduces three new operators: ?, *, and & which allows the user to dynamically manage memory.",
        url: 'https://github.com/adam-mcdaniel/free',
        repo: 'https://github.com/adam-mcdaniel/free', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: '/sight.png',
        title: 'Sight',
        info: 'An abstracted Python library for vision🔭 processing.',
        info2: "A lot of Open-CV's functions and methods take an image, and return a new image. With several different layers of function calls used on images, code can be a bit messy. Additionally, managing contours, the sizes of images, and their data-types can get difficult. Sight abstracts all of that away, and makes things simple.",
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
        info2: "I've been writing compilers for a few years now, and it's given me a huge insight on how to write fast, compact, and correct code. Even the smallest bug in a compiler can have huge consequences.",
        url: 'https://adam-mcdaniel.github.io/blog/compilers-for-the-future',
    },
    {
        id: nanoid(),
        img: '/music.jpg',
        title: 'Music',
        info: "Long before I was a programmer, I was a musician. I've played piano since 4th grade, and guitar since 8th grade.",
        info2: 'Classical, psychedelic, and art rock are my absolute favorites!',
        url: 'https://adam-mcdaniel.github.io/blog/pages/about#music',
    },
    {
        id: nanoid(),
        img: '/ui_ux.png',
        title: 'Building Beautiful Applications',
        info: "While the practical aspect of an application is incredibly important, I believe that the presentation is significantly more important. If you can't display your product to your users in an appealing way, their attention will be drawn to more visually appealing alternatives.",
        info2: "When I build an application, I'm always sure to make the presentation as good as possible before launch.",
        url: 'https://adam-mcdaniel.github.io/blog/the-importance-of-beauty',
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
            name: 'github',
            url: 'https://github.com/adam-mcdaniel',
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
    isEnabled: false, // set to false to disable the Github stars/fork buttons
};
