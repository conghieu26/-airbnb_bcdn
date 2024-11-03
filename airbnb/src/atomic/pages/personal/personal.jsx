import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function PersonalPage() {
  const [userData, setUserData] = useState(null);
  const [userBookings, setUserBookings] = useState([]); // Array to store multiple bookings
  const [loading, setLoading] = useState(true);

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
      .get("https://airbnbnew.cybersoft.edu.vn/api/phong-thue", {
        headers: { TokenCybersoft: token },
      })
      .then((response) => {
        console.log("Bookings API response:", response.data); // Log the response
        setUserBookings(response.data.content); // Set bookings array
      })
      .catch((error) => {
        console.error("Error fetching user bookings:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      {/* Profile Section */}
      <div className="max-w-screen-lg lg:w-1/3 bg-white shadow-md p-6 rounded-lg">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <img
              src={userData?.avatar || "https://via.placeholder.com/150"} // Fallback image
              alt="User Avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <button className="text-blue-500 hover:underline mt-2">Cập nhật ảnh</button>
          <br />
          <br />
          <p className="text-left">Xác minh danh tính</p>
          <p className="text-left">Xác thực danh tính của bạn với huy hiệu xác minh danh tính</p>
          <p className="text-left">Bắt đầu tham gia vào {userData?.joinDate || "2021"}</p>
          <br />
          <a href="/edit-profile" className="text-blue-500 hover:underline mt-2">Chỉnh sửa hồ sơ</a>
        </div>
        <div className="mt-6 text-center">
          <h3 className="font-semibold text-2xl">Xin chào, tôi là {userData?.name}</h3>
        </div>
      </div>

      {/* Bookings Section */}
      <div className="w-full ">
        <h2 className="text-4xl font-bold mb-6">Phòng đã thuê</h2>
        <div className="grid grid-cols-1 gap-6">
          {userBookings.length > 0 ? (
            userBookings. slice(0, 3).map((booking) => (
              <div key={booking.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row">
                {/* Room Image */}
                <img
                  src={booking.hinhAnh || "https://via.placeholder.com/150"}
                  alt="Room"
                  className="w-full md:w-1/3 rounded-lg object-cover"
                />

                {/* Room Details */}
                <div className="flex-1 p-4">
                  <h3 className="font-semibold text-3xl">{booking.tenPhong || "Room Name"}</h3>
                  <p className="text-gray-500 text-2xl">{booking.moTa || "Description of the room goes here."}</p>
                  <p className="text-gray-600 text-2xl">
                    {booking.khach} khách - {booking.phongNgu} phòng ngủ - {booking.giuong} giường - {booking.phongTam} phòng tắm
                  </p>
                  <p className="text-gray-600 text-2xl">
                    {booking.wifi && "Wifi"} - {booking.bep && "Bếp"} - {booking.dieuHoa && "Điều hòa nhiệt độ"} - {booking.mayGiat && "Máy giặt"}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-center justify-end md:w-1/4 p-4">
                  <p className="text-lg font-semibold">${booking.giaTien} / tháng</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No bookings available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
