import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/index";
import Header from "../../components/header/index";
function Rooms() {
  const location = useLocation();
  const { rooms, searchTerm, checkInDate, checkOutDate, guestCount } =
    location.state || {};

  const handleRoomClick = (roomId) => {
    navigate(`/roomdetails?roomId=${roomId}`);
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
          <div className="mb-4 gap-6 flex">
            <button className="border px-4 py-2 rounded-full">
              Loại nơi ở
            </button>
            <button className="border px-6 py-2 rounded-full">Giá</button>
            <button className="border px-4 py-2 rounded-full">Đặt ngay</button>
            <button className="border px-4 py-2 rounded-full">
              Phòng và phòng ngủ
            </button>
            <button className="border px-4 py-2 rounded-full">
              Bộ lọc khác
            </button>
          </div>

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
