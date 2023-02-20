import React from 'react';
import { Smile, Code, Mail, Terminal } from 'react-feather';

class Sidenav extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="sidenav">
                <div className="sidenav-container">
                    <a href="#contact" className="link link--txt sidenav-item">
                        <span className="sidenav-item-icon">
                            <Mail />
                        </span>
                        Contact
                    </a>
                    <a href="#projects" className="link link--txt sidenav-item">
                        <span className="sidenav-item-icon">
                            <Terminal />
                        </span>
                        Projects
                    </a>
                    <a href="#experience" className="link link--txt sidenav-item">
                        <span className="sidenav-item-icon">
                            <Code />
                        </span>
                        Experience
                    </a>
                    <a href="#about" className="link link--txt sidenav-item">
                        <span className="sidenav-item-icon">
                            <Smile />
                        </span>
                        About
                    </a>
                </div>
            </div>
        );
    }
}

export default Sidenav;
