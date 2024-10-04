import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "antd";
import axios from "axios";

// Token cho API requests
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg';

export function Destinations() {
  const [destinations, setDestinations] = useState([]);

  // Lấy dữ liệu từ API
  const fetchDestinations = async () => {
    try {
      const response = await axios.get(
        'https://airbnbnew.cybersoft.edu.vn/api/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=8&keyword=',
        {
          headers: {
            TokenCybersoft: token,
          },
        }
      );
      // Cập nhật state với dữ liệu từ API
      setDestinations(response.data.content.data);
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu:', error);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  return (
    <div className="px-4 py-5 text-center">
      <h2 className="text-2xl font-semibold mb-8">Khám phá những điểm đến gần đây</h2>
      <Row gutter={[16, 16]} justify="center">
        {destinations.map((destination, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card hoverable className="mb-4">
              <div className="flex items-center text-left">
                <img
                  alt={destination.tenViTri}
                  src={destination.hinhAnh}
                  className="h-24 w-24 object-cover mr-4 rounded-lg"
                />
                <div>
                  <Card.Meta
                    title={<span className="font-medium">{destination.tenViTri}</span>}
                    description={
                      <span className="text-gray-500">
                        {destination.tinhThanh}, {destination.quocGia}
                      </span>
                    }
                  />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
