import React, { useEffect, useState } from "react";
import axios from "axios";

type Announcement = {
  id: string;
  title: string;
  description: string;
  displayOnHomepage: boolean;
};

const DashboardAnnouncements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get("https://backend-nrc.onrender.com/api/announcements");
      setAnnouncements(res.data);
    } catch (err) {
      console.error("Failed to fetch announcements", err);
      setError("Failed to load announcements. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const toggleHomepageDisplay = async (id: string, current: boolean) => {
    try {
      setError(null);
      await axios.patch(`https://backend-nrc.onrender.com/api/announcements/${id}`, {
        displayOnHomepage: !current,
      });
      setAnnouncements((prev) =>
        prev.map((a) =>
          a.id === id ? { ...a, displayOnHomepage: !current } : a
        )
      );
    } catch (err) {
      console.error("Failed to update announcement", err);
      setError("Failed to update announcement. Please try again.");
      // Revert the UI change if the update fails
      fetchAnnouncements();
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Announcements</h2>
        <div className="p-4 bg-gray-100 rounded">Loading announcements...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Announcements</h2>
        <div className="p-4 bg-red-100 text-red-700 rounded mb-4">{error}</div>
        <button
          onClick={fetchAnnouncements}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Announcements</h2>
      
      {announcements.length === 0 ? (
        <div className="p-4 bg-yellow-100 text-yellow-700 rounded">
          No announcements found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Display on Home</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((a) => (
                <tr key={a.id} className="border-t hover:bg-gray-50">
                  <td className="p-2 border">{a.title}</td>
                  <td className="p-2 border">{a.description}</td>
                  <td className="p-2 border text-center">
                    {a.displayOnHomepage ? "✅" : "❌"}
                  </td>
                  <td className="p-2 border text-center">
                    <button
                      onClick={() => toggleHomepageDisplay(a.id, a.displayOnHomepage)}
                      className={`px-3 py-1 rounded ${
                        a.displayOnHomepage
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-green-500 hover:bg-green-600"
                      } text-white transition-colors`}
                    >
                      {a.displayOnHomepage ? "Remove from Home" : "Show on Home"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashboardAnnouncements;