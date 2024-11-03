import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BookingTime from "../../../components/bookingInformation/bookingTime/bookingTime";
import CustomerQuantity from "../../../components/bookingInformation/customerQuantity/customerQuantity";

function Payment() {
  return (
    <div className="p-4 border rounded shadow relative">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          $44 <span className="text-sm text-gray-600">/ đêm</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <FontAwesomeIcon icon={faStar} className="pb-1 text-red-500" />
          <span className="ml-1 text-red-500">4.83</span>
          <span className="underline ml-1">(18 đánh giá)</span>
        </div>
      </div>
      <BookingTime />
      <CustomerQuantity />
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
      <div className="flex justify-between text-sm font-bold mb-4">
        <div>Tổng trước thuế</div>
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
