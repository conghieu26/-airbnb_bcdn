import React from "react";

export function RoomListPage() {
  return (
    <div className="flex">
      {/* Phần danh sách phòng ở bên trái */}
      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Chỗ ở tại khu vực bản đồ đã chọn</h1>
        
        {/* Các bộ lọc */}
        <div className="mb-4 flex gap-2">
          <button className="border px-4 py-2 rounded-full">Loại nơi ở</button>
          <button className="border px-4 py-2 rounded-full">Giá</button>
          <button className="border px-4 py-2 rounded-full">Đặt ngay</button>
          <button className="border px-4 py-2 rounded-full">Phòng và phòng ngủ</button>
          <button className="border px-4 py-2 rounded-full">Bộ lọc khác</button>
        </div>

        {/* Thẻ phòng */}
        <div className="space-y-4">
          {/* Thẻ phòng đầu tiên */}
          <div className="border p-4 rounded-lg flex gap-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Phòng 1"
              className="w-1/3 rounded-lg"
            />
            <div className="flex flex-col justify-between w-2/3">
              <div>
                <h2 className="text-lg font-semibold">Romantic APT for Long-term Living</h2>
                <p>Toàn bộ căn hộ dịch vụ tại Bình Thạnh</p>
                <p>2 khách · Phòng studio · 1 giường · 1 phòng tắm</p>
                <p>Wifi · Bếp · Điều hòa nhiệt độ · Máy giặt</p>
              </div>
              <div className="text-right text-lg font-bold">$385 / tháng</div>
            </div>
          </div>

          {/* Thẻ phòng thứ hai */}
          <div className="border p-4 rounded-lg flex gap-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Phòng 2"
              className="w-1/3 rounded-lg"
            />
            <div className="flex flex-col justify-between w-2/3">
              <div>
                <h2 className="text-lg font-semibold">Landmark81's View_Full Natural Lights COZ</h2>
                <p>Toàn bộ căn hộ dịch vụ tại Bình Thạnh</p>
                <p>2 khách · Phòng studio · 1 giường · 1 phòng tắm</p>
                <p>Wifi · Bếp · Điều hòa nhiệt độ · Máy giặt</p>
              </div>
              <div className="text-right text-lg font-bold">$396 / tháng</div>
            </div>
          </div>

          {/* Thêm nhiều thẻ phòng khác ở đây */}
        </div>
      </div>

      {/* Phần bản đồ ở bên phải */}
      <div className="w-1/2 p-4">
        <div className="relative">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Bản đồ"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Các icon hiển thị giá phòng trên bản đồ */}
          <div className="absolute top-10 left-10 bg-white p-2 rounded-lg shadow-lg">$248</div>
          <div className="absolute top-20 left-40 bg-white p-2 rounded-lg shadow-lg">$385</div>
          <div className="absolute top-40 left-80 bg-white p-2 rounded-lg shadow-lg">$531</div>
          {/* Thêm các giá phòng khác */}
        </div>
      </div>
    </div>
  );
}
