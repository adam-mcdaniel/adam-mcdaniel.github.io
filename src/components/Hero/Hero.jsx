import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { heroData } from '../../mock/data';

const Header = () => {
    const { title, name, subtitle, suffixImage, cta } = heroData;

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsDesktop(true);
            setIsMobile(false);
        } else {
            setIsMobile(true);
            setIsDesktop(false);
        }
    }, []);

    return (
        <section id="hero" className="jumbotron">
            <Container>
                <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                >
                    <h1 className="hero-title" style={{overflow: 'hidden'}}>
                        {title || 'Hello, my name is'}{' '}
                        <span className="text-color-main">{name || 'Adam McDaniel'}</span>
                        {'. '}
                        {suffixImage && isDesktop? <img src={suffixImage} width="50px" height="50px" alt="" style={{vertical_align: "baseline", valign: "baseline", verticalAlign: "baseline"}}/> : null}
                        <br />
                        {subtitle || "I'm a Software Developer."}
                    </h1>
                </Fade>
                <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                >
                    <p className="hero-cta">
                        <span className="cta-btn cta-btn--hero">
                            <Link to="about" smooth duration={1000}>
                                {cta || 'Know more'}
                            </Link>
                        </span>
                    </p>
                </Fade>
            </Container>
        </section>
    );
};

export default Header;
