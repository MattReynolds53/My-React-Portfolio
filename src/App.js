// import './App.css';

// import React from "react";
// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Resume from "./components/Resume";



// export default function App() {
  //   return (
    //     <main>
    //       <Navbar />
    //       <About />
    //       <Projects />
    //       <Resume />
    //       <Contact />
    //       <Footer />
    //     </main>
    //   );
    // }
    
    
    import React from "react";
    import PortfolioContainer from "./components/PortfolioContainer";
    // import About from "./components/About";
    import Footer from "./components/Footer";

function App() {
  return (
    <div className="bucket-app">
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

// const App = () => <PortfolioContainer />;

export default App;

