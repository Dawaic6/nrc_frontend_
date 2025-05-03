import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";

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

const AnnouncementsPage: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [opportunities, setOpportunities] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await axios.get("https://backend-nrc.onrender.com/api/announcements");
        const data = res.data.data;

        // Filter announcements and opportunities based on category
        const announcementsData = data.filter(
          (item: Announcement) => item.category === "announcement"
        );
        const opportunitiesData = data.filter(
          (item: Announcement) => item.category === "opportunities"
        );

        setAnnouncements(announcementsData);
        setOpportunities(opportunitiesData);
      } catch (err) {
        setError("Failed to fetch announcements.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <MainLayout>
      <div className="p-6 space-y-10 max-w-4xl mx-auto">
        {/* Announcements Section */}
        <h2 className="text-2xl font-bold">📢 Announcements</h2>
        <div className="space-y-6">
          {announcements.length === 0 && <p>No announcements available.</p>}
          {announcements.map((a) => (
            <div key={a._id} className="border p-4 rounded shadow-sm space-y-2">
              <h3 className="text-xl font-semibold">{a.title}</h3>
              <p>{a.shortDescription}</p>
              {a.image ? (
                <img
                  src={`${BASE_URL}${a.image}`}
                  alt="announcement"
                  className="mt-2 max-w-xs rounded"
                />
              ) : a.video ? (
                <video controls className="mt-2 max-w-xs rounded">
                  <source src={`${BASE_URL}${a.video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
              {a.pdf && (
                <a
                  href={`${BASE_URL}${a.pdf}`}
                  download
                  className="text-blue-500 underline block"
                >
                  Download PDF
                </a>
              )}
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline block"
                >
                  View Link
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-10 border-t-2" />

        {/* Opportunities Section */}
        <h2 className="text-2xl font-bold">🎯 Opportunities</h2>
        <div className="space-y-6">
          {opportunities.length === 0 && <p>No opportunities available.</p>}
          {opportunities.map((o) => (
            <div key={o._id} className="border p-4 rounded shadow-sm space-y-2">
              <h3 className="text-xl font-semibold">{o.title}</h3>
              <p>{o.shortDescription}</p>
              {o.image ? (
                <img
                  src={`${BASE_URL}${o.image}`}
                  alt="opportunity"
                  className="mt-2 max-w-xs rounded"
                />
              ) : o.video ? (
                <video controls className="mt-2 max-w-xs rounded">
                  <source src={`${BASE_URL}${o.video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
              {o.link && (
                <a
                  href={o.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline block"
                >
                  View Link
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default AnnouncementsPage;