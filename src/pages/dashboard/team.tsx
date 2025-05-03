import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const BASE_URL = "https://backend-nrc.onrender.com/";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string; // File path to the image
  shortDescription?: string; // Optional field
  category: string; // "current" or "alumnae"
  year?: string; // For alumnae
}

const TeamDashboard: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [newMember, setNewMember] = useState<Partial<TeamMember>>({});
  const [selectedFile, setSelectedFile] = useState<{ image?: File }>({});

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const res = await axios.get("https://backend-nrc.onrender.com/api/team");
        setTeamMembers(res.data.data);
      } catch (err) {
        setError("Failed to fetch team members.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeamMembers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://backend-nrc.onrender.com/api/team/${id}`);
      setTeamMembers(teamMembers.filter((member) => member._id !== id));
    } catch (err) {
      console.error("Failed to delete team member:", err);
    }
  };

  const handleEdit = (member: TeamMember) => {
    setEditingMember(member);
    setShowModal(true);
  };

  const handleSave = async () => {
    const formData = new FormData();
    if (editingMember) {
      formData.append("name", editingMember.name);
      formData.append("role", editingMember.role);
      formData.append("category", editingMember.category);
      if (editingMember.shortDescription) {
        formData.append("shortDescription", editingMember.shortDescription);
      }
      if (editingMember.year) {
        formData.append("year", editingMember.year);
      }
      if (selectedFile.image) {
        formData.append("image", selectedFile.image);
      }

      try {
        await axios.put(
          `https://backend-nrc.onrender.com/api/team/${editingMember._id}`,
          formData
        );
        const updatedMembers = teamMembers.map((member) =>
          member._id === editingMember._id ? { ...member, ...editingMember } : member
        );
        setTeamMembers(updatedMembers);
        setShowModal(false);
        setEditingMember(null);
        setSelectedFile({});
      } catch (err) {
        console.error("Failed to update team member:", err);
      }
    } else {
      formData.append("name", newMember.name || "");
      formData.append("role", newMember.role || "");
      formData.append("category", newMember.category || "");
      if (newMember.shortDescription) {
        formData.append("shortDescription", newMember.shortDescription);
      }
      if (newMember.year) {
        formData.append("year", newMember.year);
      }
      if (selectedFile.image) {
        formData.append("image", selectedFile.image);

        try {
          const res = await axios.post("https://backend-nrc.onrender.com/api/team", formData);
          setTeamMembers([...teamMembers, res.data]);
          setShowModal(false);
          setNewMember({});
          setSelectedFile({});
        } catch (err) {
          console.error("Failed to create team member:", err);
        }
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
      <h2 className="text-3xl font-bold text-center mb-6">Team Members</h2>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
        onClick={() => {
          setNewMember({});
          setEditingMember(null);
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
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Year</th>
            <th className="border border-gray-300 px-4 py-2">Photo</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member) => (
            <tr key={member._id}>
              <td className="border border-gray-300 px-4 py-2">{member._id}</td>
              <td className="border border-gray-300 px-4 py-2">{member.name}</td>
              <td className="border border-gray-300 px-4 py-2">{member.role}</td>
              <td className="border border-gray-300 px-4 py-2">{member.category}</td>
              <td className="border border-gray-300 px-4 py-2">{member.year || "N/A"}</td>
              <td className="border border-gray-300 px-4 py-2">
                {member.image ? (
                  <img
                    src={BASE_URL + member.image}
                    alt="Team Member"
                    className="w-16 h-16 object-cover"
                  />
                ) : (
                  "N/A"
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => handleEdit(member)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(member._id)}
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
              {editingMember ? "Edit Team Member" : "Add New Team Member"}
            </h3>
            <form>
              {/* Name */}
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={editingMember?.name || newMember.name || ""}
                onChange={(e) =>
                  editingMember
                    ? setEditingMember({ ...editingMember, name: e.target.value })
                    : setNewMember({ ...newMember, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              />

              {/* Role */}
              <label htmlFor="role" className="block text-sm font-medium mb-1">
                Role
              </label>
              <input
                id="role"
                type="text"
                placeholder="Role"
                value={editingMember?.role || newMember.role || ""}
                onChange={(e) =>
                  editingMember
                    ? setEditingMember({ ...editingMember, role: e.target.value })
                    : setNewMember({ ...newMember, role: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              />

              {/* Category */}
              <label htmlFor="category" className="block text-sm font-medium mb-1">
                Category
              </label>
              <select
                id="category"
                value={editingMember?.category || newMember.category || ""}
                onChange={(e) =>
                  editingMember
                    ? setEditingMember({ ...editingMember, category: e.target.value })
                    : setNewMember({ ...newMember, category: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              >
                <option value="">Select Category</option>
                <option value="current">Current</option>
                <option value="alumnae">Alumnae</option>
              </select>

              {/* Year (Optional for Alumnae) */}
              {newMember.category === "alumnae" || editingMember?.category === "alumnae" ? (
                <>
                  <label htmlFor="year" className="block text-sm font-medium mb-1">
                    Year
                  </label>
                  <input
                    id="year"
                    type="text"
                    placeholder="Year"
                    value={editingMember?.year || newMember.year || ""}
                    onChange={(e) =>
                      editingMember
                        ? setEditingMember({ ...editingMember, year: e.target.value })
                        : setNewMember({ ...newMember, year: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
                  />
                </>
              ) : null}

              {/* Short Description */}
              <label htmlFor="shortDescription" className="block text-sm font-medium mb-1">
                Short Description
              </label>
              <textarea
                id="shortDescription"
                placeholder="Short Description"
                value={
                  editingMember?.shortDescription || newMember.shortDescription || ""
                }
                onChange={(e) =>
                  editingMember
                    ? setEditingMember({
                        ...editingMember,
                        shortDescription: e.target.value,
                      })
                    : setNewMember({ ...newMember, shortDescription: e.target.value })
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

export default TeamDashboard;