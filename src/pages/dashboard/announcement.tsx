import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const BASE_URL = "https://backend-nrc.onrender.com/uploads/";

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
  const [saveStatus, setSaveStatus] = useState<{
    loading: boolean;
    success: boolean;
    error: boolean;
    message: string;
  }>({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await axios.get("https://backend-nrc.onrender.com/api/announcements");
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
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      try {
        await axios.delete(`https://backend-nrc.onrender.com/api/announcements/${id}`);
        setAnnouncements((prev) => prev.filter((a) => a._id !== id));
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  const handleEdit = (announcement: Announcement) => {
    setEditingAnnouncement(announcement);
    setShowModal(true);
  };

  const handleSave = async () => {
    setSaveStatus({ loading: true, success: false, error: false, message: "Saving... Please wait" });
    const formData = new FormData();
    const target = editingAnnouncement || newAnnouncement;

    formData.append("title", target.title || "");
    formData.append("category", target.category || "");
    if (target.shortDescription) formData.append("shortDescription", target.shortDescription);
    if (target.link) formData.append("link", target.link);
    if (selectedFile.image) formData.append("image", selectedFile.image);
    if (selectedFile.video) formData.append("video", selectedFile.video);
    if (selectedFile.pdf) formData.append("pdf", selectedFile.pdf);

    try {
      if (editingAnnouncement) {
        await axios.put(
          `https://backend-nrc.onrender.com/api/announcements/${editingAnnouncement._id}`,
          formData
        );
        setAnnouncements((prev) =>
          prev.map((a) =>
            a._id === editingAnnouncement._id ? { ...a, ...editingAnnouncement } : a
          )
        );
      } else {
        const res = await axios.post("https://backend-nrc.onrender.com/api/announcements", formData);
        setAnnouncements((prev) => [...prev, res.data]);
      }
      setSaveStatus({ loading: false, success: true, error: false, message: "Saved successfully!" });
      setShowModal(false);
      setEditingAnnouncement(null);
      setNewAnnouncement({});
      setSelectedFile({});
    } catch (err) {
      setSaveStatus({ loading: false, success: false, error: true, message: "Save failed. Please try again." });
      console.error("Save failed:", err);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setSelectedFile((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Announcements</h2>
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

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Short Description</th>
              <th className="border border-gray-300 px-4 py-2">Link</th>
              <th className="border border-gray-300 px-4 py-2">Media</th>
              <th className="border border-gray-300 px-4 py-2">Video</th> {/* New column */}
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement) => (
              <tr key={announcement._id} className="text-sm">
                <td className="border border-gray-300 px-2 py-1">{announcement._id}</td>
                <td className="border border-gray-300 px-2 py-1">{announcement.title}</td>
                <td className="border border-gray-300 px-2 py-1">{announcement.category}</td>
                <td className="border border-gray-300 px-2 py-1">
                  {announcement.shortDescription || "N/A"}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {announcement.link ? (
                    <a
                      href={announcement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Link
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {announcement.image ? (
                    <img
                      src={BASE_URL + announcement.image}
                      alt="Announcement"
                      className="w-12 h-12 object-cover"
                    />
                  ) : announcement.video ? (
                    <video
                      src={BASE_URL + announcement.video}
                      controls
                      className="w-16 h-12 object-cover"
                    />
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {announcement.video ? (
                    <a
                      href={BASE_URL + announcement.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Video
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="border border-gray-300 px-2 py-1 flex gap-2 justify-center">
                  <button
                    className="text-blue-500 hover:text-blue-700"
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
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              {editingAnnouncement ? "Edit Announcement" : "Add New Announcement"}
            </h3>

            {/* Title */}
            <input
              type="text"
              placeholder="Title"
              value={editingAnnouncement?.title || newAnnouncement.title || ""}
              onChange={(e) =>
                editingAnnouncement
                  ? setEditingAnnouncement({ ...editingAnnouncement, title: e.target.value })
                  : setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
            />

            {/* Category */}
            <select
              value={editingAnnouncement?.category || newAnnouncement.category || ""}
              onChange={(e) =>
                editingAnnouncement
                  ? setEditingAnnouncement({
                      ...editingAnnouncement,
                      category: e.target.value as "announcement" | "opportunities",
                    })
                  : setNewAnnouncement({
                      ...newAnnouncement,
                      category: e.target.value as "announcement" | "opportunities",
                    })
              }
              className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
            >
              <option value="">Select Category</option>
              <option value="announcement">Announcement</option>
              <option value="opportunities">Opportunities</option>
            </select>

            {/* Short Description */}
            <textarea
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
              className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
            />

            {/* Link */}
            <input
              type="text"
              placeholder="Link"
              value={editingAnnouncement?.link || newAnnouncement.link || ""}
              onChange={(e) =>
                editingAnnouncement
                  ? setEditingAnnouncement({ ...editingAnnouncement, link: e.target.value })
                  : setNewAnnouncement({ ...newAnnouncement, link: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
            />

            {/* File Inputs */}
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <label htmlFor="video">Video</label>
            <input
              type="file"
              name="video"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            {/* <input
              type="file"
              name="pdf"
              onChange={handleFileChange}
              className="mb-2 block w-full"
            /> */}

            {/* Status Message */}
            {saveStatus.loading && (
              <div className="mb-4 text-blue-600">{saveStatus.message || "Saving..."}</div>
            )}
            {saveStatus.success && (
              <div className="mb-4 text-green-600">{saveStatus.message}</div>
            )}
            {saveStatus.error && (
              <div className="mb-4 text-red-600">{saveStatus.message}</div>
            )}

            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementsDashboard;
