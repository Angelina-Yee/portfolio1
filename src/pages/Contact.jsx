import React from "react";
import GlassCard from "../components/GlassCard";
import "../styles.css";

export default function Contact(){
    return(
        <section id="contact" className="contact">
            <div className="contact-grid">
                <div className="contact-left">
                    <h2 className="contact-title">Contact Me</h2>

                    <GlassCard width={500} height={350}>
                        <div className="card-content">
                            <p className="card-top">Front-End Development & UI/UX Design</p>
                            <h3 className="card-name">Angelina Yee</h3>
                            <p className="card-email">Email: yyunyeee0@gmail.com</p>
                        </div>
                    </GlassCard>
                </div>
                <div className="contact-divider" aria-label="true"/>
                <div className="contact-right">
                    <h2 className="contact-title">Links</h2>
                    <ul className="link-list">
                        <li>
                            <a className="link-btn" href="mailto:yyunyeee0@gmail.com">Email</a>
                        </li>
                        <li>
                            <a className="link-btn" href="mailto:yyunyeee0@gmail.com">Schedule a Call</a>
                        </li>
                        <li>
                            <a className="link-btn" href="https://www.linkedin.com/in/yun-shwe-yee-b26997217/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </li>
                        <li>
                            <a className="link-btn" href="https://github.com/Angelina-Yee" target="_blank" rel="noreferrer">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}