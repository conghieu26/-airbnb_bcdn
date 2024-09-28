import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css"; // Import Ant Design CSS
import { SearchForm } from "./searchform/searchform"; // Import the SearchForm
import { Destinations } from "./destination/destination"; // Import component Destinations
import { PropertyGrid } from "./propertygrid/propertygrid";

const carouselContainerStyle = {
  position: "relative",
  height: "100vh",
  overflow: "hidden",
};

const imgStyle = {
  width: "100%",
  height: "100vh",
  objectfit: "cover",

};

const searchFormStyle = {
  position: "absolute",
  top: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 10,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};
const propertyGrid = {
  color: "white",
};

const destination = {
  color: "white",
};

export function Home() {
  return (
    <div>
      {/* Carousel với SearchForm bên trên */}
      <div style={carouselContainerStyle}>
        {/* Search Form */}
        <div style={searchFormStyle}>
          <SearchForm />
        </div>

        {/* Carousel */}
        <Carousel effect="fade">
          <div>
            <img 
              src="https://toquoc.mediacdn.vn/280518851207290880/2023/4/5/s31-1680712574524148389340.jpg"
              style={imgStyle}
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://toquoc.mediacdn.vn/280518851207290880/2023/4/4/s41-1680599577443245197806.jpg"
              style={imgStyle}
              alt="Slide 2"
            />
          </div>
        </Carousel>
      </div>

      {/* Component Destinations */}
      <div style={destination}>
        <Destinations />
      </div>

      <div style={propertyGrid}>
        <PropertyGrid />
      </div>
    </div>
  );
}
