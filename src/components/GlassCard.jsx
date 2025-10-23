import React, {useRef} from "react";
import "../glassCard.css";

export default function GlassCard({children, width=400, height=300}){
    const cardRef = useRef(null);
    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const {left, top, width: w, height: h} = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const yRot = 20 * ((x-w/2)/w);
        const xRot = -30 * ((y-h/2)/h);
        card.style.transform = `perspective(1000px) scale(1.05) rotateX(${xRot}deg) rotateY(${yRot}deg)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        card.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg)`;
    };

    const handleClick = () => {
        const card = cardRef.current;
        card.style.animation = "spin 1s ease-in-out";
        setTimeout(() => {
            card.style.animation = "";
        }, 1000);
    };

    return(
        <div className="glass-card" ref={cardRef} style={{width: `${width}px`, height: `${height}px`}} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={handleClick}>
            {children}
        </div>
    );
}