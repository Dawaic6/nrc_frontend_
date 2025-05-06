import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const MessagesDashboard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("https://backend-nrc.onrender.com/api/messages");
        setMessages(res.data.data);
      } catch (err) {
        setError("Failed to fetch messages.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if (confirmDelete) {
      try {
        await axios.delete(`https://backend-nrc.onrender.com/api/delete/${id}`);
        setMessages(messages.filter((message) => message._id !== id));
      } catch (err) {
        console.error("Failed to delete message:", err);
      }
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Messages Dashboard</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
              <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Subject</th>
            <th className="border border-gray-300 px-4 py-2">Message</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message._id}>
              <td className="border border-gray-300 px-4 py-2">{message._id}</td>
              <td className="border border-gray-300 px-4 py-2">{message.name}</td>
              <td className="border border-gray-300 px-4 py-2">{message.email}</td>
              <td className="border border-gray-300 px-4 py-2">{message.subject}</td>
              <td className="border border-gray-300 px-4 py-2">{message.message}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDelete(message._id)}
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

export default MessagesDashboard;