import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function PersonalPage() {
  const [userData, setUserData] = useState(null);
  const [userBookings, setUserBookings] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state

  // Replace this token with your TokenCybersoft
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg";

  useEffect(() => {
    // Fetch user data
    axios
      .get("https://airbnbnew.cybersoft.edu.vn/api/users/1", {
        headers: { TokenCybersoft: token },
      })
      .then((response) => {
        setUserData(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // Fetch user's bookings
    axios
      .get("https://airbnbnew.cybersoft.edu.vn/api/dat-phong/lay-theo-nguoi-dung/1", {
        headers: { TokenCybersoft: token },
      })
      .then((response) => {
        setUserBookings(response.data.content);
      })
      .catch((error) => {
        console.error("Error fetching user bookings:", error);
      })
      .finally(() => {
        setLoading(false);  // Set loading to false after data is fetched
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      {/* Profile Section */}
      <div className="w-full lg:w-1/3 bg-white shadow-md p-6 rounded-lg">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <img
              src={userData.avatar || "https://via.placeholder.com/150"}  // Fallback image
              alt="User Avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <button className="text-blue-500 hover:underline mt-2">Cập nhật ảnh</button>
          <p>Bắt đầu tham gia vào {userData.joinDate || "2021"}</p>
          <a href="/edit-profile" className="text-blue-500 hover:underline mt-2">Chỉnh sửa hồ sơ</a>
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold">Xin chào, tôi là {userData.name}</h3>
        </div>
      </div>

      {/* Bookings Section */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-6">Phòng đã thuê</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {userBookings.map((booking) => (
            <div key={booking.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row">
              {/* Room Image */}
              <img
                src={booking.roomImage || "https://via.placeholder.com/150"}
                alt="Room"
                className="w-full md:w-1/3 rounded-lg object-cover"
              />

              {/* Room Details */}
              <div className="flex-1 p-4">
                <h3 className="font-semibold text-lg">{booking.roomName || "Room Name"}</h3>
                <p className="text-gray-500 text-sm">{booking.roomDescription || "Description of the room goes here."}</p>
                <p className="text-gray-600 text-sm">2 khách - Phòng studio - 1 giường - 1 phòng tắm</p>
                <p className="text-gray-600 text-sm">Wifi - Bếp - Điều hòa nhiệt độ - Máy giặt</p>
              </div>

              {/* Price */}
              <div className="flex items-center justify-end md:w-1/4 p-4">
                <p className="text-lg font-semibold">${booking.price} / tháng</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
