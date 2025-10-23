import React, {useEffect, useState} from "react";
import {motion, useMotionValue, useSpring} from "framer-motion";
import "../customCursor.css";

export default function CustomCursor() {
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const silkX = useSpring(x, {stiffness: 600, damping: 40, mass: 0.5});
    const silkY = useSpring(y, {stiffness: 600, damping: 40, mass: 0.5});

    const [hovered, setHovered] = useState(false);
    const [down, setDown] = useState(false);
    const size = hovered ? 60 : 36;

    useEffect(() => {
        const move = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };

        const md = () => setDown(true);
        const mu = () => setDown(false);

        window.addEventListener("mousemove", move, {passive: true});
        window.addEventListener("mousedown", md);
        window.addEventListener("mouseup", mu);

        const targets = document.querySelectorAll("a, button, [role='button'], .clickable, .swiper-slide img");
        const enter = () => setHovered(true);
        const leave = () => setHovered(false);
        targets.forEach((t) => {
            t.addEventListener("mouseenter", enter);
            t.addEventListener("mouseleave", leave);
        });

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mousedown", md);
            window.removeEventListener("mouseup", mu);
            targets.forEach((t) => {
                t.removeEventListener("mouseenter", enter);
                t.removeEventListener("mouseleave", leave);
            });
        };
    }, [x, y]);

    const followX = silkX;
    const followY = silkY;

    return(
        <motion.div className={`cursor-glass ${hovered ? "hovered" : ""} ${down ? "down" : ""}`} style={{translateX: followX, translateY: followY, marginLeft: -(size/2), marginTop: -(size/2), width: size, height: size,}}/>
    );
}