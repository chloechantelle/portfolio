import React from 'react';

import project1 from '../assets/images/projects/guide.png';
import project2 from '../assets/images/projects/UninspiredOrdinary.png';
import project3 from '../assets/images/projects/W10DN.gif';
import project4 from '../assets/images/projects/completionist.gif';
import project5 from '../assets/images/projects/Valerie.gif';
import project6 from '../assets/images/projects/Snow.gif';
import project7 from '../assets/images/projects/portfolio.mp4';

import { GitHub, ExternalLink } from 'react-feather';


class Projects extends React.Component {

    render() {
        return (
            <div data-aos="fade-up" className="projects container" id="projects">

                <div className="projects-heading">
                    &#62; 04. — Projects
                </div>

                <div className="projects-content">

                    <div className="projects-content-item projects-content-item--right" data-aos="fade-left">
                        <div className="projects-content-item-description projects-content-item-description--right">
                            <h3 className="projects-content-item-description-title">
                                PD Portfolio
                            </h3>
                            <h3 className="projects-content-item-description-type">
                                Website
                            </h3>
                            <p className="projects-content-item-description-body">
                                I worked with a Product Designer to create a portfolio for him, we worked together to understand the brand identity he wanted to have on the website and what features he needed. We achieved a portfolio that showcases all of his different types of art projects, seperate pages for each project with navigation between, his experience and his background. I used ReactJS with NextJS to create the project pages and SCSS for styling.
                            </p>
                            <p className="projects-content-item-description-tech">ReactJS NextJS SCSS</p>
                        </div>
                        <div className="projects-content-item-screenshot projects-content-item-screenshot--right">
                            <div className="projects-content-item-screenshot-container">
                                <video
                                    className="projects-content-item-screenshot-image"
                                    autoPlay
                                    loop
                                    muted
                                    src={project7}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="projects-content-item" data-aos="fade-right">
                        <div className="projects-content-item-description">
                            <h3 className="projects-content-item-description-title">
                                Ricing Guide
                            </h3>
                            <h3 className="projects-content-item-description-type">
                                Website
                            </h3>
                            <p className="projects-content-item-description-body">
                                The W10 Ricing Guide is a pet project I created early 2016 in the void of not having a specific location with references and answers to generic questions of how to customize Windows 10. It started off as a Pastebin with a list of links and has now turned into an organized home for references, links, answers and solutions for anything related to Windows 10.
                            </p>
                            <p className="projects-content-item-description-tech">HTML CSS jQuery</p>

                            <a className="link link--txt projects-content-item-description-cta projects-content-item-description-cta" href="https://github.com/chloechantelle/ricing">
                                <GitHub />
                            </a>

                            <a className="link link--txt projects-content-item-description-cta projects-content-item-description-cta" href="http://ricing.chloechantelle.com">
                                <ExternalLink />
                            </a>

                        </div>
                        <div className="projects-content-item-screenshot">
                            <div className="projects-content-item-screenshot-container">
                                <img src={project1} alt="project1" className="projects-content-item-screenshot-image" />
                            </div>
                        </div>
                    </div>

                    <div className="projects-content-item projects-content-item--right" data-aos="fade-left">
                        <div className="projects-content-item-description projects-content-item-description--right">
                            <h3 className="projects-content-item-description-title">
                                Uninspired Ordinary
                            </h3>
                            <h3 className="projects-content-item-description-type">
                                Mockup
                            </h3>
                            <p className="projects-content-item-description-body">
                                Product page mockup for a skincare product I adore. I wanted to create an extremely minimal product page so the focus is the product and it's ingredients. I also experimented with perspective shadows for the product image. I named it Uninspired Ordinary as I felt uninspired and uncreative when starting this and turned it around by creating a neat design that I really like.
                            </p>
                            <p className="projects-content-item-description-tech">GIMP</p>
                        </div>
                        <div className="projects-content-item-screenshot projects-content-item-screenshot--right">
                            <div className="projects-content-item-screenshot-container">
                                <img src={project2} alt="project2" className="projects-content-item-screenshot-image" />
                            </div>
                        </div>
                    </div>

                    <div className="projects-content-item" data-aos="fade-right">

                        <div className="projects-content-item-description">
                            <h3 className="projects-content-item-description-title">
                                W10 Day and Night
                            </h3>
                            <h3 className="projects-content-item-description-type">
                                Startpage
                            </h3>
                            <p className="projects-content-item-description-body">
                                W10 D&N (or Day and Night) is a startpage to accompany the Visual Style I made by the same name. The idea of the Visual Style is to use the light theme during the day, and the dark theme during the night, so I wanted a startpage that could easily swap color schemes to fit in with the ideal usage of the Visual Style. It contains customizable links and an image, as well as the switch to change colors using purely CSS and checkboxes.
                            </p>
                            <p className="projects-content-item-description-tech">HTML CSS JavaScript jQuery</p>
                            <a className="link link--txt projects-content-item-description-cta" href="https://github.com/chloechantelle/W10DN">
                                <GitHub />
                            </a>
                        </div>

                        <div className="projects-content-item-screenshot">
                            <div className="projects-content-item-screenshot-container">
                                <img src={project3} alt="project3" className="projects-content-item-screenshot-image" />
                            </div>
                        </div>
                    </div>

                    <div className="projects-content-item projects-content-item--right" data-aos="fade-left">

                        <div className="projects-content-item-description projects-content-item-description--right">
                            <h3 className="projects-content-item-description-title">
                                The Completionist
                            </h3>
                            <h3 className="projects-content-item-description-type">
                                Dynamic app
                            </h3>
                            <p className="projects-content-item-description-body">
                                The Completionist is a prototype I made for class with the idea of having a "Completionist" complete (earn trophies/achievements) in games for customers, with customers paying a fee depending on the time spent and be given full credit for games completed. The concept was concieved out of pure spite of how draining but addictive completing games can be and how it could in turn be a solution and business model.
                            </p>
                            <p className="projects-content-item-description-tech">PHP Ajax Materialize SQL</p>
                            <a className="link link--txt projects-content-item-description-cta" href="https://github.com/chloechantelle/completionist">
                                <GitHub />
                            </a>
                        </div>

                        <div className="projects-content-item-screenshot projects-content-item-screenshot--right">
                            <div className="projects-content-item-screenshot-container">
                                <img src={project4} alt="project4" className="projects-content-item-screenshot-image" />
                            </div>
                        </div>
                    </div>

                    <div className="projects-content-item" data-aos="fade-right">

                        <div className="projects-content-item-description">
                            <h3 className="projects-content-item-description-title">
                                Valerie
                            </h3>
                            <h3 className="projects-content-item-description-type">
                                Startpage
                            </h3>
                            <p className="projects-content-item-description-body">
                                Valerie is a project that I shared online that was inspired by multiple designs that featured full front page wallpapers and underlines used on specific letters. The startpage has a search bar, music player, visualizer and links.
                            </p>
                            <p className="projects-content-item-description-tech">HTML CSS JavaScript jQuery</p>
                            <a className="link link--txt projects-content-item-description-cta" href="https://github.com/chloechantelle/valerie">
                                <GitHub />
                            </a>
                        </div>

                        <div className="projects-content-item-screenshot">
                            <div className="projects-content-item-screenshot-container">
                                <img src={project5} alt="project5" className="projects-content-item-screenshot-image" />
                            </div>
                        </div>
                    </div>

                    <div className="projects-content-item projects-content-item--right" data-aos="fade-left">

                        <div className="projects-content-item-description projects-content-item-description--right">
                            <h3 className="projects-content-item-description-title">
                                Snow
                            </h3>
                            <h3 className="projects-content-item-description-type">
                                Startpage
                            </h3>
                            <p className="projects-content-item-description-body">
                                Snow originally started out as a test to see if I could get snowflakes to fall as realistically as possible without having any noticeable "stop" points. Later on I wanted to implement a link menu and then experimented with replacing the default context menu of a website.
                            </p>
                            <p className="projects-content-item-description-tech">HTML CSS jQuery</p>
                            <a className="link link--txt projects-content-item-description-cta" href="https://github.com/chloechantelle/snow">
                                <GitHub />
                            </a>
                        </div>

                        <div className="projects-content-item-screenshot projects-content-item-screenshot--right">
                            <div className="projects-content-item-screenshot-container">
                                <img src={project6} alt="project6" className="projects-content-item-screenshot-image" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Projects;
