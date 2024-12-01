import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingTime from "../../../components/bookingInformation/bookingTime/bookingTime";
import BookingLocation from "../../../components/bookingInformation/bookinglocation/bookinglocation";
import CustomerQuantity from "../../../components/bookingInformation/customerQuantity/customerQuantity";

const SearchBar = () => {
  const [locations, setLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(
          "https://airbnbnew.cybersoft.edu.vn/api/vi-tri",
          {
            headers: {
              TokenCybersoft:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg",
            },
          },
        );
        setLocations(response.data.content);
      } catch (error) {
        console.error("Failed to fetch destinations:", error);
        alert("Unable to load locations. Please try again later.");
      }
    };

    fetchLocations();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        "https://airbnbnew.cybersoft.edu.vn/api/phong-thue/lay-phong-theo-vi-tri",
        {
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg",
          },
          params: {
            maViTri: locations.find((loc) => loc.tenViTri === searchTerm)?.id,
          },
        },
      );

      let filteredRooms = response.data.content;

      navigate("/rooms", {
        state: {
          rooms: filteredRooms,
          searchTerm,
        },
      });
    } catch (error) {
      console.error("Error fetching room data:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between p-4 bg-white rounded-full shadow-md space-x-2 w-full max-w-5xl"
    >
      {/* Location Input */}
      <BookingLocation
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locations={locations}
      />

      {/* Date Input */}
      <BookingTime />

      {/* Guest Count Input */}
      <CustomerQuantity />

      {/* Search Button */}
      <button
        type="submit"
        className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
