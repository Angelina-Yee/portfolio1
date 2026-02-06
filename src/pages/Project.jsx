import React from "react";
import "../styles.css";
import hs1 from "../assets/designs/helpNseek/hs1.png";
import pc00 from "../assets/designs/pathsCrossed/pc00.png";
import ff00 from "../assets/designs/forestFlow/ff00.png";
import pp00 from "../assets/designs/pixelPal/pp00.png";
import sr0 from "../assets/designs/seatReserve/sr0.png";

const projs=[
    {
        id: "helpseek",
        title: "helpNseek",
        copy: "A full-stack web application addressing the issue UCSD students have for lost valuables. My role in this project was to design the UI/UX for the website and implement the front-end using React, CSS, and JavaScript. This web application features real-time messaging, advanced filtering, and secure user authentication. Students can post lost/found items, find posts about their lost belongings by filtering the results, use AI to generate a description of the item, and message one another with appropriate restrictions.",
        bg: "#fff",
        accent: "#000",
        image: hs1,
        github: "https://github.com/Angelina-Yee/help-seek", 
        figma: "https://www.figma.com/design/1w2KZHDzyGQcFBuT15RXTy/Untitled?t=oL4TPLeRoQP2cXNc-1",
        demo: "https://www.helpnseek.com/",
    },
    {
        id: "tic_tac_toe",
        title: "Paths Crossed",
        copy: "A simple game of tic-tac-toe, with a retro aesthetic and pixelated visuals, to help two players come to a decision. Users are required to play on the same device, where each player writes down their personal solution to the decision, and after playing one round or more of tic-tac-toe, the winner's solution pops up on the screen and helps the indecisive pair.",
        bg: "#000",
        accent: "#fff",
        image: pc00,
        github: "https://github.com/Angelina-Yee/Paths-Crossed",
        figma: "https://www.figma.com/design/N5Aneel4CEENtXKVq5YXXL/Paths-Crossed?node-id=0-1&t=oL4TPLeRoQP2cXNc-1",
        demo: "https://pathscrossed.netlify.app/",
    },
    {
        id: "forest_flow",
        title: "Forest Flow",
        copy: "Forest Flow is a three-in-one website dedicated to students who need assistance when they study. The main page plays on the idea of being in a forest, surrounded by ambient noises to minimize distractions. In the website, the music notes play various unique ambiance music, the sun sends you to another page where users can utilize a study timer technique called, 'Pomodoro Timer', and finally, the picnic table goes to an external link where users can organize their tasks for the day with additional features like progress and calendar.",
        bg: "#fff",
        accent: "#000",
        image: ff00,
        github: "https://github.com/Angelina-Yee/Forest_Flow",
        figma: "https://www.figma.com/design/VlrGUBQjkBYvLiRUlEIkLc/Untitled?t=oL4TPLeRoQP2cXNc-1",
        demo: "https://forest-flow.netlify.app/",
    },
    {
        id: "pixel-pal",
        title: "Pixel-Pal",
        copy: "A processing website meant especially for designers and front-end developers to curate a color palette according to a prompt. Users can save their chosen background, text, primary, secondary, and accent colors to export as JSON or CSS. Futhermore, the focus of this project is on the user accessibility, according to the WCAG. Users are shown whether their choice of background and text colors have enough contrast for clear visibility.",
        bg: "#000",
        accent: "#fff",
        image: pp00,
        github: "https://github.com/Angelina-Yee/Pixel-Pal",
        figma: "https://www.figma.com/design/GDBrcbPH7dAPd0cNrkiJVM/Pixel-Pal?node-id=0-1&t=HyYoWEHTtRLyPvwa-1",
        demo: null,
        status: "in-progress",
    },
    {
        id: "seat_reservation",
        title: "Seat Reservation Design",
        copy: "A front-end focused class project with the purpose to enforce the respect of a shared public space and allow every UCSD library visitor to have equal access to the library. The website design allows users to reserve their seat for a certain amount of time, take a short break, and leave the seat. This project was implemented to address the issue of unavailable or absently occupied seats and loss of items due to visitors leaving belongings behind to keep their seats occupied.",
        bg: "#000",
        accent: "#fff",
        image: sr0,
        github: null,
        figma: "https://www.figma.com/design/muN6oCdHX3MlnRdPLMjWxU/Untitled?t=8LWhOWBUCADevMF3-1",
        demo: null,
        status: "Unavailable",
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
                        <div className="card-btn">
                            {p.github ? (
                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="view" style={{color:"#000"}}>
                                    View Github
                                </a>
                            ):(
                                <button className="view disabled" disabled>
                                    Unavailable
                                </button>
                            )}
                            <a href = {p.figma} target="_blank" rel="noopener noreferrer" className="view" style={{color:"#000"}}>View Figma</a>
                            {p.demo ? (
                                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="view" style={{color:"#000"}}>
                                    Live Demo
                                </a>
                            ):(
                                <button className="view disabled" disabled>
                                    In Progress
                                </button>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}