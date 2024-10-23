import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact/>
            </section>
        </div>
    );
}

export default App;