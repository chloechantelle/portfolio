import React from 'react';
import owVideo from '../assets/videos/overwatch.mp4';
import cybVideo from '../assets/videos/cyberpunk.webm';

class About extends React.Component {

    render() {
        return (
            <section className="about" id="about">

                <div className="about-container container">

                    <div className="about-item" data-aos="fade-right">

                        <h3 className="about-item-body-title">
                            &#62; 01. — About Me
                        </h3>

                        <div className="about-item-container">

                            <div className="about-item-body">

                                <p className="about-item-body-text">
                                    I'm Chloe! A Front End Developer based in Brisbane, AU.
                                </p>

                                <p className="about-item-body-text">
                                    I've been coding with a fascination for UI Design and it's capabilities for over a decade, since I first decided to create custom Tumblr and userStyles themes — my first programming language was CSS!
                                </p>

                                <p className="about-item-body-text">
                                    I currently work in the Digital team <a href="https://www.findex.com.au/careers" className="link link--txt" target="_blank" rel="noopener noreferrer"> @Findex</a> where I work on fintech and design system projects. I have a passion for creating interesting and innovative web experiences for users, constantly expanding my knowledge in the web, and mentoring and teaching where I can.
                                </p>

                                <p className="about-item-body-text">
                                    In my free time I enjoy playing video games such as
                                    <span className="link link--noClick link--ow">&nbsp;Overwatch 2</span>, <span className="link link--noClick link--cb">Cyberpunk 2077</span> and <span className="link link--noClick link--sb">Soulsbornes
                                    </span>.

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
                                </p>

                                <p className="about-item-body-text">
                                    Or reading non fiction or poetry, some of my favorites recently are Life 3.0, Untamed, Home Body and Atomic Habits.
                                </p>

                                <p className="about-item-body-text">
                                    I also spend a good amount of time on&nbsp;

                                    <div className="tooltip">
                                        <a href="https://twitter.com/_chloechantelle" target="_blank" rel="noopener noreferrer" className="link link--txt">
                                            Twitter
                                        </a>
                                        <span className="tooltip-text">it's a lot of just retweeting memes or Elon Musk, sorry not sorry</span>
                                    </div>

                                    <span> and taking care of </span>
                                    <div className="tooltip">
                                        <span className="link link--noClick"> my plants.</span>
                                        <span className="tooltip-text">we're up to 15 atm</span>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="about-item" data-aos="fade-left">

                        <h3 className="about-item-body-title">
                            &#62; 02. — Tech
                        </h3>

                        <div className="about-item-container">
                            <div className="about-item-body">

                                <span className="about-item-body-text">
                                    <p>Languages I speak:</p>
                                    <ul>
                                        <li className="about-item-body-text-item">HTML5</li>
                                        <li className="about-item-body-text-item">SCSS</li>
                                        <li className="about-item-body-text-item">JavaScript (ES6+)</li>
                                        <li className="about-item-body-text-item">TypeScript (4+)</li>
                                    </ul>

                                    <p>Tech I've been working with:</p>
                                    <ul>
                                        <li className="about-item-body-text-item">
                                            <span className="tooltip">React
                                                <span className="tooltip-text">the best ♥</span>
                                            </span>
                                        </li>
                                        <li className="about-item-body-text-item">Angular</li>
                                        <li className="about-item-body-text-item">Web Components</li>
                                        <li className="about-item-body-text-item">Storybook</li>
                                        <li className="about-item-body-text-item">StencilJS</li>
                                        <li className="about-item-body-text-item">Gatsby</li>
                                        <li className="about-item-body-text-item">Next.JS</li>
                                        <li className="about-item-body-text-item">GraphQL</li>
                                        <li className="about-item-body-text-item">Headless CMS (Prismic, GraphCMS)</li>
                                        <li className="about-item-body-text-item">AWS S3 & Lambda</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section >
        );
    }
}

export default About;
