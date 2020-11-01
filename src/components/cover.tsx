import React from 'react';
// import { coverTypes } from '../interfaces/cover';
import logo from '../assets/images/favi-light.png';
// logo, animation, name, bio, arrow

class Cover extends React.Component {
    constructor(props: any) {
        super(props);
        // this.state = { date: new Date() };
    }

    onScroll() {
        // if u scroll past certain point then hide === 
        console.log('scroll');
    }

    render() {
        return (
            // logo - animating - center of section
            // info - flex left - bottom
            // made w/ love - flex right - bottom

            <section className="cover">

                <div className="flex cover-desc">

                    <div className="flex-left">
                        <p>_name: chloe chantelle hoffman</p>
                        <p>_bio: UI design, minimalism and tea 🍵</p>
                    </div>

                    <div className="flex-right">
                        <div className="cover-logo">
                            {/* <div className="cover-logo-image">
                                <img src={logo} />
                            </div> */}
                            <div className="cover-logo-text">
                                <span className="cover-logo-text--arrow">&lt;</span>
                                <span className="cover-logo-text--slash">/</span>
                                <span className="cover-logo-text--letter">
                                    c
                                    <span className="cover-logo-text--letter--cursor"></span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="cover-bottom">
                    <span className="cover-bottom-line"></span>
                    {/* <span className="cover-bottom-arrow">&lt;</span> */}
                </div>

            </section>
        );
    }
}

export default Cover;
