import React from "react";
import "../styles.css";
import avatar from "../assets/ange.png";
import riveIcon from "../assets/rive-icon.png";
import splineIcon from "../assets/spline-icon.png";

export default function About(){
    return(
        <section id="about" className="about-wrap">
            <div className="about-grid">
                <div className="about-left">
                    <h2 id="about-title" className="about-title">About Me</h2>
                    <p id="about-intro">Hi, I'm Angelina, a Computer Science student at UCSD speacializing in front-end development and UI/UX designs. I focus on creating intuitive, accessible, and engaging digital experiences. My work focuses on interactive web applications, user-centered interfaces, and responsive designs that showcase creativity and functionality.</p>
                    <hr className="about-line"/>

                    <h3 className="about-tools">Tools</h3>
                    <ul className="about-list">
                        {[
                            {name: "React", icon:"react"},
                            {name: "HTML5", icon: "html5"},
                            {name: "CSS3", icon: "css3"},
                            {name: "JavaScript", icon: "javascript"},
                            {name: "Python", icon: "python"},
                            {name: "Java", icon: "java"},
                            {name: "C++", icon:"cplusplus"},
                            {name: "VS Code", icon: "vscode"},
                            {name: "Figma", icon: "figma"},
                            {name: "Rive", src: riveIcon},
                            {name: "Spline", src: splineIcon},
                            {name: "Notion", icon: "notion"},
                            {name: "Git", icon: "git"},
                            {name: "GitHub", icon: "github"},
                            {name: "Eclipse", icon: "eclipse"},
                        ].map(t=>(
                            <li key={t.name} className="pill">
                                <img src={t.src || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.icon}/${t.icon}-original.svg`} alt={t.name} className="tool-icons"/>
                            <span>{t.name}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="scroll-btn" onClick={()=>{const section = document.getElementById("projects"); section?.scrollIntoView({behavior: "smooth"});}}>
                        Scroll For Projects ↓
                    </button>
                </div>
                <figure className="about-right">
                    <img src={avatar} alt="Angelina's Picture"/>
                </figure>
            </div>
        </section>
    );
}