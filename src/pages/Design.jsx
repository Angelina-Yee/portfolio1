import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import hn0 from "../assets/designs/helpNseek/hn0.png";
import hn1 from "../assets/designs/helpNseek/hn1.png";
import hn2 from "../assets/designs/helpNseek/hn2.jpeg";
import hn3 from "../assets/designs/helpNseek/hn3.jpeg";
import hn4 from "../assets/designs/helpNseek/hn4.jpeg";
import hn5 from "../assets/designs/helpNseek/hn5.jpeg";
import pc0 from "../assets/designs/pathsCrossed/pc0.png";
import pc1 from "../assets/designs/pathsCrossed/pc1.png";
import pc2 from "../assets/designs/pathsCrossed/pc2.png";
import pc3 from "../assets/designs/pathsCrossed/pc3.png";
import pc4 from "../assets/designs/pathsCrossed/pc4.png";
import pc5 from "../assets/designs/pathsCrossed/pc5.png";
import ff0 from "../assets/designs/forestFlow/ff0.png";
import ff1 from "../assets/designs/forestFlow/ff1.png";
import ff2 from "../assets/designs/forestFlow/ff2.png";
import ff3 from "../assets/designs/forestFlow/ff3.png";
import ff4 from "../assets/designs/forestFlow/ff4.png";
import ff5 from "../assets/designs/forestFlow/ff5.png";
import pp0 from "../assets/designs/pixelPal/pp00.png";
import pp1 from "../assets/designs/pixelPal/pp1.png";
import pp2 from "../assets/designs/pixelPal/pp2.png";
import pp3 from "../assets/designs/pixelPal/pp3.png";
import pp4 from "../assets/designs/pixelPal/pp4.png";
import pp5 from "../assets/designs/pixelPal/pp5.png";
import "../styles.css";

const categories = [
    {
        name: "helpNseek",
        images: [hn0, hn1, hn2, hn3, hn4, hn5]
    },
    {
        name: "Paths Crossed",
        images: [pc0, pc1, pc2, pc3, pc4, pc5]
    },
    {
        name: "Forest Flow", 
        images: [ff0, ff1, ff2, ff3, ff4, ff5]
    },
    {
        name: "Pixel-Pal",
        images: [pp0, pp1, pp2, pp3, pp4, pp5]
    },
];

export default function Design(){
    const [cat, setCat] = useState(0);
    const swiperRef = useRef(null);
    const {name, images} = categories[cat];
    const goCategory = (dir) => {
        setCat((c) => (c + dir + categories.length) % categories.length);
    };

    const goSlide = (dir) => {
        if(!swiperRef.current) return;
        if(dir === -1) swiperRef.current.slidePrev();
        if(dir === 1) swiperRef.current.slideNext();
    }
    return(
        <section id="design" className="design-section">
            <div className="design-curve">
                <h2 className="design-title">Designs</h2>
                <div className="design-controls">
                    <button className="nextBack" onClick={() => goCategory(-1)} aria-label="Previous category">
                        &laquo; Back
                    </button>
                    <div className="categoryName">{name}</div>
                     <button className="nextBack" onClick={() => goCategory(1)} aria-label="Next category">
                        Next &raquo;
                    </button>
                </div>
                <Swiper 
                    key={name}
                    onSwiper={(swiper) => (swiperRef.current=swiper)}
                    spaceBetween={40}
                    slidesPerView={3}
                    modules={[Autoplay]}
                    loop = {true}
                    grabCursor= {true}
                    centeredSlides= {true}
                    autoplay={false}
                >
                    {images.map((src, i) => (
                        <SwiperSlide key={i}>
                            <img src={src} alt={`${name} slide ${i + 1}`}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="gallery-actions">
                    <button className="round" onClick={() => goSlide(-1)} aria-label="Previous Image">←</button>
                    <button className="round" onClick={() => goSlide(1)} aria-label="Next Image">→</button>
                </div>
                <p className="hint">Click or Drag</p>
            </div>
        </section>
    );
}
