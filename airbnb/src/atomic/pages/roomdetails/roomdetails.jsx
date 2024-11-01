import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function RoomDetails() {
  const [room, setRoom] = useState(null);
  const [guests, setGuests] = useState(1); // State for guest selection
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("roomId");

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(
          `https://airbnbnew.cybersoft.edu.vn/api/phong-thue/${roomId}`,
          {
            headers: {
              TokenCybersoft:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg",
            },
          },
        );
        setRoom(response.data.content); // Set room data into state
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };

    if (roomId) {
      fetchRoomDetails();
    }
  }, [roomId]);

  if (!room) return <p>Loading...</p>; // Display loading message while data is being fetched

  return (
    <div className="p-4 bg-white max-w-screen-xl mx-auto">
      {/* Image on top in full width */}
      <div className="w-full mb-6">
        <h1 className="text-4xl font-bold mb-4">{room.tenPhong}</h1>
        <img
          src={room.hinhAnh}
          alt={room.tenPhong}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Information and booking in one row */}
      <div className="flex gap-8">
        {/* Left side for room details */}
        <div className="w-2/3">
          <h2 className="text-3xl font-bold mb-4">Thông Tin Phòng</h2>

          <p>
            Guests:
            {room.khach} guests
          </p>
          <p>
            Bedrooms:
            {room.phongNgu}
          </p>
          <p>
            Beds:
            {room.giuong}
          </p>
          <p>
            Bathrooms:
            {room.phongTam}
          </p>
          <br />
          <h2 className="text-3xl font-bold mb-4">Mô Tả Phòng</h2>
          <p className="text-2xl mb-4">{room.moTa}</p>
          <br />

          {/* Amenities section */}
          <h2 className="text-3xl font-bold mb-4">Tiện Nghi</h2>
          <p className="mt-4">
            {room.wifi && "Wifi · "}
            {room.bep && "Kitchen · "}
            {room.dieuHoa && "Air conditioning · "}
            {room.mayGiat && "Washer · "}
            {room.doXe && "Parking · "}
            {room.hoBoi && "Pool · "}
            {room.banUi && "Iron · "}
            {room.tivi && "TV"}
          </p>
        </div>

        {/* Right side for booking info */}
        <div className="w-1/3 bg-gray-100 p-4 rounded-lg shadow-lg text-2xl">
          <p className="text-2xl font-bold mb-4">${room.giaTien}/night</p>
          <p className="text-2xl mb-4">4.83 (18 reviews)</p>

          {/* Guests dropdown */}
          <div className="mb-4">
            <label
              htmlFor="guests"
              className="block text-2xl font-semibold mb-2"
            >
              Guests
            </label>
            <select
              id="guests"
              className="w-full p-2 border border-gray-300 rounded text-2xl"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              {[...Array(room.khach)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} guest(s)
                </option>
              ))}
            </select>
          </div>

          {/* Price breakdown */}
          <div className="mb-4 text-2xl">
            <p className="text-2xl">${room.giaTien} x 5 nights</p>
            <p className="text-2xl">Service fee: $31</p>
            <p className="font-bold text-2xl">
              Total: ${room.giaTien * 5 + 31}
            </p>
          </div>

          {/* Book button */}
          <button className="mt-4 px-6 py-3 w-full bg-pink-500 text-white font-bold rounded-full">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}
