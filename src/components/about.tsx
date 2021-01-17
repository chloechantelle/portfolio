import React from 'react';
import owVideo from '../assets/videos/overwatch.mp4';
import cybVideo from '../assets/videos/cyberpunk.webm';

class About extends React.Component {

    render() {
        return (
            <section className="about">

                <div className="about-container container">

                    <div className="about-item" data-aos="fade-right">

                        <div className="about-item-container">

                            <div className="about-item-body">

                                <h3 className="about-item-body-title">
                                    &#62; 01. — About
                                </h3>

                                <p className="about-item-body-text">
                                    I'm Chloe, a Web Developer based in Brisbane, AU. I've been coding with a fascination for web design and it's capabilities for the past 7 years.
                                </p>

                                <p className="about-item-body-text">
                                    Shortly after getting my diploma, I joined the Digital team <a href="https://www.findex.com.au/home" className="link link--txt" target="_blank" rel="noopener noreferrer"> @Findex</a> where I currently work on interesting and innovative fintech projects.
                                </p>

                                <span className="about-item-body-text">
                                    In my free time I spend it either in
                                <span className="link link--noClick link--ow"> Overwatch</span>
                                    <span>, </span>

                                    <span className="hover-video hover-video--ow">
                                        <video width="450" autoPlay loop muted>
                                            <source src={owVideo} type="video/mp4" />
                                            Your browser does not support the video tag.
                                    </video>
                                        <div className="hover-video-credit">
                                            <span className="hover-video-credit-text">
                                                Source: Blizzard Entertainment
                                            </span>
                                        </div>
                                    </span>

                                    <span className="link link--noClick link--cb"> Cyberpunk 2077</span>
                                    <span>, on </span>

                                    <span className="hover-video hover-video--cb">
                                        <video width="450" autoPlay loop muted>
                                            <source src={cybVideo} type="video/webm" />
                                            Your browser does not support the video tag.
                                    </video>
                                        <div className="hover-video-credit">
                                            <span className="hover-video-credit-text">
                                                Source: CD Projekt Red/CD Projekt
                                            </span>
                                        </div>
                                    </span>

                                    <div className="tooltip">
                                        <a href="https://twitter.com/_chloechantelle" target="_blank" rel="noopener noreferrer" className="link link--txt"> Twitter </a>
                                        <span className="tooltip-text">it's a lot of just retweeting Elon Musk, sorry not sorry</span>
                                    </div>

                                    <span> or taking care of </span>
                                    <div className="tooltip">
                                        <span className="link link--noClick"> my plants</span>
                                        <span>.</span>
                                        <span className="tooltip-text">we're up to 11 atm</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="about-item" data-aos="fade-left">
                        <div className="about-item-container">
                            <div className="about-item-body">

                                <h3 className="about-item-body-title">
                                    &#62; 02. — Tech
                            </h3>

                                <span className="about-item-body-text">
                                    <p>Languages I speak:</p>
                                    <ul>
                                        <li className="about-item-body-text-item">HTML</li>
                                        <li className="about-item-body-text-item">SCSS</li>
                                        <li className="about-item-body-text-item">Javascript (ES6+)</li>
                                        <li className="about-item-body-text-item">Typescript</li>
                                    </ul>

                                    <p>Tech I've been working with:</p>
                                    <ul>
                                        <li className="about-item-body-text-item">
                                            <span className="tooltip">React
                                            <span className="tooltip-text">the best ♥</span>
                                            </span>
                                        </li>
                                        <li className="about-item-body-text-item">Angular</li>
                                        <li className="about-item-body-text-item">Gatsby</li>
                                        <li className="about-item-body-text-item">GraphQL</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default About;
