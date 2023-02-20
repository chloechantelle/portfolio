import React from 'react';
import { Smile, Code, Mail, Terminal } from 'react-feather';

class Sidenav extends React.Component<any> {

    render() {
        return (
            <div className="sidenav">
                <div className="sidenav-container">
                    <a href="#contact" className="link link--txt sidenav-item">
                        <div className="sidenav-item-icon">
                            <Mail />
                        </div>
                        Contact
                    </a>
                    <a href="#projects" className="link link--txt sidenav-item">
                        <div className="sidenav-item-icon">
                            <Terminal />
                        </div>
                        Projects
                    </a>
                    <a href="#experience" className="link link--txt sidenav-item">
                        <div className="sidenav-item-icon">
                            <Code />
                        </div>
                        Experience
                    </a>
                    <a href="#about" className="link link--txt sidenav-item">
                        <div className="sidenav-item-icon">
                            <Smile />
                        </div>
                        About
                    </a>
                </div>
            </div>
        );
    }
}

export default Sidenav;
