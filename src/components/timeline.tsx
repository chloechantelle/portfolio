import React from 'react';

class Timeline extends React.Component<any> {

    render() {
        return (
            <section data-aos="fade-up" className="timeline container">

                <div className="timeline-heading">
                    &#62; 03. — Experience
                </div>

                <div className="timeline-content">

                    <div className="timeline-content-event">
                        <div className="timeline-content-event-date">
                            <p className="timeline-content-event-date-text">2019 - Present</p>
                        </div>
                        <div className="timeline-content-event-name">
                            <p className="timeline-content-event-name-title">Front End Developer</p>
                            <a className="timeline-content-event-name-body link link--txt" href="https://www.findex.com.au/home" target="_blank" rel="noopener noreferrer">@Findex</a>
                        </div>
                    </div>

                    <div className="timeline-content-event">
                        <div className="timeline-content-event-date">
                            <p className="timeline-content-event-date-text">2018 - 2019</p>
                        </div>
                        <div className="timeline-content-event-name">
                            <p className="timeline-content-event-name-title">Junior Web Developer</p>
                            <a className="timeline-content-event-name-body link link--txt" href="https://www.findex.com.au/home" target="_blank" rel="noopener noreferrer">@Findex</a>
                        </div>
                    </div>

                    <div className="timeline-content-event">
                        <div className="timeline-content-event-date">
                            <p className="timeline-content-event-date-text">2017 - 2018</p>
                        </div>
                        <div className="timeline-content-event-name">
                            <p className="timeline-content-event-name-title">Diploma of Web Development</p>
                            <p className="timeline-content-event-name-body">TAFE QLD</p>
                        </div>
                    </div>

                    <div className="timeline-content-event">
                        <div className="timeline-content-event-date">
                            <p className="timeline-content-event-date-text">2016 - 2017</p>
                        </div>
                        <div className="timeline-content-event-name">
                            <p className="timeline-content-event-name-title">Certificate 3 in Web Tech</p>
                            <p className="timeline-content-event-name-body">TAFE QLD</p>
                        </div>
                    </div>

                    <div className="timeline-content-event">
                        <div className="timeline-content-event-date">
                            <p className="timeline-content-event-date-text">2015 - 2018</p>
                        </div>
                        <div className="timeline-content-event-name">
                            <p className="timeline-content-event-name-title">Freelance Work</p>
                            <p className="timeline-content-event-name-body">Commission and Collaboration Projects</p>
                        </div>
                    </div>

                </div>              

            </section>
        );
    }
}

export default Timeline;
