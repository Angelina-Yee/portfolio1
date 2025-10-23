import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import hn0 from "../assets/designs/helpNseek/hn0.jpeg";
import hn1 from "../assets/designs/helpNseek/hn1.jpeg";
import hn2 from "../assets/designs/helpNseek/hn2.jpeg";
import hn3 from "../assets/designs/helpNseek/hn3.jpeg";
import hn4 from "../assets/designs/helpNseek/hn4.jpeg";
import hn5 from "../assets/designs/helpNseek/hn5.jpeg";
import pc0 from "../assets/designs/pathsCrossed/pc0.jpeg";
import pc1 from "../assets/designs/pathsCrossed/pc1.jpeg";
import pc2 from "../assets/designs/pathsCrossed/pc2.jpeg";
import pc3 from "../assets/designs/pathsCrossed/pc3.jpeg";
import pc4 from "../assets/designs/pathsCrossed/pc4.jpeg";
import pc5 from "../assets/designs/pathsCrossed/pc5.jpeg";
import ff0 from "../assets/designs/forestFlow/ff0.jpeg";
import ff1 from "../assets/designs/forestFlow/ff1.jpeg";
import ff2 from "../assets/designs/forestFlow/ff2.jpeg";
import ff3 from "../assets/designs/forestFlow/ff3.jpeg";
import ff4 from "../assets/designs/forestFlow/ff4.jpeg";
import ff5 from "../assets/designs/forestFlow/ff5.jpeg";
import pp0 from "../assets/designs/pixelPal/pp0.jpeg";
import pp1 from "../assets/designs/pixelPal/pp1.jpeg";
import pp2 from "../assets/designs/pixelPal/pp2.jpeg";
import pp3 from "../assets/designs/pixelPal/pp3.jpeg";
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
        images: [pp0, pp1, pp2, pp3]
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
                    autoplay={{delay: 2200, disableOnInteraction: false}}
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
