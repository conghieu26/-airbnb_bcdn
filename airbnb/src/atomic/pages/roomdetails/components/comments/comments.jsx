// Comments.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export function Comments({ roomId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://airbnbnew.cybersoft.edu.vn/api/binh-luan/lay-binh-luan-theo-phong/${roomId}`,
          {
            headers: {
              TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczOTc1MDQwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM5ODk4MDAwfQ.qvs2zsWDKR2CRt273FQIadSYJzZM-hCro_nsLVpa-Wg",
            },
          }
        );
        setComments(response.data.content); // Set comments data
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    if (roomId) {
      fetchComments();
    }
  }, [roomId]);

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Bình luận</h2>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <div className="flex items-center mb-2">
              <img
                src={comment.avatar}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{comment.tenNguoiBinhLuan}</p>
                <p className="text-gray-950 text-sm">{comment.ngayBinhLuan}</p>
              </div>
            </div>
            <p>{comment.noiDung}</p>
          </div>
        ))
      ) : (
        <p>No comments available for this room.</p>
      )}
      {/* Comment input section */}
      <div className="mt-5 flex items-center">
        {/* <img
          src="/path/to/default-avatar.png" 
          alt="User avatar"
          className="w-10 h-10 rounded-full mr-4"
        /> */}
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Add a comment..."
          rows="2"
        />
      
      </div>
      <button className="mt-5 px-4 py-2 bg-blue-500 text-white font-semibold rounded text-2xl w-1/6 ">
          Add Comment
        </button>
    </div>
  );
}
