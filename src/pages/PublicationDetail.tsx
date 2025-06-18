import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

interface Publication {
  _id: string;
  title: string;
  shortDescription?: string;
  longDescription?: string;
  disclaimer?: string;
  image?: string;     // Full Cloudinary URL
  pdf?: string;       // Full Cloudinary URL
  video?: string;     // Full Cloudinary URL
  category?: string;
  isOngoing?: boolean;
  createdAt?: string;
}

const PublicationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [publication, setPublication] = useState<Publication | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublication = async () => {
      try {
        const res = await fetch(`https://backend-nrc.onrender.com/api/publications/${id}`);
        const data = await res.json();
        setPublication(data.data);
      } catch (err) {
        setError("Failed to fetch publication.");
      } finally {
        setLoading(false);
      }
    };
    fetchPublication();
  }, [id]);

  if (loading)
    return (
      <MainLayout>
        <p className="text-center">Loading...</p>
      </MainLayout>
    );

  if (error)
    return (
      <MainLayout>
        <p className="text-center text-red-500">{error}</p>
      </MainLayout>
    );

  if (!publication)
    return (
      <MainLayout>
        <p className="text-center">Publication not found.</p>
      </MainLayout>
    );

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto py-10 px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          &lt; Back
        </button>

        {/* Show Image */}
        {publication.image && (
          <img
            src={publication.image}
            alt={publication.title}
            className="w-full h-64 object-cover rounded mb-6"
          />
        )}

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{publication.title}</h1>

        {/* Short Description */}
        {publication.shortDescription && (
          <p className="text-gray-700 mb-4">{publication.shortDescription}</p>
        )}

        {/* Long Description or Disclaimer */}
        {(publication.disclaimer || publication.longDescription) && (
          <p className="text-gray-700 mb-4">
            {publication.disclaimer || publication.longDescription}
          </p>
        )}

        {/* Show Video */}
        {publication.video && (
          <video
            src={publication.video}
            controls
            className="w-full rounded mb-4"
          ></video>
        )}

        {/* Download PDF */}
        {publication.pdf && (
          <a
            href={publication.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline block mb-4"
          >
            📄 Download PDF Document
          </a>
        )}
      </div>
    </MainLayout>
  );
};

export default PublicationDetail;
