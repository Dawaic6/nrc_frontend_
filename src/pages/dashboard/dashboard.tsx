import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface NewsItem {
  id: number;
  title: string;
  status: string;
  longDesc: string;
  shortDesc: string;
  photoUrl: string;
}

const Dashboard: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([
    {
      id: 1,
      title: "Title",
      status: "news",
      longDesc: "long discription",
      shortDesc: "short",
      photoUrl: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      title: "Title",
      status: "news",
      longDesc: "long discription",
      shortDesc: "short",
      photoUrl: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      title: "Title",
      status: "news",
      longDesc: "long discription",
      shortDesc: "short",
      photoUrl: "https://via.placeholder.com/50",
    },
  ]);

  const handleEdit = (id: number) => {
    alert(`Edit clicked for ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      setNewsList(newsList.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Search Bar */}
      <div className="flex justify-center py-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-full px-4 py-2 w-1/2 shadow"
        />
      </div>

      {/* Stats */}
      <div className="flex gap-4 justify-center mt-4">
        <div className="flex flex-col items-center bg-white p-6 rounded shadow w-1/3">
          <span className="text-2xl font-bold">50</span>
          <span className="text-gray-700">Publication</span>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded shadow w-1/3">
          <span className="text-2xl font-bold">50</span>
          <span className="text-gray-700">research</span>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded shadow w-1/3">
          <span className="text-2xl font-bold">50</span>
          <span className="text-gray-700">Donation</span>
        </div>
      </div>

      {/* News Table */}
      <div className="overflow-x-auto mt-10 p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Latest News and Insights</h2>
        <table className="min-w-full border text-sm text-center">
          <thead>
            <tr className="bg-gray-100">
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>LongDescription</th>
              <th>Short Disc</th>
              <th>Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((item) => (
              <tr key={item.id} className="border-t">
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.status}</td>
                <td>{item.longDesc}</td>
                <td>{item.shortDesc}</td>
                <td>
                  <img
                    src={item.photoUrl}
                    alt="news"
                    className="w-12 h-12 object-cover mx-auto"
                  />
                </td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="text-blue-500"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
