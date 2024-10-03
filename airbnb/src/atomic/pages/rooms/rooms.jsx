import React from "react";
import Footer from "../../components/footer/index";
import Header from "./header/index";

function Rooms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="border-b"></div>
      <main className="flex flex-1">
        <div className="w-1/2 p-4">
          <h1 className="text-2xl font-bold mb-4">
            Chỗ ở tại khu vực bản đồ đã chọn
          </h1>
          <div className="flex mb-4">
            <button className="border p-2 rounded mr-2">Loại nơi ở</button>
            <button className="border p-2 rounded mr-2">Giá</button>
            <button className="border p-2 rounded mr-2">
              Phòng và phòng ngủ
            </button>
            <button className="border p-2 rounded">Bộ lọc khác</button>
          </div>
          <div className="mb-4">
            <div className="flex mb-4">
              <img
                src="https://placehold.co/150x100"
                alt="Room Image 1"
                className="w-1/3 rounded"
              />
              <div className="ml-4">
                <h2 className="font-bold">
                  Romantic APT for Long-term Living@BEST L...
                </h2>
                <p>2 khách · Phòng studio · 1 giường · 1 phòng tắm</p>
                <p>WiFi · Bếp · Điều hòa nhiệt độ · Máy giặt</p>
                <p className="font-bold">$385 / tháng</p>
              </div>
            </div>
            <div className="flex mb-4">
              <img
                src="https://placehold.co/150x100"
                alt="Room Image 2"
                className="w-1/3 rounded"
              />
              <div className="ml-4">
                <h2 className="font-bold">
                  Landmark81's View, Full Natural Lights COZ...
                </h2>
                <p>2 khách · Phòng studio · 1 giường · 1 phòng tắm</p>
                <p>WiFi · Bếp · Điều hòa nhiệt độ · Máy giặt</p>
                <p className="font-bold">$396 / tháng</p>
              </div>
            </div>
            <div className="flex mb-4">
              <img
                src="https://placehold.co/150x100"
                alt="Room Image 3"
                className="w-1/3 rounded"
              />
              <div className="ml-4">
                <h2 className="font-bold">
                  Cho thuê phòng tại 32 đường 8A, P.An Phú,...
                </h2>
                <p>
                  2 khách · 1 phòng ngủ · 1 giường · 1 phòng tắm đầy đủ và 1
                  phòng...
                </p>
                <p>WiFi · Bếp · Điều hòa nhiệt độ · Máy giặt</p>
                <p className="font-bold">$396 / tháng</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <img
            src="https://placehold.co/600x800?text=Map"
            alt="Map"
            className="w-full h-full rounded"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Rooms;
