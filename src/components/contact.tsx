import React from 'react';
import avatar from '../assets/images/avatar.png';
import { Mail } from 'react-feather';

class Contact extends React.Component {

    render() {
        return (
            <div className="contact">
                <div data-aos="fade-right" className="contact-item">
                    <div className="contact-item-avatar">
                        <div className="contact-item-avatar-container">
                            <img src={avatar} alt="avatar" className="contact-item-avatar-image" />
                            <a href="https://www.deviantart.com/corverus0" target="_blank" className="contact-item-avatar-note link link--txt">
                                Art by Corverus-
                            </a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="contact-item">
                    <div className="contact-item-heading">
                        &#62; 05. — Get in touch
                    </div>
                    <div className="contact-item-text">
                        My inbox is always open, whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </div>
                    <div className="contact-item-cta">
                        <a href="mailto:chloechantellepotter@gmail.com"
                            className="link link--btn link--btn--primary"
                            target="_blank" rel="noopener noreferrer">
                            <Mail /> Contact me
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
