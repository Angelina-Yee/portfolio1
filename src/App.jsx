import React, {useEffect, useState} from "react";
import Project from "./pages/Project.jsx";
import About from "./pages/About.jsx";
import Design from "./pages/Design.jsx";
import "./styles.css";
import Spline from '@splinetool/react-spline';
import CustomCursor from "./components/CustomCursor.jsx";
import Contact from "./pages/Contact.jsx";
import AngelinaYee_Resume from "./assets/AngelinaYee_Resume.pdf";

function App() {
  const [cursorOn, setCursorOn] = useState(() => {
    const saved = localStorage.getItem("cursorOn");
    return saved ? JSON.parse(saved) : true; 
  });

  useEffect(() => {
    localStorage.setItem("cursorOn", JSON.stringify(cursorOn));
    document.body.classList.toggle("has-custom-cursor", cursorOn);
  }, [cursorOn]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: "smooth"});
  };

  return (
    <>
    {cursorOn && <CustomCursor/>}
    <div className="page-scroll">
      <header className="head">
        {/*Background*/}
        <div className="spline-bg">
          <Spline scene="https://prod.spline.design/izSCk6zmML2KsLgv/scene.splinecode" />
        </div>
        {/*Header&Hero*/}
        <nav className="nav">
          <div className="brand">A.Y.</div>
          <div className="nav-links">
            <button onClick={()=>scrollTo("about")}>About</button>
            <button onClick={()=>scrollTo("projects")}>Projects</button>
            <button><a href="#resume">Resume</a></button>
            <button><a onClick={()=>scrollTo("contact")} className="cont">Contact</a></button>
            <button className="cursor-toggle" aria-pressed={cursorOn} onClick={() => setCursorOn(v=>!v)} title={cursorOn ? "Turn custom cursor off" : "Turn custom cursor on"}>
              {cursorOn ? "Cursor: ON" : "Cursor: OFF"}
            </button>
          </div>
        </nav>
        <div className="hero">
          <h1>Angelina Yee</h1>
          <h3>Front-end &amp; UI/UX</h3>
          <button className="scroll-down" onClick={() => scrollTo("about")} aria-label="scroll to about page">⌵</button>
        </div>
      </header>
      <div id="about" className="sectionone">
        <About/>
      </div>
      <div id="projects" className="sectiontwo">
        <Project/>
      </div>
      <div id="design" className="sectionthree">
        <Design/>
      </div>
      <div id="links" className="sectionfour">
        <Contact/>
      </div>
      <footer>
        <p>Let's work together!</p>
      </footer>
    </div>
    </>
  )
}

export default App;
