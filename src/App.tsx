import React from 'react';
import Cover from './components/cover';
import About from './components/about';
import './App.scss';
// import '../src/assets/styles/index.scss';
// import About from './components/about';
// import Sidenav from './components/sidenav';
// import Timeline from './components/timeline';
// import Projects from './components/projects';
// import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div className="home">        

        {/* <Header /> - menu if having one */}

        <Cover />

        {/* <Sidenav /> - Inside of each component */}

        {/* <About /> */}

        {/* <Timeline /> */}

        {/* <Projects /> */}

        {/* <Footer /> */}

      </div>
    );
  }
}

export default App;
