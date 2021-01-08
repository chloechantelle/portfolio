import React from 'react';
import { GitHub, Mail } from 'react-feather';

interface IState {
    hideLine: Boolean
}

class Cover extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            hideLine: false
        }
    }

    componentDidMount() {
        const coverCheckpoint = 50;

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= coverCheckpoint) {
                this.setState({ hideLine: false });
            } else {
                this.setState({ hideLine: true });
            }
        });
    }

    render() {
        return (
            <section data-aos="fade" className="cover">

                <div className="cover-container">

                    <div className="cover-info">

                        <h1 className="cover-info-title">
                            <span className="cover-info-title-greeting">Hi, </span>
                            I'm Chloe Chantelle Hoffman
                        </h1>

                        <div className="cover-info-body">
                            <h2 className="cover-info-body-text">Front End Developer
                                <a href="https://www.findex.com.au/home" className="link link--txt" target="_blank" rel="noopener noreferrer"> @Findex </a>
                                <span role="img" aria-label="Woman with laptop">👩🏻‍💻</span>
                            </h2>
                            <h2 className="cover-info-body-text">Passionate about minimalism, video games and good coffee
                            <span role="img" aria-label="Coffee cup"> ☕</span>
                            </h2>
                        </div>

                        <div className="cover-info-cta">
                            <a href="mailto:chloe@chloechantelle.com"
                                className="link link--btn link--btn--primary"
                                target="_blank" rel="noopener noreferrer">
                                <Mail /> Contact
                            </a>
                            <a href="https://github.com/chloechantelle"
                                className="link link--btn link--btn--secondary"
                                target="_blank" rel="noopener noreferrer">
                                <GitHub /> GitHub
                            </a>
                        </div>

                    </div>

                    <div className="cover-logo">
                        <div className="cover-logo-container">
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
                    <span className={`cover-bottom-line ${this.state.hideLine === true ? 'cover-bottom-line--hide' : ''}`}></span>
                </div>

            </section>
        );
    }
}

export default Cover;
