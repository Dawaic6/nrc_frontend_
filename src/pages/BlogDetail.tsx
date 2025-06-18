import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

interface BlogPost {
  _id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image?: string;
  video?: string;
  pdf?: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://backend-nrc.onrender.com/api/blogs/${id}`);
        const data = await res.json();
        setBlog(data.data);
      } catch (err) {
        setError("Failed to fetch blog post.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <MainLayout><p className="text-center">Loading...</p></MainLayout>;
  if (error) return <MainLayout><p className="text-center text-red-500">{error}</p></MainLayout>;
  if (!blog) return <MainLayout><p className="text-center">Blog not found.</p></MainLayout>;

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto py-10 px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          &lt; Back
        </button>
        <img
          src={blog.image || ""}
          alt={blog.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-700 mb-6">{blog.longDescription}</p>
        {blog.video && (
          <video src={blog.video} controls className="w-full rounded mb-4"></video>
        )}
        {blog.pdf && (
          <a
            href={blog.pdf}
            download
            className="text-green-600 underline"
          >
            📄 Download PDF Document
          </a>
        )}
      </div>
    </MainLayout>
  );
};

export default BlogDetail;