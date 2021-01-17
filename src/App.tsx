import React from 'react';
import Cover from './components/cover';
import About from './components/about';
import './App.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

import Timeline from './components/timeline';
import Contact from './components/contact';
import Social from './components/social';
import Projects from './components/projects';
import Footer from './components/footer';

interface appTypes {
  previous: string;
  current: string;
  next: string;
}

class App extends React.Component<any, appTypes> {
  constructor(props: any) {
    super(props);

    this.state = {
      previous: 'prev',
      current: 'curr',
      next: 'next',
    };

    AOS.init();
  }

  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }

  render() {
    return (
      <div className="home">
        <Helmet>
          <title>Chloe Chantelle</title>
          <meta name="description" content="I'm Chloe, a Front End Developer at Findex based in Brisbane, AU. Passionate about minimalism, video games and good coffee ☕" />
          <meta name="keywords" content="Chloe Hoffman, Chloe Chantelle, Chloe, Developer, Frontend Developer" />
          <meta name="author" content="Chloe Chantelle Hoffman" />
          <meta property="og:title" content="Chloe Chantelle" />
          <meta property="og:description" content="I'm Chloe, a Front End Developer at Findex based in Brisbane, AU. Passionate about minimalism, video games and good coffee ☕" />
          <meta property="og:url" content="https://chloechantelle.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Chloe Chantelle" />
          <meta name="twitter:image:alt" content="I'm Chloe, a Front End Developer at Findex based in Brisbane, AU. Passionate about minimalism, video games and good coffee ☕" />
          <meta name="theme-color" content="#d483a0" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <Cover />
        <Social />
        <About />
        <Timeline />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
