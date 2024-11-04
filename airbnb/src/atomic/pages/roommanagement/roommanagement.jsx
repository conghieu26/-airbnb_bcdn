import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function RoomManagement() {
  const [allRooms, setAllRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const roomsPerPage = 10; // Display 10 rooms per page
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg";

  useEffect(() => {
    // Fetch all rooms data once
    axios
      .get("https://airbnbnew.cybersoft.edu.vn/api/phong-thue", {
        headers: { TokenCybersoft: token },
      })
      .then((response) => {
        setAllRooms(response.data.content); // Store all rooms data
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Calculate total pages based on number of rooms
  const totalPages = Math.ceil(allRooms.length / roomsPerPage);

  // Get rooms for the current page
  const currentRooms = allRooms.slice((currentPage - 1) * roomsPerPage, currentPage * roomsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://airbnbnew.cybersoft.edu.vn/api/phong-thue?id=${id}`, {
        headers: { TokenCybersoft: token },
      })
      .then(() => {
        setAllRooms(allRooms.filter((room) => room.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting room:", error);
      });
  };

  const handleEdit = (id) => {
    // Navigate to edit page or open edit modal
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
          <li><a href="#" className="hover:underline">Quản lý đặt phòng</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="justify-between items-left mb-6">
          <h1 className="text-4xl font-bold">Quản lý thông tin phòng</h1>
        </header>

        <div className="flex space-x-24">
          <input
            type="text"
            placeholder="Nhập vào tên phòng"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full text-2xl"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Tìm</button>
        </div>

        <section>
          <br />
          <h2 className="text-2xl text-blue-600 mb-4 cursor-pointer">Thêm phòng</h2>
          
          {/* Room Table */}
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-4">Mã Phòng</th>
                <th className="p-4">Tên Phòng</th>
                <th className="p-4">Hình Ảnh</th>
                <th className="p-4">Location</th>
                <th className="p-4">Guest Max</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRooms.map((room) => (
                <tr key={room.id} className="odd:bg-white even:bg-gray-100 border-b">
                  <td className="p-4">{room.id}</td>
                  <td className="p-4">{room.tenPhong}</td>
                  <td className="p-4"><img src={room.hinhAnh} alt="Room" className="w-16 h-16" /></td>
                  <td className="p-4">{room.location}</td>
                  <td className="p-4">{room.khach}</td>
                  <td className="p-4 space-x-2">
                    <button
                      className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600"
                      onClick={() => handleEdit(room.id)}
                    >
                      Sửa
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
                      onClick={() => handleDelete(room.id)}
                    >
                      X
                    </button>
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
