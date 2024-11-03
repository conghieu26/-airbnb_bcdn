import React, { useState, useEffect } from "react";
import axios from "axios";

export function Booking({ roomId }) {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [isAvailable, setIsAvailable] = useState(null);

  useEffect(() => {
    const checkRoomAvailability = async () => {
      try {
        const response = await axios.get(`https://airbnbnew.cybersoft.edu.vn/api/dat-phong/${roomId}`, {
          headers: {
            TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg"
          }
        });
        const bookings = response.data;

        const isRoomFree = bookings.every((booking) => {
          const bookedCheckIn = new Date(booking.ngayDen);
          const bookedCheckOut = new Date(booking.ngayDi);
          const selectedCheckIn = new Date(checkInDate);
          const selectedCheckOut = new Date(checkOutDate);

          return (
            selectedCheckOut <= bookedCheckIn || selectedCheckIn >= bookedCheckOut
          );
        });

        setIsAvailable(isRoomFree);
      } catch (error) {
        console.error("Error checking room availability:", error);
      }
    };

    if (checkInDate && checkOutDate) {
      checkRoomAvailability();
    }
  }, [roomId, checkInDate, checkOutDate]);

  const handleBooking = async () => {
    if (!isAvailable) {
      alert("Room is not available for selected dates.");
      return;
    }

    try {
      await axios.post(
        "https://airbnbnew.cybersoft.edu.vn/api/dat-phong",
        {
          maPhong: roomId,
          soLuongKhach: guests,
          ngayDen: checkInDate,
          ngayDi: checkOutDate
        },
        {
          headers: {
            TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg"
          }
        }
      );
      alert("Room booked successfully!");
    } catch (error) {
      console.error("Error booking room:", error);
      alert("Failed to book room.");
    }
  };

  return (
    <div className="booking">
      <h3>Book Your Stay</h3>
      <div>
        <label>Check-in:</label>
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <div>
        <label>Check-out:</label>
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>
      <div>
        <label>Guests:</label>
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <button onClick={handleBooking}>Book Now</button>
      {isAvailable === false && (
        <p className="error">Room is not available for the selected dates.</p>
      )}
    </div>
  );
}
