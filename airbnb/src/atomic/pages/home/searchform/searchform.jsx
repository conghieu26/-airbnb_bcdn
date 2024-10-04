import React, { useEffect, useState } from "react";
import { Select, Form, Button, DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import moment from "moment";

const { Option } = Select;
const { RangePicker } = DatePicker;

export function SearchForm() {
  const [form] = Form.useForm();
  const [destinations, setDestinations] = useState([]);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get(
        "https://airbnbnew.cybersoft.edu.vn/api/vi-tri",
        {
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg",
          },
        },
      );
      setDestinations(response.data.content);
    } catch (error) {
      console.error("Failed to fetch destinations:", error);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const onSearch = (values) => {
    console.log("Search values:", values);
  };

  return (
    <div className="w-full">
 <Form
      form={form}
      layout="inline"
      onFinish={onSearch}
      className="bg-white bg-opacity-70 p-4 rounded-full shadow-lg flex justify-between items-center w-full max-w-7xl mx-auto"
    >
      {/* Destination Field */}
      <Form.Item name="destination" className="mr-4">
        <Select
          placeholder="Bạn sắp đi đâu?"
          className="max-w-64 rounded-full px-4 py-2 text-lg border-none focus:outline-none"
          showSearch
        >
          {destinations.map((destination) => (
            <Option key={destination.id} value={destination.id}>
              {destination.tenViTri}, {destination.tinhThanh},{" "}
              {destination.quocGia}
            </Option>
          ))}
        </Select>
      </Form.Item>

      {/* Date Range Picker */}
      <Form.Item name="dates" className="mr-4">
        <RangePicker
          placeholder={["Nhận phòng", "Trả phòng"]}
          className="w-72 rounded-full px-4 py-2 text-lg"
          disabledDate={(current) =>
            current && current < moment().startOf("day")
          }
        />
      </Form.Item>

      {/* Guest Selector */}
      <Form.Item name="guests" className="mr-4">
        <Select
          placeholder="Thêm khách"
          className="w-36 rounded-full px-4 py-2 text-lg h-12"
        >
          <Option value="1">1 Khách</Option>
          <Option value="2">2 Khách</Option>
          <Option value="3">3 Khách</Option>
          <Option value="4">4 Khách</Option>
        </Select>
      </Form.Item>

      {/* Search Button */}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          icon={<SearchOutlined />}
          className="bg-pink-500 text-white w-12 h-12 rounded-full flex justify-center items-center"
        />
      </Form.Item>
    </Form>
    </div>
   
  );
}
