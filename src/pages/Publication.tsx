import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
import Banner from "../components/banner";
import PublicationCard from "../components/PublicationCard";

interface Publication {
  _id: string;
  title: string;
  shortDescription?: string;
  image?: string;
  pdf?: string;
  video?: string;
  category: "Research" | "Reports" | "Resources";
  isOngoing?: boolean;
  longDescription?: string;
  disclaimer?: string; // Add this line
  createdAt?: string;
}

const BASE_URL = "https://backend-nrc.onrender.com/uploads/";

const Publications: React.FC = () => {
  const [ongoingResearch, setOngoingResearch] = useState<Publication[]>([]);
  const [publishedResearch, setPublishedResearch] = useState<Publication[]>([]);
  const [reports, setReports] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const res = await axios.get("https://backend-nrc.onrender.com/api/publications");
        const cleaned = res.data.data.map((item: Publication) => ({
          ...item,
          title: item.title?.replace(/^"|"$/g, "") || "Untitled",
          shortDescription: item.shortDescription?.replace(/^"|"$/g, "") || "No description available",
          longDescription: item.disclaimer?.replace(/^"|"$/g, "") || item.longDescription?.replace(/^"|"$/g, "") || "No additional information available.", // Prefer disclaimer
        }));

        // Separate ongoing and published research based on `isOngoing` field
        const ongoing: Publication[] = cleaned.filter((item: Publication) => item.isOngoing);
        const published: Publication[] = cleaned.filter((item: Publication) => !item.isOngoing);
        const reports: Publication[] = cleaned.filter((item: Publication) => item.category === "Reports");

        setOngoingResearch(ongoing);
        setPublishedResearch(published);
        setReports(reports); // Add this line and state below
      } catch (err) {
        setError("Failed to fetch publications.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  return (
    <MainLayout>
      <div className="py-10 px-4 max-w-7xl mx-auto">
        <Banner />
      </div>

      {/* Ongoing Research Section */}
      <section id="ongoingResearch" className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Ongoing Research</h2>
        <div className="mt-4 h-1 w-20 bg-green-600 mx-auto mb-16"></div>
        {loading && <p className="text-center">Loading ongoing research...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ongoingResearch.length > 0 ? (
            ongoingResearch.map((item) => (
              <PublicationCard
                key={item._id}
                id={item._id}
                image={item.image ? BASE_URL + item.image : ""}
                title={item.title}
                shortDescription={(item.shortDescription || "").slice(0, 100) + "..."}
              />
            ))
          ) : (
            !loading && <p className="text-center">No ongoing research available.</p>
          )}
        </div>
      </section>

      {/* Published Research Section */}
      <section  id="publishedResearch" className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Published Research</h2>
        <div className="mt-4 h-1 w-20 bg-green-600 mx-auto mb-16"></div>
        {loading && <p className="text-center">Loading published research...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {publishedResearch.length > 0 ? (
            publishedResearch.map((item) => (
              <PublicationCard
                key={item._id}
                id={item._id}
                image={item.image ? BASE_URL + item.image : ""}
                title={item.title}
                shortDescription={(item.shortDescription || "").slice(0, 100) + "..."}
              />
            ))
          ) : (
            !loading && <p className="text-center">No published research available.</p>
          )}
        </div>
      </section>
      {/* report Section */}
      <section id="publishedReports" className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Published Reports</h2>
        <div className="mt-4 h-1 w-20 bg-green-600 mx-auto mb-16"></div>
        {loading && <p className="text-center">Loading published reports...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {reports.length > 0 ? (
            reports.map((item) => (
              <PublicationCard
                key={item._id}
                id={item._id}
                image={item.image ? BASE_URL + item.image : ""}
                title={item.title}
                shortDescription={(item.shortDescription || "").slice(0, 100) + "..."}
              />
            ))
          ) : (
            !loading && <p className="text-center">No published reports available.</p>
          )}
        </div>
      </section>

    </MainLayout>
  );
};

export default Publications;