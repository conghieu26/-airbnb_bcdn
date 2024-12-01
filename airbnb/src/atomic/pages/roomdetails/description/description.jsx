import {
  faBroom,
  faCalendarDays,
  faHome,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Description({ tenPhong, khach, phongNgu, giuong, phongTam, moTa }) {
  return (
    <div className="mx-auto p-4">
      <div className="flex items-center mb-4">
        <div className="flex-grow">
          <h1 className="text-3xl font-bold">{tenPhong}</h1>
          <p className="text-gray-600 text-xl">
            <span>{khach} khách </span> · <span>{phongNgu} phòng ngủ </span> ·
            <span>{giuong} giường </span> · <span>{phongTam} phòng tắm</span>
          </p>
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src="https://placehold.co/48x48"
            alt="Profile picture of the host"
          />
        </div>
      </div>
      <div className="border-t border-b border-gray-300 pt-4">
        <div className="flex items-start mb-4">
          <div className="h-full">
            <FontAwesomeIcon
              icon={faHome}
              className="text-xl mr-2 pb-[1.5px]"
            />
          </div>
          <div>
            <h2 className="font-bold">Toàn bộ nhà</h2>
            <p className="text-gray-600">
              Bạn sẽ có chung cư cao cấp cho riêng mình.
            </p>
          </div>
        </div>
        <div className="flex items-start mb-4">
          <div className="h-full">
            <FontAwesomeIcon
              icon={faBroom}
              className="text-xl mr-2 pb-[1.5px]"
            />
          </div>
          <div>
            <h2 className="font-bold">Vệ sinh tăng cường</h2>
            <p className="text-gray-600">
              Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5
              bước của Airbnb.
            </p>
          </div>
        </div>
        <div className="flex items-start mb-4">
          <div className="h-full">
            <FontAwesomeIcon
              icon={faStar}
              className="text-xl mr-2 pb-[1.5px]"
            />
          </div>
          <div>
            <h2 className="font-bold">Phong là Chủ nhà siêu cấp</h2>
            <p className="text-gray-600">
              Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá
              cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời
              cho khách.
            </p>
          </div>
        </div>
        <div className="flex items-start mb-4">
          <div className="h-full">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="text-xl mr-2 pb-[1.5px]"
            />
          </div>
          <i className="fas fa-times-circle text-xl"></i>
          <div>
            <h2 className="font-bold">Miễn phí hủy trong 48 giờ</h2>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300">
        <h2>{moTa}</h2>
      </div>
    </div>
  );
}

export default Description;
