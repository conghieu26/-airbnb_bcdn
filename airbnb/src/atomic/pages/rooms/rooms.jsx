import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/index";
import Header from "../../components/header/index";
import RoomFilters from "./roomFilters/index";
function Rooms() {
  const location = useLocation();
  const {
    rooms: initialRooms,
    searchTerm,
    checkInDate,
    checkOutDate,
    guestCount,
  } = location.state || {};
  const [rooms, setRooms] = useState(initialRooms);
  const navigate = useNavigate();

  const handleRoomClick = (roomId) => {
    navigate(`/roomdetails?roomId=${roomId}`);
  };

  const handleFilterChange = (filteredRooms) => {
    setRooms(filteredRooms);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header color="bg-white" />
      <div className="border-b"></div>
      <div className="flex">
        {/* Phần danh sách phòng ở bên trái */}
        <div className="w-2/3 p-4">
          <h1 className="text-4xl font-bold mb-4 text-left">
            Chỗ ở tại khu vực đã chọn
          </h1>

          {/* Các bộ lọc */}
          <RoomFilters
            rooms={initialRooms}
            onFilterChange={handleFilterChange}
          />

          {/* Thẻ phòng */}
          <div className="space-y-4">
            {rooms?.map((room) => (
              <div
                key={room.id}
                className="border p-4 rounded-lg flex gap-4 cursor-pointer"
                onClick={() => handleRoomClick(room.id)}
              >
                <img
                  src={room.hinhAnh}
                  alt={room.tenPhong}
                  className="w-1/3 rounded-lg"
                />
                <div className="flex flex-col justify-between w-2/3">
                  <div>
                    <h2 className="text-2xl font-semibold">{room.tenPhong}</h2>
                    <p>
                      {room.khach} khách · {room.phongNgu} phòng ngủ ·{" "}
                      {room.phongTam} phòng tắm
                    </p>
                    <p>
                      {room.wifi && "Wifi"} {room.bep && "· Bếp"}{" "}
                      {room.dieuHoa && "· Điều hòa"}{" "}
                      {room.mayGiat && "· Máy giặt"} {room.doXe && "· Đỗ xe"}{" "}
                      {room.hoBoi && "· Hồ bơi"} {room.banUi && "· Bàn ủi"}{" "}
                      {room.tivi && "· Tivi"}
                    </p>
                  </div>
                  <div className="text-right text-lg font-bold">
                    ${room.giaTien}/ đêm
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phần bản đồ ở bên phải */}
        <div className="w-1/2 p-4">
          <div className="relative">
            <img
              src="img/Untitled.png"
              alt="Bản đồ"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Rooms;
