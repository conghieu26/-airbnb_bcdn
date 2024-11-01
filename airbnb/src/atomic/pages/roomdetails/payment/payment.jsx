import React from "react";

function Payment() {
  return (
    <div className="max-w-[30rem] mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-semibold">
          $44 <span className="text-sm font-normal">/ đêm</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <i className="fas fa-star text-red-500 mr-1"></i>
          4,83 <span className="underline ml-1">(18 đánh giá)</span>
        </div>
      </div>
      <div className="border rounded-lg p-2 mb-4">
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <div className="text-xs text-gray-500">NHẬN PHÒNG</div>
            <div>8/7/2021</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">TRẢ PHÒNG</div>
            <div>13/7/2021</div>
          </div>
        </div>
        <div className="border-t pt-2">
          <div className="text-xs text-gray-500">KHÁCH</div>
          <div className="flex justify-between items-center">
            <div>3 khách</div>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <button className="w-full bg-red-500 text-white py-2 rounded-lg mb-4">
        Đặt phòng
      </button>
      <div className="text-center text-sm text-gray-500 mb-4">
        Bạn vẫn chưa bị trừ tiền
      </div>
      <div className="flex justify-between text-sm mb-2">
        <div>$44 x 5 đêm</div>
        <div>$221</div>
      </div>
      <div className="flex justify-between text-sm mb-2">
        <div>Phí dịch vụ</div>
        <div>$31</div>
      </div>
      <div className="border-t pt-2 flex justify-between text-sm font-semibold">
        <div>Tổng</div>
        <div>$252</div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-4">
        <i className="fas fa-flag mr-1"></i>
        Báo cáo nhà/phòng cho thuê này
      </div>
    </div>
  );
}

export default Payment;
