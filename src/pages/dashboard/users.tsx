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
  password?: string;
}

const UserDashboard: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<IUser | null>(null);
  const [newUser, setNewUser] = useState<Partial<IUser>>({});
  const [searchEmail, setSearchEmail] = useState("");
  const [filterRole, setFilterRole] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://backend-nrc.onrender.com/api/users");
        setUsers(res.data.data);
        setFilteredUsers(res.data.data);
      } catch (err) {
        setError("Failed to fetch users.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) => {
      const matchesEmail = user.email.toLowerCase().includes(searchEmail.toLowerCase());
      const matchesRole = filterRole ? user.role === filterRole : true;
      return matchesEmail && matchesRole;
    });
    setFilteredUsers(filtered);
  }, [searchEmail, filterRole, users]);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://backend-nrc.onrender.com/api/users/${id}`);
      const updatedUsers = users.filter((user) => user._id !== id);
      setUsers(updatedUsers);
      setMessage("User deleted successfully.");
    } catch (err) {
      console.error("Failed to delete user:", err);
      setError("Failed to delete user.");
    }
  };
 const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleEdit = (user: IUser) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleSave = async () => {
    if (editingUser) {
      try {
        await axios.put(`https://backend-nrc.onrender.com/api/users/${editingUser._id}`, editingUser);
        const updatedUsers = users.map((user) =>
          user._id === editingUser._id ? { ...user, ...editingUser } : user
        );
        setUsers(updatedUsers);
        setMessage("User updated successfully.");
        setShowModal(false);
        setEditingUser(null);
      } catch (err) {
        console.error("Failed to update user:", err);
        setError("Failed to update user.");
      }
    } else {
      try {
        const res = await axios.post("https://backend-nrc.onrender.com/api/register", newUser);
        setUsers([...users, res.data]);
        setMessage("User registered successfully.");
        setShowModal(false);
        setNewUser({});
      } catch (err: any) {
        console.error("Failed to create user:", err);
        if (err.response?.data?.message) {
          setError(err.response.data.message);
        } else {
          setError("Failed to register user.");
        }
      }
    }

    setTimeout(() => {
      setMessage(null);
      setError(null);
    }, 5000);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4">User Management</h2>

      {message && <p className="text-green-600 text-center mb-4">{message}</p>}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by email..."
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/3"
        />

        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/4"
        >
          <option value="">Filter by role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => {
            setNewUser({});
            setEditingUser(null);
            setShowModal(true);
          }}
        >
          + New User
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">First Name</th>
              <th className="border px-4 py-2">Last Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td className="border px-4 py-2">{user._id}</td>
                <td className="border px-4 py-2">{user.firstName}</td>
                <td className="border px-4 py-2">{user.lastName}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="border px-4 py-2">{user.status}</td>
                <td className="border px-4 py-2">
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
      </div>

     {showModal && (
  <div className="fixed inset-0 bg-[#414868] bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded shadow-lg w-96">
      <h3 className="text-xl font-bold mb-4">
        {editingUser ? "Edit User" : "Add New User"}
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const errors: Record<string, string> = {};

          const user = editingUser || newUser;

          if (!user.firstName?.trim()) errors.firstName = "First name is required.";
          if (!user.lastName?.trim()) errors.lastName = "Last name is required.";
          if (!user.email?.trim()) {
            errors.email = "Email is required.";
          } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = "Invalid email address.";
          }
          if (!editingUser && !newUser.password?.trim()) {
            errors.password = "Password is required.";
          }
          if (!user.role) errors.role = "Role is required.";
          if (!user.status?.trim()) errors.status = "Status is required.";

          setFormErrors(errors);

          if (Object.keys(errors).length === 0) {
            handleSave();
          }
        }}
      >
        {/* First Name */}
        <label className="block text-sm font-medium mb-1">First Name</label>
        <input
          type="text"
          value={editingUser?.firstName || newUser.firstName || ""}
          onChange={(e) =>
            editingUser
              ? setEditingUser({ ...editingUser, firstName: e.target.value })
              : setNewUser({ ...newUser, firstName: e.target.value })
          }
          className="w-full border rounded px-4 py-2 mb-1"
        />
        {formErrors.firstName && <p className="text-red-500 text-sm mb-2">{formErrors.firstName}</p>}

        {/* Last Name */}
        <label className="block text-sm font-medium mb-1">Last Name</label>
        <input
          type="text"
          value={editingUser?.lastName || newUser.lastName || ""}
          onChange={(e) =>
            editingUser
              ? setEditingUser({ ...editingUser, lastName: e.target.value })
              : setNewUser({ ...newUser, lastName: e.target.value })
          }
          className="w-full border rounded px-4 py-2 mb-1"
        />
        {formErrors.lastName && <p className="text-red-500 text-sm mb-2">{formErrors.lastName}</p>}

        {/* Email */}
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={editingUser?.email || newUser.email || ""}
          onChange={(e) =>
            editingUser
              ? setEditingUser({ ...editingUser, email: e.target.value })
              : setNewUser({ ...newUser, email: e.target.value })
          }
          className="w-full border rounded px-4 py-2 mb-1"
        />
        {formErrors.email && <p className="text-red-500 text-sm mb-2">{formErrors.email}</p>}

        {/* Password (only for new users) */}
        {!editingUser && (
          <>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={newUser.password || ""}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              className="w-full border rounded px-4 py-2 mb-1"
            />
            {formErrors.password && <p className="text-red-500 text-sm mb-2">{formErrors.password}</p>}
          </>
        )}

        {/* Role */}
        <label className="block text-sm font-medium mb-1">Role</label>
        <select
          value={editingUser?.role || newUser.role || ""}
          onChange={(e) =>
            editingUser
              ? setEditingUser({ ...editingUser, role: e.target.value })
              : setNewUser({ ...newUser, role: e.target.value })
          }
          className="w-full border rounded px-4 py-2 mb-1"
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        {formErrors.role && <p className="text-red-500 text-sm mb-2">{formErrors.role}</p>}

        {/* Status */}
        <label className="block text-sm font-medium mb-1">Status</label>
        <input
          type="text"
          value={editingUser?.status || newUser.status || ""}
          onChange={(e) =>
            editingUser
              ? setEditingUser({ ...editingUser, status: e.target.value })
              : setNewUser({ ...newUser, status: e.target.value })
          }
          className="w-full border rounded px-4 py-2 mb-1"
        />
        {formErrors.status && <p className="text-red-500 text-sm mb-4">{formErrors.status}</p>}

        {/* Buttons */}
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Save
          </button>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="bg-gray-400 text-white px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </div>
  );
};

export default UserDashboard;
