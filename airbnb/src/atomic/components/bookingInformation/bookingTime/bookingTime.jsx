import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function BookingTime() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);

  const handleDateChange = (dates) => {
    setDateRange(dates);
    if (dates[1]) {
      setShowCalendar(false);
    }
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  console.log(Calendar);

  return (
    <div className="relative mt-3 mb-3">
      <div
        className="flex items-center border-2 border-orange-400 rounded-lg p-2 px-4 cursor-pointer"
        onClick={toggleCalendar}
      >
        <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-600 mr-2" />
        <span className="font-medium text-gray-700">
          {dateRange[0] ? dateRange[0].toLocaleDateString() : "Check-in date"} —
          {dateRange[1] ? dateRange[1].toLocaleDateString() : "Check-out date"}
        </span>
      </div>

      {showCalendar && (
        <div className="absolute top-full mt-2 z-20 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-center text-blue-500 font-semibold">Calendar</h3>
          <Calendar
            selectRange={true}
            onChange={handleDateChange}
            value={dateRange}
            minDate={new Date()}
          />
        </div>
      )}
    </div>
  );
}

export default BookingTime;
