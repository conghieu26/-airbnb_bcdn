import React from 'react';
import { Card, Row, Col } from 'antd';

const data = [
  {
    title: 'Toàn bộ nhà',
    image: 'https://xaydungthanhthinh.com/wp-content/uploads/2020/03/33-mau-thiet-ke-nha-phong-cach-chau-au-dep-an-tuong-8.jpg',
  },
  {
    title: 'Chỗ ở độc đáo',
    image: 'https://sohanews.sohacdn.com/thumb_w/1000/160588918557773824/2023/1/26/photo-10-16747311884741546811676.jpeg',
  },
  {
    title: 'Trang trại và thiên nhiên',
    image: 'https://cdn.pixabay.com/photo/2024/01/11/09/50/village-8501168_1280.jpg',
  },
  {
    title: 'Cho phép mang theo thú cưng',
    image: 'https://dulichhangkhong.com.vn/ve-may-bay/vnt_upload/news/10_2022/cho-thu-cung-di-may-bay.jpg',
  },
];

export function PropertyGrid() {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-6">Ở bất cứ nơi đâu</h2>
      <Row gutter={[16, 16]}>
        {data.map((item, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.image} className="h-72 w-full object-cover rounded-lg" />}
              bordered={false}
              className="shadow-lg"
            >
              <Card.Meta title={item.title} className="text-center font-medium" />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
