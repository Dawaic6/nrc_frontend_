import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  password?: string; // Added password property
}

const UserDashboard: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<IUser | null>(null);
  const [newUser, setNewUser] = useState<Partial<IUser>>({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/users");
        setUsers(res.data.data);
      } catch (err) {
        setError("Failed to fetch users.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  const handleEdit = (user: IUser) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleSave = async () => {
    if (editingUser) {
      try {
        await axios.put(`http://localhost:8000/api/users/${editingUser._id}`, editingUser);
        const updatedUsers = users.map((user) =>
          user._id === editingUser._id ? { ...user, ...editingUser } : user
        );
        setUsers(updatedUsers);
        setShowModal(false);
        setEditingUser(null);
      } catch (err) {
        console.error("Failed to update user:", err);
      }
    } else {
      try {
        const res = await axios.post("http://localhost:8000/api/register", newUser);
        setUsers([...users, res.data]);
        setShowModal(false);
        setNewUser({});
      } catch (err) {
        console.error("Failed to create user:", err);
      }
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">User Management</h2>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
        onClick={() => {
          setNewUser({});
          setEditingUser(null);
          setShowModal(true);
        }}
      >
        + New User
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 px-4 py-2">{user._id}</td>
              <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.role}</td>
              <td className="border border-gray-300 px-4 py-2">{user.status}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => handleEdit(user)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(user._id)}
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
              {editingUser ? "Edit User" : "Add New User"}
            </h3>
            <form>
              {/* First Name */}
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                value={editingUser?.firstName || newUser.firstName || ""}
                onChange={(e) =>
                  editingUser
                    ? setEditingUser({ ...editingUser, firstName: e.target.value })
                    : setNewUser({ ...newUser, firstName: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              />

              {/* Last Name */}
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                value={editingUser?.lastName || newUser.lastName || ""}
                onChange={(e) =>
                  editingUser
                    ? setEditingUser({ ...editingUser, lastName: e.target.value })
                    : setNewUser({ ...newUser, lastName: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              />

              {/* Email */}
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={editingUser?.email || newUser.email || ""}
                onChange={(e) =>
                  editingUser
                    ? setEditingUser({ ...editingUser, email: e.target.value })
                    : setNewUser({ ...newUser, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              />
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={newUser.password || ""}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
                />

              {/* Role */}
              <label htmlFor="role" className="block text-sm font-medium mb-1">
                Role
              </label>
              <select
                id="role"
                value={editingUser?.role || newUser.role || ""}
                onChange={(e) =>
                  editingUser
                    ? setEditingUser({ ...editingUser, role: e.target.value })
                    : setNewUser({ ...newUser, role: e.target.value })
                }
                className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>

             {/* Status */}
              <label htmlFor="status" className="block text-sm font-medium mb-1">
                Status
              </label>
              <input
                id="status"
                type="text"
                placeholder="Enter status (e.g., active, inactive, pending)"
                value={editingUser?.status || newUser.status || ""}
                onChange={(e) =>
                  editingUser
                    ? setEditingUser({ ...editingUser, status: e.target.value })
                    : setNewUser({ ...newUser, status: e.target.value })
                }
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

export default UserDashboard;