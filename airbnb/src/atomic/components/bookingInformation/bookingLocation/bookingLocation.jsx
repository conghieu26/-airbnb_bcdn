import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function BookingLocation({ searchTerm, setSearchTerm, locations }) {
  return (
    <div className="flex items-center border-2 border-yellow-500 rounded-lg p-2 bg-white shadow-sm">
      <FontAwesomeIcon icon={faBed} className="text-gray-500 mr-2" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        list="location-options"
        placeholder="Where are you going?"
        className="bg-white focus:outline-none w-full"
      />
      <datalist id="location-options">
        {locations.map((location) => (
          <option key={location.id} value={location.tenViTri} />
        ))}
      </datalist>
    </div>
  );
}

export default BookingLocation;
