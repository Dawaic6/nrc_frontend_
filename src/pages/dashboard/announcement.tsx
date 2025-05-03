import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const BASE_URL = "http://localhost:8000/uploads/";

interface Announcement {
  _id: string;
  title: string;
  shortDescription?: string;
  image?: string;
  video?: string;
  pdf?: string;
  link?: string;
  category: "announcement" | "opportunities";
}

const AnnouncementsDashboard: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null);
  const [newAnnouncement, setNewAnnouncement] = useState<Partial<Announcement>>({});
  const [selectedFile, setSelectedFile] = useState<{
    image?: File;
    video?: File;
    pdf?: File;
  }>({});

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/announcements");
        setAnnouncements(res.data.data);
      } catch (err) {
        setError("Failed to fetch announcements.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnnouncements();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this announcement?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8000/api/announcements/${id}`);
        setAnnouncements(announcements.filter((announcement) => announcement._id !== id));
      } catch (err) {
        console.error("Failed to delete announcement:", err);
      }
    }
  };

  const handleEdit = (announcement: Announcement) => {
    setEditingAnnouncement(announcement);
    setShowModal(true);
  };

  const handleSave = async () => {
    const formData = new FormData();
    if (editingAnnouncement) {
      formData.append("title", editingAnnouncement.title);
      formData.append("category", editingAnnouncement.category);
      if (editingAnnouncement.shortDescription) {
        formData.append("shortDescription", editingAnnouncement.shortDescription);
      }
      if (editingAnnouncement.link) {
        formData.append("link", editingAnnouncement.link);
      }
      if (selectedFile.image) {
        formData.append("image", selectedFile.image);
      }
      if (selectedFile.video) {
        formData.append("video", selectedFile.video);
      }
      if (selectedFile.pdf) {
        formData.append("pdf", selectedFile.pdf);
      }

      try {
        await axios.put(
          `http://localhost:8000/api/announcements/${editingAnnouncement._id}`,
          formData
        );
        const updatedAnnouncements = announcements.map((announcement) =>
          announcement._id === editingAnnouncement._id
            ? { ...announcement, ...editingAnnouncement }
            : announcement
        );
        setAnnouncements(updatedAnnouncements);
        setShowModal(false);
        setEditingAnnouncement(null);
        setSelectedFile({});
      } catch (err) {
        console.error("Failed to update announcement:", err);
      }
    } else {
      formData.append("title", newAnnouncement.title || "");
      formData.append("category", newAnnouncement.category || "");
      if (newAnnouncement.shortDescription) {
        formData.append("shortDescription", newAnnouncement.shortDescription);
      }
      if (newAnnouncement.link) {
        formData.append("link", newAnnouncement.link);
      }
      if (selectedFile.image) {
        formData.append("image", selectedFile.image);
      }
      if (selectedFile.video) {
        formData.append("video", selectedFile.video);
      }
      if (selectedFile.pdf) {
        formData.append("pdf", selectedFile.pdf);
      }

      try {
        const res = await axios.post("http://localhost:8000/api/announcements", formData);
        setAnnouncements([...announcements, res.data]);
        setShowModal(false);
        setNewAnnouncement({});
        setSelectedFile({});
      } catch (err) {
        console.error("Failed to create announcement:", err);
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
      <h2 className="text-3xl font-bold text-center mb-6">Announcements</h2>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
        onClick={() => {
          setNewAnnouncement({});
          setEditingAnnouncement(null);
          setShowModal(true);
        }}
      >
        + New
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Short Description</th>
            <th className="border border-gray-300 px-4 py-2">Link</th>
            <th className="border border-gray-300 px-4 py-2">Photo</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((announcement) => (
            <tr key={announcement._id}>
              <td className="border border-gray-300 px-4 py-2">{announcement._id}</td>
              <td className="border border-gray-300 px-4 py-2">{announcement.title}</td>
              <td className="border border-gray-300 px-4 py-2">{announcement.category}</td>
              <td className="border border-gray-300 px-4 py-2">
                {announcement.shortDescription || "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {announcement.link ? <a href={announcement.link}>View Link</a> : "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {announcement.image ? (
                  <img
                    src={BASE_URL + announcement.image}
                    alt="Announcement"
                    className="w-16 h-16 object-cover"
                  />
                ) : (
                  "N/A"
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => handleEdit(announcement)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(announcement._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[#414868] bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">
              {editingAnnouncement ? "Edit Announcement" : "Add New Announcement"}
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
                value={editingAnnouncement?.title || newAnnouncement.title || ""}
                onChange={(e) =>
                  editingAnnouncement
                    ? setEditingAnnouncement({ ...editingAnnouncement, title: e.target.value })
                    : setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              />

              {/* Category */}
              <label htmlFor="category" className="block text-sm font-medium mb-1">
                Category
              </label>
              <select
                id="category"
                value={editingAnnouncement?.category || newAnnouncement.category || ""}
                onChange={(e) =>
                  editingAnnouncement
                    ? setEditingAnnouncement({ ...editingAnnouncement, category: e.target.value as "announcement" | "opportunities" })
                    : setNewAnnouncement({ ...newAnnouncement, category: e.target.value as "announcement" | "opportunities" })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              >
                <option value="">Select Category</option>
                <option value="announcement">Announcement</option>
                <option value="opportunities">Opportunities</option>
              </select>

              {/* Short Description */}
              <label htmlFor="shortDescription" className="block text-sm font-medium mb-1">
                Short Description
              </label>
              <textarea
                id="shortDescription"
                placeholder="Short Description"
                value={
                  editingAnnouncement?.shortDescription || newAnnouncement.shortDescription || ""
                }
                onChange={(e) =>
                  editingAnnouncement
                    ? setEditingAnnouncement({
                        ...editingAnnouncement,
                        shortDescription: e.target.value,
                      })
                    : setNewAnnouncement({ ...newAnnouncement, shortDescription: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              />

              {/* Link */}
              <label htmlFor="link" className="block text-sm font-medium mb-1">
                Link
              </label>
              <input
                id="link"
                type="text"
                placeholder="Link"
                value={editingAnnouncement?.link || newAnnouncement.link || ""}
                onChange={(e) =>
                  editingAnnouncement
                    ? setEditingAnnouncement({ ...editingAnnouncement, link: e.target.value })
                    : setNewAnnouncement({ ...newAnnouncement, link: e.target.value })
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

export default AnnouncementsDashboard;