import React from 'react';
import { GitHub, Mail, Twitter, Linkedin, Code, ExternalLink, MessageCircle } from 'react-feather';

class Social extends React.Component {

    render() {
        return (
            <div className="social" data-aos="fade-down">
                <a href="https://github.com/chloechantelle" title="GitHub" className="social-item link link--txt" target="_blank" rel="noopener noreferrer">
                    <GitHub />
                </a>
                <a href="https://twitter.com/_chloechantelle" title="Twitter" className="social-item link link--txt" target="_blank" rel="noopener noreferrer">
                    <Twitter />
                </a>
                <a href="https://www.linkedin.com/in/chloechantelle" title="Linkedin" className="social-item link link--txt" target="_blank" rel="noopener noreferrer">
                    <Linkedin />
                </a>
                <a href="https://gist.github.com/chloechantelle" title="Gists" className="social-item link link--txt" target="_blank" rel="noopener noreferrer">
                    <Code />
                </a>
                <a href="https://steamcommunity.com/id/ayychloe" title="Steam" className="social-item link link--txt" target="_blank" rel="noopener noreferrer">
                    <MessageCircle />
                </a>
                <a href="https://chloechantelle.deviantart.com" title="DeviantArt" className="social-item link link--txt" target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                </a>
                <a href="mailto:chloechantellepotter@gmail.com" title="Email" className="social-item link link--txt" target="_blank" rel="noopener noreferrer">
                    <Mail />
                </a>
            </div>
        );
    }
}

export default Social;
