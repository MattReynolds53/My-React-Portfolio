// import logo from './logo.svg';
import './App.css';

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";



export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

// export default App;
