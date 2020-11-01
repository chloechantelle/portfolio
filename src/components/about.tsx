import React from 'react';
// import { aboutTypes } from '../interfaces/about';

// use grid and code background, flex containers

class About extends React.Component {
    constructor(props: any) {
        super(props);
        // this.state = { date: new Date() };
    }

    render() {
        return (
            <section className="about">
                <div className="about-container">
                    <div className="about-item">
                        <div className="about-item-body">
                            <p>I'm Chloe, a Front End Developer working at Findex. I've been coding with a fascination for web design for the past 7 years.</p>

                            <p>I spend all of my free time either in Overwatch, on Twitter or taking care of my plants.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
