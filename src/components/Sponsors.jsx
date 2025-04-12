import React, { useEffect, useRef } from "react";
import "../styles/Sponsors.css";
import sponsorImages from "../utils/sponsorImages";

const Sponsors = () => {
  const sliderTrackRef = useRef(null);
  const speedRef = useRef(1);
  const offsetRef = useRef(0);
  const animationRef = useRef(null);
  const imageWidthRef = useRef(0);

  const repeatedImages = [...sponsorImages, ...sponsorImages];

  useEffect(() => {
    const sliderTrack = sliderTrackRef.current;

    const setSpeed = () => {
      if (window.innerWidth >= 1024) {
        speedRef.current = 2;
      } else if (window.innerWidth >= 600) {
        speedRef.current = 2;
      } else {
        speedRef.current = 2;
      }
    };

    const updateImageWidth = () => {
      const firstImage = sliderTrack?.children[0];
      if (firstImage) {
        imageWidthRef.current = firstImage.clientWidth;
      }
    };

    const animate = () => {
      offsetRef.current += speedRef.current;
      sliderTrack.style.transform = `translateX(-${offsetRef.current}px)`;

      const resetThreshold = imageWidthRef.current * sponsorImages.length;
      if (offsetRef.current >= resetThreshold) {
        offsetRef.current = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setSpeed();
      updateImageWidth();
    };

    setSpeed();
    updateImageWidth();
    animationRef.current = requestAnimationFrame(animate);

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderTrackRef}>
        {repeatedImages.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
