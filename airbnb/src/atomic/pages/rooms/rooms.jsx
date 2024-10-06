import React from "react";
import Footer from "../../components/footer/index";
import Header from "./header/index";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [searchParams] = useSearchParams();
  const maViTri = searchParams.get("maViTri");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          `https://airbnbnew.cybersoft.edu.vn/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${maViTri}`,
          {
            headers: {
              TokenCybersoft:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg",
            },
          },
        );
        setRooms(response.data.content); // Cập nhật danh sách phòng từ API
      } catch (error) {
        console.error("Lỗi khi gọi API", error);
      }
    };

    if (maViTri) {
      fetchRooms();
    }
  }, [maViTri]);
  const handleRoomClick = (roomId) => {
    navigate(`/roomdetails?roomId=${roomId}`); // Điều hướng tới trang chi tiết của phòng
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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
            {rooms.map((room) => (
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
              src="img/Untitled.png" // Đường dẫn tới bản đồ
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
