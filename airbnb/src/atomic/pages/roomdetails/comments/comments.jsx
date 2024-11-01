import React from "react";

function Comments() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {comments.map((comment, index) => (
          <div key={index} className="flex space-x-4">
            <img
              src={comment.image}
              alt={`Avatar of ${comment.name}`}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-bold">{comment.name}</div>
              <div className="text-sm text-gray-500">{comment.date}</div>
              <div className="mt-2">{comment.text}</div>
              {comment.name === "Duy" && (
                <a href="#" className="text-blue-500">
                  Hiển thị thêm
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <img
          src="https://placehold.co/50x50?text=Avatar&bg=cccccc"
          alt="Avatar of commenter"
          className="w-12 h-12 rounded-full"
        />
        <textarea
          className="flex-1 border rounded p-2"
          rows="3"
          placeholder="Add a comment"
        ></textarea>
      </div>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Add Comment
      </button>
    </div>
  );
}

export default Comments;
