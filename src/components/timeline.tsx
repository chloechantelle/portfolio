import React from 'react';

class Timeline extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);
        this.state = ({ activeTab: 1 });
    }

    render() {

        return (
            <section data-aos="fade-up" className="timeline container" id="experience">

                <div className="timeline-heading">
                    &#62; 03. — Experience
                </div>

                <div className="timeline-container">

                    <div className="timeline-tabs">
                        <div
                            className={`timeline-tabs-tabItem 
                            ${this.state.activeTab === 1 && 'timeline-tabs-tabItem--active'}`}
                            onClick={() => this.setState({ activeTab: 1 })}>
                            FINDEX
                        </div>
                        <div
                            className={`timeline-tabs-tabItem
                            ${this.state.activeTab === 2 && 'timeline-tabs-tabItem--active'}`}
                            onClick={() => this.setState({ activeTab: 2 })}>
                            TAFE QLD
                        </div>
                        <div
                            className={`timeline-tabs-tabItem
                            ${this.state.activeTab === 3 && 'timeline-tabs-tabItem--active'}`}
                            onClick={() => this.setState({ activeTab: 3 })}>
                            FREELANCE
                        </div>
                    </div>

                    <div className="timeline-content" data-aos="fade-up">
                        {this.state.activeTab === 1 && (
                            <div>
                                <div className="timeline-content-event">
                                    <div className="timeline-content-event-name">
                                        <p className="timeline-content-event-name-title">
                                            Front End Developer @ <a className="link link--txt" href="https://www.findex.com.au/careers" target="_blank" rel="noopener noreferrer">Findex</a>

                                        </p>
                                        <p className="timeline-content-event-name-subtitle">Oct 2019 - Present</p>
                                        <ul className="timeline-content-event-name-body">
                                            <li>Iteratively build web experiences and improve upon the internal web apps that Findex staff use.</li>
                                            <li>Collaborate with Developers, Product Design and Product Management following best practices for the full software development life cycle to bring innovative products to market.</li>
                                            <li>Present product results at the end of every life cycle to all team members and Product Management, and present large scale features to internal business stakeholders and chief executives.</li>
                                            <li>Completed an internally held company leadership program to improve my leadership and business skills. </li>
                                            <li>Mentor and teach experienced Developers and new hires in a distributed working environment.</li>
                                            <li>Worked on an internally used Component Library that uses Web Components and Storybook to create components that use the Atomic Design approach to bridge the gap between Stakeholder, PD and Dev.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="timeline-content-event">
                                    <div className="timeline-content-event-name">
                                        <p className="timeline-content-event-name-title">
                                            Junior Web Developer @ <a className="link link--txt" href="https://www.findex.com.au/careers" target="_blank" rel="noopener noreferrer">Findex</a>

                                        </p>
                                        <p className="timeline-content-event-name-subtitle">Sep 2018 - Oct 2019</p>
                                        <ul className="timeline-content-event-name-body">
                                            <li>Developed internal static websites for Findex staff to use including a community fund run program and an employee benefits helper page. </li>
                                            <li>Collaborated with Front End Developers, Product Designers and Marketing Coordinators to help create the external main website (<a className="link link--txt" href="https://www.findex.com.au" target="_blank" rel="noopener noreferrer">Findex.com.au</a>).</li>
                                            <li>Relevant technologies used: React, Gatsby, SCSS, CMS Management.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        {this.state.activeTab === 2 && (
                            <div>
                                <div className="timeline-content-event">
                                    <div className="timeline-content-event-name">
                                        <p className="timeline-content-event-name-title">Diploma of Information Technology @ <span className="link link--txt">TAFE</span></p>
                                        <p className="timeline-content-event-name-subtitle">2017 - July 2018</p>
                                        <ul className="timeline-content-event-name-body">
                                            <li>Developed multiple web apps that stored user sessions and user information in a database that was managed using MySQL.</li>
                                            <li>Created a WordPress static website portfolio for a client.</li>
                                            <li>Relevant technologies used: PHP, SQL, HTML5, CSS, JS, WordPress.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="timeline-content-event">
                                    <div className="timeline-content-event-name">
                                        <p className="timeline-content-event-name-title">Certificate III of Information Technology @ <span className="link link--txt">TAFE</span></p>
                                        <p className="timeline-content-event-name-subtitle">2016 - 2017</p>
                                        <ul className="timeline-content-event-name-body">
                                            <li>Built simple web pages and applied structured query language in relational databases.</li>
                                            <li>Understanding how to develop and drive social media traffic to an established website using social media platforms.</li>
                                            <li>Relevant technologies used: HTML, CSS, JS.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        {this.state.activeTab === 3 && (
                            <div>
                                <div className="timeline-content-event">
                                    <div className="timeline-content-event-name">
                                        <p className="timeline-content-event-name-title">Freelance Projects</p>
                                        <p className="timeline-content-event-name-subtitle">2021 - Current</p>
                                        <ul className="timeline-content-event-name-body">
                                            <li>Currently creating various types of web projects to share including static sites, mockups, startpages and anything in between. </li>
                                            <li>Communicate with clients to achieve the commission that they wanted.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="timeline-content-event">
                                    <div className="timeline-content-event-name">
                                        <p className="timeline-content-event-name-title">Freelance Commission and Collaboration Projects</p>
                                        <p className="timeline-content-event-name-subtitle">2015 - 2018</p>
                                        <ul className="timeline-content-event-name-body">
                                            <li>Collaborated with artists and developers to create web projects for consumers including static sites, startpages, mockups and Visual Styles with the most popular one having over 1k favorites.</li>
                                            <li>Communicated with clients to achieve the commission that they wanted.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

            </section >
        );
    }
}

export default Timeline;
