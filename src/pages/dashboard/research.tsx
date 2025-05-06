import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const BASE_URL = "https://backend-nrc.onrender.com/uploads/";

interface BlogPost {
  _id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image?: string;
  video?: string;
  pdf?: string;
}

const Research: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [newBlog, setNewBlog] = useState<Partial<BlogPost>>({});
  const [selectedFile, setSelectedFile] = useState<{
    image?: File;
    video?: File;
    pdf?: File;
  }>({});

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://backend-nrc.onrender.com/api/blogs");
        setBlogs(res.data.data);
      } catch (err) {
        setError("Failed to fetch blogs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://backend-nrc.onrender.com/api/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error("Failed to delete blog:", err);
    }
  };

  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setShowModal(true);
  };

  const handleSave = async () => {
    const formData = new FormData();
    if (editingBlog) {
      formData.append("title", editingBlog.title);
      formData.append("shortDescription", editingBlog.shortDescription);
      formData.append("longDescription", editingBlog.longDescription);
      if (selectedFile.image) formData.append("image", selectedFile.image);
      if (selectedFile.video) formData.append("video", selectedFile.video);
      if (selectedFile.pdf) formData.append("pdf", selectedFile.pdf);

      try {
        await axios.put(
          `https://backend-nrc.onrender.com/api/blogs/${editingBlog._id}`,
          formData
        );
        const updatedBlogs = blogs.map((blog) =>
          blog._id === editingBlog._id ? { ...blog, ...editingBlog } : blog
        );
        setBlogs(updatedBlogs);
        setShowModal(false);
        setEditingBlog(null);
        setSelectedFile({});
      } catch (err) {
        console.error("Failed to update blog:", err);
      }
    } else {
      formData.append("title", newBlog.title || "");
      formData.append("shortDescription", newBlog.shortDescription || "");
      formData.append("longDescription", newBlog.longDescription || "");
      if (selectedFile.image) formData.append("image", selectedFile.image);
      if (selectedFile.video) formData.append("video", selectedFile.video);
      if (selectedFile.pdf) formData.append("pdf", selectedFile.pdf);

      try {
        const res = await axios.post("https://backend-nrc.onrender.com/api/blogs", formData);
        setBlogs([...blogs, res.data]);
        setShowModal(false);
        setNewBlog({});
        setSelectedFile({});
      } catch (err) {
        console.error("Failed to create blog:", err);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setSelectedFile((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Research</h2>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
        onClick={() => {
          setNewBlog({});
          setEditingBlog(null);
          setShowModal(true);
        }}
      >
        + New
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
              <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Doc</th>
            <th className="border border-gray-300 px-4 py-2">LongDescription</th>
            <th className="border border-gray-300 px-4 py-2">Short Desc</th>
            <th className="border border-gray-300 px-4 py-2">Photo</th>
            <th className="border border-gray-300 px-4 py-2">Video</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td className="border border-gray-300 px-4 py-2">{blog._id}</td>
              <td className="border border-gray-300 px-4 py-2">{blog.title}</td>
              <td className="border border-gray-300 px-4 py-2">
                {blog.pdf ? <a href={BASE_URL + blog.pdf}>View PDF</a> : "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {blog.longDescription}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {blog.shortDescription}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {blog.image ? (
                  <img
                    src={BASE_URL + blog.image}
                    alt="Blog"
                    className="w-16 h-16 object-cover"
                  />
                ) : (
                  "N/A"
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {blog.video ? <a href={BASE_URL + blog.video}>View Video</a> : "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => handleEdit(blog)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(blog._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {/* Modal */}
      {showModal && (
  <div className="fixed inset-0 bg-[#414868] bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded shadow-lg w-96">
      <h3 className="text-xl font-bold mb-4">
        {editingBlog ? "Edit Blog" : "Add New Blog"}
      </h3>
      <form>
        {/* Title */}
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={editingBlog?.title || newBlog.title || ""}
          onChange={(e) =>
            editingBlog
              ? setEditingBlog({ ...editingBlog, title: e.target.value })
              : setNewBlog({ ...newBlog, title: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
        />

        {/* Short Description */}
        <label htmlFor="shortDescription" className="block text-sm font-medium mb-1">
          Short Description
        </label>
        <textarea
          id="shortDescription"
          placeholder="Short Description"
          value={
            editingBlog?.shortDescription || newBlog.shortDescription || ""
          }
          onChange={(e) =>
            editingBlog
              ? setEditingBlog({
                  ...editingBlog,
                  shortDescription: e.target.value,
                })
              : setNewBlog({ ...newBlog, shortDescription: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
        />

        {/* Long Description */}
        <label htmlFor="longDescription" className="block text-sm font-medium mb-1">
          Long Description
        </label>
        <textarea
          id="longDescription"
          placeholder="Long Description"
          value={
            editingBlog?.longDescription || newBlog.longDescription || ""
          }
          onChange={(e) =>
            editingBlog
              ? setEditingBlog({
                  ...editingBlog,
                  longDescription: e.target.value,
                })
              : setNewBlog({ ...newBlog, longDescription: e.target.value })
          }
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
        />

        {/* Image */}
        <label htmlFor="image" className="block text-sm font-medium mb-1">
          Image
        </label>
        <input
          id="image"
          type="file"
          name="image"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
        />

        {/* Video */}
        <label htmlFor="video" className="block text-sm font-medium mb-1">
          Video
        </label>
        <input
          id="video"
          type="file"
          name="video"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
        />

        {/* PDF */}
        <label htmlFor="pdf" className="block text-sm font-medium mb-1">
          PDF
        </label>
        <input
          id="pdf"
          type="file"
          name="pdf"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
        />

        {/* Buttons */}
        <button
          type="button"
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="bg-gray-400 text-white px-4 py-2 rounded ml-2"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
)}
    </div>
  );
};

export default Research;