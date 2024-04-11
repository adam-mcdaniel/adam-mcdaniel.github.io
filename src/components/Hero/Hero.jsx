import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { heroData } from '../../mock/data';

const Header = () => {
    const { title, name, subtitle, suffixImage, cta } = heroData;

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [shouldUseImage, setShouldUseImage] = useState(false);

    // useEffect(() => {
    //     if (window.innerWidth > 769) {
    //         setIsDesktop(true);
    //         setIsMobile(false);
    //     } else {
    //         setIsMobile(true);
    //         setIsDesktop(false);
    //     }

    //     if (window.innerWidth >= 1000) {
    //         setShouldUseImage(true);
    //     } else {
    //         setShouldUseImage(false);
    //     }
    // }, []);

    // // Continuously check the window size and update the state
    // window.addEventListener('resize', () => {
    //     if (window.innerWidth > 769) {
    //         setIsDesktop(true);
    //         setIsMobile(false);
    //     } else {
    //         setIsMobile(true);
    //         setIsDesktop(false);
    //     }

    //     if (window.innerWidth >= 1000) {
    //         setShouldUseImage(true);
    //     } else {
    //         setShouldUseImage(false);
    //     }
    // });

    useEffect(() => {
        const updateWindowDimensions = () => {
            if (window.innerWidth > 769) {
                setIsDesktop(true);
                setIsMobile(false);
            } else {
                setIsMobile(true);
                setIsDesktop(false);
            }

            if (window.innerWidth >= 900) {
                setShouldUseImage(true);
            } else {
                setShouldUseImage(false);
            }
        };

        updateWindowDimensions(); // Update once on mount
        window.addEventListener('resize', updateWindowDimensions);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        };
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
                    <h1 className="hero-title">
                        {title || 'Hello, my name is'}{' '}
                        <span>
                            <span className="text-color-main">{name || 'Adam McDaniel'}</span>
                            {'. '}
                            {suffixImage && shouldUseImage? <img src={suffixImage} alt="" style={{width: "0.9em", height: "0.9em", vertical_align: "baseline", valign: "baseline", verticalAlign: "baseline"}}/> : null}
                        </span>
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
