import React from 'react';
import { GitHub, Mail, Twitter, Linkedin, Code } from 'react-feather';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="footer-social" data-aos="fade-down">
                    <a href="https://github.com/chloechantelle" className="footer-social-item link link--txt" target="_blank" rel="noopener noreferrer">
                        <GitHub />
                    </a>
                    <a href="https://twitter.com/_chloechantelle" className="footer-social-item link link--txt" target="_blank" rel="noopener noreferrer">
                        <Twitter />
                    </a>
                    <a href="https://www.linkedin.com/in/chloechantelle" className="footer-social-item link link--txt" target="_blank" rel="noopener noreferrer">
                        <Linkedin />
                    </a>
                    <a href="https://gist.github.com/chloechantelle" className="footer-social-item link link--txt" target="_blank" rel="noopener noreferrer">
                        <Code />
                    </a>
                    <a href="mailto:chloe@chloechantelle.com" className="footer-social-item link link--txt" target="_blank" rel="noopener noreferrer">
                        <Mail />
                    </a>
                </div>

                <div className="footer-note-heart">
                <a className="footer-note link link--txt" href="https://github.com/chloechantelle/portfolio">
                    Made w/ love by Coco
                </a>
                </div>

            </div>
        );
    }
}

export default Footer;
