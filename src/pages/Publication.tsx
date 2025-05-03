import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
import Banner from "../components/banner";
import NewsCard from "../components/Blog";

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
  createdAt?: string;
}

const BASE_URL = "https://backend-nrc.onrender.com/uploads/";

const Publications: React.FC = () => {
  const [ongoingResearch, setOngoingResearch] = useState<Publication[]>([]);
  const [publishedResearch, setPublishedResearch] = useState<Publication[]>([]);
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
          disclaimer: item.disclaimer?.replace(/^"|"$/g, "") || "",
        }));

        // Separate ongoing and published research based on `isOngoing` field
        const ongoing: Publication[] = cleaned.filter((item: Publication) => item.isOngoing);
        const published: Publication[] = cleaned.filter((item: Publication) => !item.isOngoing);

        setOngoingResearch(ongoing);
        setPublishedResearch(published);
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
        <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto mb-16"></div>
        {loading && <p className="text-center">Loading ongoing research...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ongoingResearch.length > 0 ? (
            ongoingResearch.map((item) => (
              <NewsCard
                key={item._id}
                image={item.image ? BASE_URL + item.image : ""}
                title={item.title}
                shortDescription={(item.shortDescription || "").slice(0, 100) + "..."}
                longDescription={item.disclaimer || "No additional information available."}
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
        <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto mb-16"></div>
        {loading && <p className="text-center">Loading published research...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {publishedResearch.length > 0 ? (
            publishedResearch.map((item) => (
              <NewsCard
                key={item._id}
                image={item.image ? BASE_URL + item.image : ""}
                title={item.title}
                shortDescription={(item.shortDescription || "").slice(0, 100) + "..."}
                longDescription={item.disclaimer || "No additional information available."}
              />
            ))
          ) : (
            !loading && <p className="text-center">No published research available.</p>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Publications;