import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Donation {
  _id: string;
  amount: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  status?: string;
  contactOk: boolean;
  createdAt: string;
}

const DonationsDashboard: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editingDonation, setEditingDonation] = useState<Donation | null>(null);
  const [newDonation, setNewDonation] = useState<Partial<Donation>>({});

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await axios.get("https://backend-nrc.onrender.com/api/donations");
        setDonations(res.data.data);
      } catch (err) {
        setError("Failed to fetch donations.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDonations();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://backend-nrc.onrender.com/api/donations/${id}`);
      setDonations(donations.filter((d) => d._id !== id));
    } catch (err) {
      console.error("Failed to delete donation:", err);
    }
  };

  const handleEdit = (donation: Donation) => {
    setEditingDonation(donation);
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      const isEdit = Boolean(editingDonation);
      const data = editingDonation || newDonation;

      if (isEdit && editingDonation) {
        await axios.put(
          `https://backend-nrc.onrender.com/api/donations/${editingDonation._id}`,
          data
        );
        setDonations(
          donations.map((d) => (d._id === editingDonation._id ? { ...d, ...data } : d))
        );
      } else {
        const res = await axios.post("https://backend-nrc.onrender.com/api/donations", data);
        setDonations([...donations, res.data]);
      }

      setShowModal(false);
      setEditingDonation(null);
      setNewDonation({});
    } catch (err) {
      console.error("Failed to save donation:", err);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Donations</h2>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
        onClick={() => {
          setEditingDonation(null);
          setNewDonation({});
          setShowModal(true);
        }}
      >
        + New Donation
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr>
              <th className="border px-3 py-2">First Name</th>
              <th className="border px-3 py-2">Last Name</th>
              <th className="border px-3 py-2">Email</th>
              <th className="border px-3 py-2">Phone</th>
              <th className="border px-3 py-2">Address</th>
              <th className="border px-3 py-2">City</th>
              <th className="border px-3 py-2">Country</th>
              <th className="border px-3 py-2">Amount (RWF)</th>
              <th className="border px-3 py-2">Status</th>
              <th className="border px-3 py-2">Contact OK?</th>
              <th className="border px-3 py-2">Date</th>
              <th className="border px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id}>
                <td className="border px-3 py-2">{donation.firstName}</td>
                <td className="border px-3 py-2">{donation.lastName}</td>
                <td className="border px-3 py-2">{donation.email}</td>
                <td className="border px-3 py-2">{donation.phone}</td>
                <td className="border px-3 py-2">{donation.address}</td>
                <td className="border px-3 py-2">{donation.city}</td>
                <td className="border px-3 py-2">{donation.country}</td>
                <td className="border px-3 py-2">{donation.amount}</td>
                <td className="border px-3 py-2">{donation.status || "Pending"}</td>
                <td className="border px-3 py-2">{donation.contactOk ? "Yes" : "No"}</td>
                <td className="border px-3 py-2">{new Date(donation.createdAt).toLocaleDateString()}</td>
                <td className="border px-3 py-2">
                  <button className="text-blue-600 mr-2" onClick={() => handleEdit(donation)}>
                    <FaEdit />
                  </button>
                  <button className="text-red-600" onClick={() => handleDelete(donation._id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              {editingDonation ? "Edit Donation" : "Add Donation"}
            </h3>
            <form className="grid gap-3">
              {[
                ["firstName", "First Name"],
                ["lastName", "Last Name"],
                ["email", "Email"],
                ["phone", "Phone"],
                ["address", "Address"],
                ["city", "City"],
                ["country", "Country"],
                ["amount", "Amount"],
                ["status", "Status"],
              ].map(([key, label]) => (
                <input
                  key={key}
                  type={key === "email" ? "email" : "text"}
                  placeholder={label}
                  value={
                      key === 'contactOk' ? 
                        (editingDonation?.contactOk ?? newDonation.contactOk ?? false).toString() : 
                        (editingDonation?.[key as keyof Donation] ?? newDonation[key as keyof Donation] ?? '') as string
                    }
                  onChange={(e) =>
                    editingDonation
                      ? setEditingDonation({
                          ...editingDonation,
                          [key]: e.target.value,
                        })
                      : setNewDonation({
                          ...newDonation,
                          [key]: e.target.value,
                        })
                  }
                  className="border rounded px-3 py-2"
                />
              ))}
              <label className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={editingDonation?.contactOk ?? newDonation.contactOk ?? false}
                  onChange={(e) =>
                    editingDonation
                      ? setEditingDonation({
                          ...editingDonation,
                          contactOk: e.target.checked,
                        })
                      : setNewDonation({
                          ...newDonation,
                          contactOk: e.target.checked,
                        })
                  }
                />
                <span>Contact OK</span>
              </label>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingDonation(null);
                    setNewDonation({});
                  }}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
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

export default DonationsDashboard;
