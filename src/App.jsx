import React from 'react';
import Header from './components/header/Header.jsx';
import Experience from './components/experience/Experience.jsx';
import About from './components/about/About.jsx';
import Nav from './components/nav/Nav.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Experience />
      <About />
      <Nav />
      <Contact />
      <Footer />
    </div>
    );
}

export default App;