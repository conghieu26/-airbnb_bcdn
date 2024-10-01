import React from 'react';
import { Input, DatePicker, Button, Form, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Option } = Select;

export function SearchForm() {
  const [form] = Form.useForm();

  const onSearch = (values) => {
    console.log('Search values:', values);
  };

  // Updated form style to remove any visible border
  const formStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Lighter background
    padding: "15px",
    borderRadius: "50px", // Fully rounded corners
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)", // Subtle shadow for depth
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1000px",
    margin: "0 auto", // Center form horizontally
    border: "none", // Ensure no border is applied
    outline: "none", // Remove any outline effect
  };

  const inputStyle = {
    width: "250px",
    border: "none", // Remove border
    borderRadius: "30px", // Rounded input field
    padding: "10px",
    fontSize: "16px",
    outline: "none", // Ensure no outline appears when input is focused
    marginRight: "15px",
  };

  const datePickerStyle = {
    width: "300px",
    borderRadius: "30px",
    padding: "10px",
    fontSize: "16px",
    marginRight: "15px",
  };

  const selectStyle = {
    width: "150px",
    borderRadius: "30px",
    padding: "10px",
    fontSize: "16px",
    marginRight: "15px",
    height: "50px",
  };

  const buttonStyle = {
    backgroundColor: "#e91e63", // Pink background color for search button
    borderRadius: "50%", // Circular button
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none", // Remove button border
    color: "#fff",
    fontSize: "20px", // Increase size of search icon
  };

  return (
    <Form form={form} layout="inline" onFinish={onSearch} style={formStyle}>
      {/* Destination Field */}
      <Form.Item name="destination" rules={[{ required: true, message: 'Please enter your destination!' }]}>
        <Input placeholder="Bạn sắp đi đâu?" style={inputStyle} />
      </Form.Item>

      {/* Date Range Picker */}
      <Form.Item name="dates" rules={[{ required: true, message: 'Please select dates!' }]}>
        <RangePicker
          placeholder={['Nhận phòng', 'Trả phòng']}
          style={datePickerStyle}
          disabledDate={(current) => current && current < moment().startOf('day')}
        />
      </Form.Item>

      {/* Guest Selector */}
      <Form.Item name="guests" rules={[{ required: true, message: 'Please select the number of guests!' }]}>
        <Select placeholder="Thêm khách" style={selectStyle}>
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
          style={buttonStyle}
        />
      </Form.Item>
    </Form>
  );
}
