import React from 'react';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/Contact';
import Technologies from './components/Technologies';
import "./App.css";

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <Welcome />
      <AboutMe />
      <Technologies />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
