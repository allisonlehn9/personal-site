
import React from "react"

import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
    return (
      <div className='home'>
        <Navbar />
        <Intro />
        <Projects />
        <Contact />
      </div>
    );
  }
  