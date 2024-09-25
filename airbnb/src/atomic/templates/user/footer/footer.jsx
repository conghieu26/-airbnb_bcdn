import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-white mb-4">GIỚI THIỆU</h4>
          <ul className="space-y-2">
            <li>Phương thức hoạt động của Airbnb</li>
            <li>Trang tin tức</li>
            <li>Nhà đầu tư</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
            <li>HotelTonight</li>
            <li>Airbnb for Work</li>
            <li>Nhờ có Host, mọi điều đều có thể</li>
            <li>Cơ hội nghề nghiệp</li>
            <li>Thư của nhà sáng lập</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">CỘNG ĐỒNG</h4>
          <ul className="space-y-2">
            <li>Sự đa dạng và Cảm giác thân thuộc</li>
            <li>Tiện nghi phù hợp cho người khuyết tật</li>
            <li>Đối tác liên kết Airbnb</li>
            <li>Chỗ ở cho tuyến đầu</li>
            <li>Lượt giới thiệu của khách</li>
            <li>Airbnb.org</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">ĐÓN TIẾP KHÁCH</h4>
          <ul className="space-y-2">
            <li>Cho thuê nhà</li>
            <li>Tổ chức Trải nghiệm trực tuyến</li>
            <li>Tổ chức trải nghiệm</li>
            <li>Đón tiếp khách có trách nhiệm</li>
            <li>Trung tâm tài nguyên</li>
            <li>Trung tâm cộng đồng</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4">HỖ TRỢ</h4>
          <ul className="space-y-2">
            <li>Biện pháp ứng phó với đại dịch COVID-19</li>
            <li>Trung tâm trợ giúp</li>
            <li>Các tuỳ chọn huỷ</li>
            <li>Hỗ trợ khu dân cư</li>
            <li>Tin cậy và an toàn</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 flex justify-between items-center">
        <p className="text-sm text-gray-500">
          © 2021 Airbnb, Inc. All rights reserved · Quyền riêng tư · Điều khoản
          · Sơ đồ trang web
        </p>
        <div className="flex space-x-4">
          <span className="flex items-center space-x-1">
            <button className="hover:text-white transition duration-300">
              🌐
            </button>
            <span>Tiếng Việt (VN)</span>
          </span>
          <span className="flex items-center space-x-1">
            <button className="hover:text-white transition duration-300">
              💲
            </button>
            <span>USD</span>
          </span>
          <span className="flex space-x-2">
            <button className="hover:text-white transition duration-300">
              🔗
            </button>
            <button className="hover:text-white transition duration-300">
              🐦
            </button>
            <button className="hover:text-white transition duration-300">
              📷
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
