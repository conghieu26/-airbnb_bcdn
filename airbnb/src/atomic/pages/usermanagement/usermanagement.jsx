import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function UserManagement() {
  const [allUsers, setAllUsers] = useState([]); // Lưu trữ toàn bộ dữ liệu users
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const usersPerPage = 20;
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg";

  useEffect(() => {
    // Fetch all users data once
    axios
      .get("https://airbnbnew.cybersoft.edu.vn/api/users", {
        headers: { TokenCybersoft: token },
      })
      .then((response) => {
        setAllUsers(response.data.content); // Lưu toàn bộ danh sách người dùng
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Tính toán số trang dựa trên số lượng người dùng
  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  // Lấy danh sách người dùng cho trang hiện tại
  const currentUsers = allUsers.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white p-4 shadow-lg">
        <h2 className="text-4xl font-semibold mb-6">Dashboard</h2>
        <ul className="space-y-4 text-blue-600">
          <li><a href="#" className="hover:underline">Quản lý người dùng</a></li>
          <li><a href="#" className="hover:underline">Quản lý thông tin vị trí</a></li>
          <li><a href="#" className="hover:underline">Quản lý thông tin phòng</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="justify-between items-left mb-6">
          <h1 className="text-4xl font-bold">Quản lý người dùng</h1>
        </header>
        
        <div className="flex space-x-24">
          <input
            type="text"
            placeholder="Nhập vào tài khoản hoặc tên người dùng"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full text-2xl"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Tìm</button>
        </div>

        <section>
          <br />
          <h2 className="text-2xl text-blue-600 mb-4 cursor-pointer">Thêm quản trị viên</h2>
          
          {/* User Table */}
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-4">ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Birthday</th>
                <th className="p-4">Gender</th>
                <th className="p-4">Role</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id} className="odd:bg-white even:bg-gray-100 border-b">
                  <td className="p-4">{user.id}</td>
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.birthday}</td>
                  <td className="p-4">{user.gender ? "Male" : "Female"}</td>
                  <td className="p-4">{user.role}</td>
                  <td className="p-4 space-x-2">
                    <button className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600">
                      Xem
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">Sửa</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600">X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-6 space-x-2 text-gray-600">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="hover:text-blue-600"
              disabled={currentPage === 1}
            >
              &lt; prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-lg ${page === currentPage ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="hover:text-blue-600"
              disabled={currentPage === totalPages}
            >
              next &gt;
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
