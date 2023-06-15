import React from "react";
import Flickity from "flickity";
import "./flickity.css";

const FlickitySlide = () => {
    
  return (
    <div
      className="main-carousel flickity-button"
      data-flickity='{ "cellAlign": "left", "contain": true }'
    >
      <div className="gallery js-flickity">
        <div className="gallery-cell">dfsdf</div>
        <div className="gallery-cell">dfsdf</div>
        <div className="gallery-cell">sdfsdf</div>
        <div className="gallery-cell">sdfsdf</div>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
        <div className="gallery-cell"></div>
      </div>
    </div>
  );
};

export default FlickitySlide;
