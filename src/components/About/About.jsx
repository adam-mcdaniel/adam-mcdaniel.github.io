import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import { aboutData } from '../../mock/data';

const About = () => {
    const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume, blog, git, youtube, chess, music } = aboutData;

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
        <section id="about">
            <Container>
                <Title title="About Me" />
                <Row className="about-wrapper">
                    <Col md={6} sm={12}>
                        <Fade bottom duration={1000} delay={600} distance="30px">
                            <div className="about-wrapper__image">
                                <AboutImg alt="Profile Picture" filename={img} />
                            </div>
                        </Fade>
                    </Col>
                    <Col md={6} sm={12}>
                        <Fade
                            left={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={1000}
                            distance="30px"
                        >
                            <div className="about-wrapper__info">
                                <p className="about-wrapper__info-text">
                                    {paragraphOne ||
                                        ''}
                                </p>
                                <p className="about-wrapper__info-text">
                                    {paragraphTwo ||
                                        ''}
                                </p>
                                <p className="about-wrapper__info-text">
                                    {paragraphThree ||
                                        ''}
                                </p>
                                <p className="about-wrapper__info-text">
                                    {paragraphFour ||
                                        ''}
                                </p>
                                {resume && (
                                    <span className="d-flex mt-3">
                                        {youtube && (
                                            <>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cta-btn cta-btn--resume"
                                                    href={youtube}
                                                >
                                                    {'YouTube'}
                                                </a>
                                            </>
                                        )}
                                        &nbsp;&nbsp;&nbsp;
                                        {blog && (
                                            <>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cta-btn cta-btn--resume"
                                                    href={blog}
                                                >
                                                    {'Blog'}
                                                </a>
                                            </>
                                        )}
                                        {/* &nbsp;&nbsp;&nbsp;
                                        {chess && (
                                            <>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cta-btn cta-btn--resume"
                                                    href={chess}
                                                >
                                                    {'Chess'}
                                                </a>
                                            </>
                                        )} */}
                                        &nbsp;&nbsp;&nbsp;
                                        {music && (
                                            <>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cta-btn cta-btn--resume"
                                                    href={music}
                                                >
                                                    {'Music'}
                                                </a>
                                            </>
                                        )}
                                        &nbsp;&nbsp;&nbsp;
                                        {git && (
                                            <>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="cta-btn cta-btn--resume"
                                                    href={git}
                                                >
                                                    {'Git'}
                                                </a>
                                            </>
                                        )}
                                        &nbsp;&nbsp;&nbsp;
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cta-btn cta-btn--resume"
                                            href={resume}
                                        >
                                            Resume
                                        </a>
                                    </span>
                                )}
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
