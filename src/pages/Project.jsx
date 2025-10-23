import React from "react";
import "../styles.css";
import example from "../assets/example.jpeg";

const projs=[
    {
        id: "helpseek",
        title: "helpNseek",
        copy: "A full-stack web application addressing the issue UCSD students have for lost valuables. My role in this project was to design the UI/UX for the website and implement the front-end using React, CSS, and JavaScript. This web application features real-time messaging, advanced filtering, and secure user authentication. Students can post lost/found items, find posts about their lost belongings by filtering the results, use AI to generate a description of the item, and message one another with appropriate restrictions.",
        bg: "#fff",
        accent: "#000",
        image: example,
    },
    {
        id: "tic_tac_toe",
        title: "Paths Crossed",
        copy: "A simple game of tic-tac-toe, with a retro aesthetic and pixelated visuals, to help two players come to a decision. Users are required to play on the same device, where each player writes down their personal solution to the decision, and after playing one round or more of tic-tac-toe, the winner's solution pops up on the screen and helps the indecisive pair.",
        bg: "#000",
        accent: "#fff",
        image: example,
    },
    {
        id: "forest_flow",
        title: "Forest Flow",
        copy: "Forest Flow is a three-in-one website dedicated to students who need assistance when they study. The main page plays on the idea of being in a forest, surrounded by ambient noises to minimize distractions. In the website, the music notes play various unique ambiance music, the sun sends you to another page where users can utilize a study timer technique called, 'Pomodoro Timer', and finally, the picnic table goes to an external link where users can organize their tasks for the day with additional features like progress and calendar.",
        bg: "#fff",
        accent: "#000",
        image: example,
    },
    {
        id: "pixel-pal",
        title: "Pixel-Pal",
        copy: "A processing website meant especially for designers and front-end developers to curate a color palette according to a prompt. Users can save their chosen background, text, primary, secondary, and accent colors to export as JSON or CSS. Futhermore, the focus of this project is on the user accessibility, according to the WCAG. Users are shown whether their choice of background and text colors have enough contrast for clear visibility.",
        bg: "#000",
        accent: "#fff",
        image: example,
    }
];

export default function Project(){
    return(
        <section id="projects" className="stack-wrap" aria-label="Selected Projects">
            <div className="stack-pin">
                <h2 className="section-title">Projects</h2>
                {projs.map((p, i) => (
                    <article key={p.id} className="stack-card" style={{"--i": projs.length-i}}>
                        <div className="card-grid">
                            <div className="card-copy">
                                <h2 className="project-title">{p.title}</h2>
                                <p className="project-description">{p.copy}</p>
                            </div>
                            <div className="card-media">
                                <img src={p.image} alt="project screenshot" className="project-image"/>
                            </div>
                        </div>
                        <div className="card-btn" style={{"--chip": p.accent}}>
                            <button className="view">View GitHub</button>
                            <button className="view">Live Demo</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}