import React from "react";
import { Row, Col, Card } from "antd";

// Dữ liệu điểm đến
const destinations = [
  {
    name: "Thành phố Hồ Chí Minh",
    time: "15 phút lái xe",
    img: "https://ktmt.vnmediacdn.com/stores/news_dataimages/svtt/042020/30/12/in_article/1104_nha-tho-duc-ba-sai-gon-1.jpg",
  },
  {
    name: "Cần Thơ",
    time: "3 giờ lái xe",
    img: "https://dulichthuduc.com.vn/vnt_upload/news/MIEN-TAY/can-tho/ben_ninh_kieu_can_tho_du_lich_thu_duc_2.jpg",
  },
  {
    name: "Nha Trang",
    time: "6.5 giờ lái xe",
    img: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/nhin-tu-tren-cao-thap-tram-huong-vntrip-e1502441210772.jpg",
  },
  {
    name: "Thành phố Tuy Hòa",
    time: "7.5 giờ lái xe",
    img: "https://i.ex-cdn.com/nhadautu.vn/files/content/2023/11/18/nghinh-phong-2-0915.jpg",
  },
  {
    name: "Thành phố Biên Hòa",
    time: "45 phút lái xe",
    img: "https://bienhoa.dongnai.gov.vn/TinTucHinhAnh/Hinh2023/2711-da%20dang%20cac%20hoat%20dong%20325%20nam-5.jpg",
  },
  {
    name: "Thị xã Thuận An",
    time: "30 phút lái xe",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e9/H%C3%ACnh_%E1%BA%A3nh_%C4%91%C6%B0%E1%BB%9Dng_ph%E1%BB%91_Thu%E1%BA%ADn_An.jpg",
  },
  {
    name: "Phú Quốc",
    time: "5 giờ lái xe",
    img: "https://mgvs.vn/wp-content/uploads/2022/02/thi-tran-dia-trung-hai-du-lich-phu-quoc-1024x683.jpg",
  },
  {
    name: "Phan Rang - Tháp Chàm",
    time: "5 giờ lái xe",
    img: "https://ticotravel.com.vn/wp-content/uploads/2022/06/kham-pha-thap-cham-ninh-thuan-1.2.jpg",
  },
];

const destinationCardStyle = {
//   marginBottom: "20px",
};

const cardContentStyle = {
  display: "flex",
  alignItems: "center", // Căn giữa theo chiều dọc
  textAlign: "left", // Đảm bảo căn lề trái cho phần nội dung
};

const imgStyle = {
  height: "100px",
  width: "100px",
  objectFit: "cover",
  marginRight: "20px", // Tạo khoảng cách giữa ảnh và nội dung
};

export function Destinations() {
  return (
    <div style={{ padding: "10px 10px", textAlign: "center" }}>
      <h2>Khám phá những điểm đến gần đây</h2>
      <Row gutter={[16, 16]} justify="center">
        {destinations.map((destination, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card hoverable style={destinationCardStyle}>
              <div style={cardContentStyle}>
                <img alt={destination.name} src={destination.img} style={imgStyle} />
                <div>
                  <Card.Meta title={destination.name} description={destination.time} />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
