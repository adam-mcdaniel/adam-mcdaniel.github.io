import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Interests from './Interests/Interests';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
    heroData,
    aboutData,
    projectsData,
    interestsData,
    contactData,
    footerData,
} from '../mock/data';

function App() {
    const [hero, setHero] = useState({});
    const [about, setAbout] = useState({});
    const [projects, setProjects] = useState([]);
    const [interests, setInterests] = useState([]);
    const [contact, setContact] = useState({});
    const [footer, setFooter] = useState({});

    useEffect(() => {
        setHero({ ...heroData });
        setAbout({ ...aboutData });
        setProjects([...projectsData]);
        setInterests([...interestsData]);
        setContact({ ...contactData });
        setFooter({ ...footerData });
    }, []);

    return (
        <PortfolioProvider value={{ hero, about, projects, interests, contact, footer }}>
            <Hero />
            <About />
            <Projects />
            <Interests />
            <Contact />
            <Footer />
        </PortfolioProvider>
    );
}

export default App;
