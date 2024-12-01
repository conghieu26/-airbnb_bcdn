import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function CustomerQuantity() {
  const [showGuestPicker, setShowGuestPicker] = useState(false); // Toggle for guest picker UI
  const [guests, setGuests] = useState({ adults: 0, children: 0, rooms: 0 });
  const [pets, setPets] = useState(false); // Toggle for pets option

  const toggleGuestPicker = () => {
    setShowGuestPicker(!showGuestPicker);
  };

  const adjustGuests = (type, action) => {
    setGuests((prevGuests) => {
      const newCount =
        action === "increase" ? prevGuests[type] + 1 : prevGuests[type] - 1;
      return { ...prevGuests, [type]: Math.max(0, newCount) };
    });
  };
  return (
    <div className="relative mt-3 mb-3">
      <div
        className="flex items-center border-2 border-orange-400 rounded-lg p-2 px-4 cursor-pointer"
        onClick={toggleGuestPicker}
      >
        <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-2" />
        <span className="font-medium text-gray-700">
          {guests.adults} adults · {guests.children} children · {guests.rooms}{" "}
          room
        </span>
      </div>

      {showGuestPicker && (
        <div className="absolute top-full left-0 w-full mt-2 z-20 p-6 bg-white shadow-lg rounded-lg">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">Adults</span>
              <div className="flex items-center">
                <button
                  className="px-2 py-1 border border-gray-300 rounded-l focus:outline-none"
                  onClick={() => adjustGuests("adults", "decrease")}
                  disabled={guests.adults <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b border-gray-300">
                  {guests.adults}
                </span>
                <button
                  className="px-2 py-1 border border-gray-300 rounded-r focus:outline-none"
                  onClick={() => adjustGuests("adults", "increase")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">Children</span>
              <div className="flex items-center">
                <button
                  className="px-2 py-1 border border-gray-300 rounded-l focus:outline-none"
                  onClick={() => adjustGuests("children", "decrease")}
                  disabled={guests.children <= 0}
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b border-gray-300">
                  {guests.children}
                </span>
                <button
                  className="px-2 py-1 border border-gray-300 rounded-r focus:outline-none"
                  onClick={() => adjustGuests("children", "increase")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">Rooms</span>
              <div className="flex items-center">
                <button
                  className="px-2 py-1 border border-gray-300 rounded-l focus:outline-none"
                  onClick={() => adjustGuests("rooms", "decrease")}
                  disabled={guests.rooms <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b border-gray-300">
                  {guests.rooms}
                </span>
                <button
                  className="px-2 py-1 border border-gray-300 rounded-r focus:outline-none"
                  onClick={() => adjustGuests("rooms", "increase")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">
                Travelling with pets?
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={pets}
                  onChange={() => setPets(!pets)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <p className="text-sm text-gray-600">
              Assistance animals aren’t considered pets.
            </p>
            <a href="#" className="text-sm text-blue-600">
              Read more about travelling with assistance animals
            </a>
          </div>
          <button
            className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none"
            onClick={toggleGuestPicker}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}

export default CustomerQuantity;
