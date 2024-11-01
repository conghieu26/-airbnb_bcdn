import { Carousel } from "antd";
import "antd/dist/reset.css";
import React from "react";
import { Destinations } from "./destination/destination";
import { PropertyGrid } from "./propertygrid/propertygrid";
import SearchBar from "./searchform/searchform";

export function Home() {
  return (
    <div>
      {/* Carousel with SearchForm overlay */}
      <div className="relative h-screen overflow-hidden">
        {/* Search Form */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-10 bg-white bg-opacity-80 p-5 rounded-lg shadow-md">
          <SearchBar />
        </div>

        {/* Carousel */}
        <Carousel effect="fade" autoplay>
          <div>
            <img
              src="https://toquoc.mediacdn.vn/280518851207290880/2023/4/5/s31-1680712574524148389340.jpg"
              className="w-full h-screen object-cover"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://toquoc.mediacdn.vn/280518851207290880/2023/4/4/s41-1680599577443245197806.jpg"
              className="w-full h-screen object-cover"
              alt="Slide 2"
            />
          </div>
        </Carousel>
      </div>

      {/* Destinations Section */}
      <div className="text-white bg-gray-800 py-10">
        <Destinations />
      </div>

      {/* Property Grid Section */}
      <div className="text-white bg-gray-900 py-10">
        <PropertyGrid />
      </div>
    </div>
  );
}
