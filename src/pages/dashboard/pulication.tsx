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

const Publications: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>(
    Array(5).fill({
      id: 1,
      title: "title",
      status: "news",
      longDesc: "long discription",
      shortDesc: "short",
      photoUrl: "https://via.placeholder.com/40",
    })
  );

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
    <div className="min-h-screen bg-white px-6 py-4 space-y-6">
      {/* Top bar */}
      <div className="flex justify-between items-center">
        {/* Search */}
        <div className="w-1/3 mx-auto">
          <input
            type="text"
            placeholder="🔍"
            className="w-full px-4 py-1 rounded-full border border-gray-300 shadow-sm focus:outline-none"
          />
        </div>

        {/* Profile */}
        {/* <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/32"
            alt="profile"
            className="rounded-full w-8 h-8"
          />
          <span className="text-sm font-medium">angel ishimwe</span>
          <span>▼</span>
        </div> */}
      </div>

      {/* New button */}
      <div>
        <button className="bg-green-700 text-white font-bold px-6 py-2 text-lg rounded hover:bg-green-800">
          + New
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow rounded-xl border">
        <table className="min-w-full text-center border-collapse">
          <thead>
            <tr className="bg-gray-100 text-black font-semibold">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">LongDiscription</th>
              <th className="px-4 py-3">short Disc</th>
              <th className="px-4 py-3">Photo</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">01</td>
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2">{item.status}</td>
                <td className="px-4 py-2">{item.longDesc}</td>
                <td className="px-4 py-2">{item.shortDesc}</td>
                <td className="px-4 py-2">
                  <img
                    src={item.photoUrl}
                    alt="news"
                    className="w-10 h-10 object-cover mx-auto rounded"
                  />
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button onClick={() => handleEdit(item.id)} className="text-blue-600">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-600">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-center font-bold py-4 text-lg">News and Insights</p>
      </div>
    </div>
  );
};

export default Publications;
