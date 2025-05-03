import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const BASE_URL = "https://backend-nrc.onrender.com/uploads/";

interface Publication {
  _id: string;
  title: string;
  shortDescription?: string;
  image?: string;
  pdf?: string;
  video?: string;
  category: "Research" | "Reports" | "Resources";
  isOngoing?: boolean;
  disclaimer?: string;
}

const Publications: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingPublication, setEditingPublication] = useState<Publication | null>(null);
  const [newPublication, setNewPublication] = useState<Partial<Publication>>({});
  const [selectedFile, setSelectedFile] = useState<{
    image?: File;
    video?: File;
    pdf?: File;
  }>({});

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const res = await axios.get("https://backend-nrc.onrender.com/api/publications");
        setPublications(res.data.data);
      } catch (err) {
        setError("Failed to fetch publications.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPublications();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this publication?");
    if (confirmDelete) {
      try {
        await axios.delete(`https://backend-nrc.onrender.com/api/publications/${id}`);
        setPublications(publications.filter((publication) => publication._id !== id));
      } catch (err) {
        console.error("Failed to delete publication:", err);
      }
    }
  };

  const handleEdit = (publication: Publication) => {
    setEditingPublication(publication);
    setShowModal(true);
  };

  const handleSave = async () => {
    const formData = new FormData();
    if (editingPublication) {
      formData.append("title", editingPublication.title);
      formData.append("shortDescription", editingPublication.shortDescription || "");
      formData.append("category", editingPublication.category);
      formData.append("isOngoing", editingPublication.isOngoing ? "true" : "false");
      formData.append("disclaimer", editingPublication.disclaimer || "");
      if (selectedFile.image) formData.append("image", selectedFile.image);
      if (selectedFile.video) formData.append("video", selectedFile.video);
      if (selectedFile.pdf) formData.append("pdf", selectedFile.pdf);

      try {
        await axios.put(
          `https://backend-nrc.onrender.com/api/publications/${editingPublication._id}`,
          formData
        );
        const updatedPublications = publications.map((publication) =>
          publication._id === editingPublication._id
            ? { ...publication, ...editingPublication }
            : publication
        );
        setPublications(updatedPublications);
        setShowModal(false);
        setEditingPublication(null);
        setSelectedFile({});
      } catch (err) {
        console.error("Failed to update publication:", err);
      }
    } else {
      formData.append("title", newPublication.title || "");
      formData.append("shortDescription", newPublication.shortDescription || "");
      formData.append("category", newPublication.category || "Research");
      formData.append("isOngoing", newPublication.isOngoing ? "true" : "false");
      formData.append("disclaimer", newPublication.disclaimer || "");
      if (selectedFile.image) formData.append("image", selectedFile.image);
      if (selectedFile.video) formData.append("video", selectedFile.video);
      if (selectedFile.pdf) formData.append("pdf", selectedFile.pdf);

      try {
        const res = await axios.post("https://backend-nrc.onrender.com/api/publications", formData);
        setPublications([...publications, res.data]);
        setShowModal(false);
        setNewPublication({});
        setSelectedFile({});
      } catch (err) {
        console.error("Failed to create publication:", err);
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
      <h2 className="text-3xl font-bold text-center mb-6">Publications</h2>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
        onClick={() => {
          setNewPublication({});
          setEditingPublication(null);
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
            <th className="border border-gray-300 px-4 py-2">Ongoing</th>
            <th className="border border-gray-300 px-4 py-2">Short Desc</th>
            <th className="border border-gray-300 px-4 py-2">Photo</th>
            <th className="border border-gray-300 px-4 py-2">Video</th>
            <th className="border border-gray-300 px-4 py-2">PDF</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {publications.map((publication) => (
            <tr key={publication._id}>
              <td className="border border-gray-300 px-4 py-2">{publication._id}</td>
              <td className="border border-gray-300 px-4 py-2">{publication.title}</td>
              <td className="border border-gray-300 px-4 py-2">{publication.category}</td>
              <td className="border border-gray-300 px-4 py-2">
                {publication.isOngoing ? "Yes" : "No"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {publication.shortDescription || "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {publication.image ? (
                  <img
                    src={`${BASE_URL}${publication.image}`}
                    alt="Publication"
                    className="w-16 h-16 object-cover"
                  />
                ) : (
                  "N/A"
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {publication.video ? (
                  <a href={`${BASE_URL}${publication.video}`} target="_blank" rel="noopener noreferrer">
                    View Video
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {publication.pdf ? (
                  <a href={`${BASE_URL}${publication.pdf}`} target="_blank" rel="noopener noreferrer">
                    View PDF
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => handleEdit(publication)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(publication._id)}
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
        <div className="fixed inset-0 bg-[#414868] bg-opacity-50 flex items-center justify-center ">
          <div className="bg-white p-4 rounded shadow-lg w-96  h-auto">
            <h3 className="text-xl font-bold mb-3">
              {editingPublication ? "Edit Publication" : "Add New Publication"}
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
                value={editingPublication?.title || newPublication.title || ""}
                onChange={(e) =>
                  editingPublication
                    ? setEditingPublication({ ...editingPublication, title: e.target.value })
                    : setNewPublication({ ...newPublication, title: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
              />
               {/* Short Description */}
               <label htmlFor="shortDescription" className="block text-sm font-medium mb-1">
                Short Description
              </label>
              <textarea
                id="shortDescription"
                placeholder="Short Description"
                value={editingPublication?.shortDescription || newPublication.shortDescription || ""}
                onChange={(e) =>
                  editingPublication
                    ? setEditingPublication({ ...editingPublication, shortDescription: e.target.value })
                    : setNewPublication({ ...newPublication, shortDescription: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              />

              {/* Category */}
              <label htmlFor="category" className="block text-sm font-medium mb-1">
                Category
              </label>
              <select
                id="category"
                value={editingPublication?.category || newPublication.category || ""}
                onChange={(e) =>
                  editingPublication
                    ? setEditingPublication({ ...editingPublication, category: e.target.value as Publication["category"] })
                    : setNewPublication({ ...newPublication, category: e.target.value as Publication["category"] })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              >
                <option value="Research">Research</option>
                <option value="Reports">Reports</option>
                <option value="Resources">Resources</option>
              </select>

              {/* Ongoing */}
              <label htmlFor="isOngoing" className="block text-sm font-medium mb-1">
                Ongoing
              </label>
              <input
                id="isOngoing"
                type="checkbox"
                checked={editingPublication?.isOngoing || newPublication.isOngoing || false}
                onChange={(e) =>
                  editingPublication
                    ? setEditingPublication({ ...editingPublication, isOngoing: e.target.checked })
                    : setNewPublication({ ...newPublication, isOngoing: e.target.checked })
                }
                className="mb-4"
              />

              {/* Disclaimer */}
              <label htmlFor="disclaimer" className="block text-sm font-medium mb-1">
                Disclaimer or shortNotes
              </label>
              <textarea
                id="disclaimer"
                placeholder="Disclaimer"
                value={editingPublication?.disclaimer || newPublication.disclaimer || ""}
                onChange={(e) =>
                  editingPublication
                    ? setEditingPublication({ ...editingPublication, disclaimer: e.target.value })
                    : setNewPublication({ ...newPublication, disclaimer: e.target.value })
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

export default Publications;