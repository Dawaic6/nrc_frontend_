import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
import NewsCard from "../components/Blog";
import bannerImage from "../assets/IMG-20250228-WA0014.jpg";

interface BlogPost {
  _id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image?: string;
  video?: string;
  pdf?: string;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://backend-nrc.onrender.com/api/blogs");
        const cleaned = res.data.data.map((item: BlogPost) => ({
          ...item,
          title: item.title?.replace(/^"|"$/g, "") || "Untitled",
          shortDescription: item.shortDescription?.replace(/^"|"$/g, "") || "No description available",
          longDescription: item.longDescription?.replace(/^"|"$/g, "") || "No content available",
        }));
        setBlogs(cleaned);
      } catch (err) {
        setError("Failed to fetch blog posts.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <MainLayout>
      {/* Banner Section */}
      <section>
        <div
          className="relative w-full h-80 rounded-lg overflow-hidden border border-green-500 mb-12"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex items-center px-6">
            <div className="text-black text-bold text-center max-w-xl bg-gray-200/40 p-6 shadow-lg">
              <h2 className="text-xl font-bold">News and Insights</h2>
              <p className="text-md font-medium">
                Explore our latest research insights, <br />
                groundbreaking discoveries, <br />
                and innovative solutions driving progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-10 px-4">
        <h2 className="text-3xl font-bold text-center">Latest News and Insights</h2>
        <div className="mt-4 h-1 w-20 bg-green-600 mx-auto mb-8"></div>

        {/* Loading and Error States */}
        {loading && <p className="text-center">Loading blogs...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {blogs.length > 0 ? (
            blogs.map((item) => (
              <NewsCard
                key={item._id}
                id={item._id}
                image={item.image || ""}
                video={item.video || undefined}
                title={item.title}
                shortDescription={(item.shortDescription || "").slice(0, 100) + "..."}
                pdf={item.pdf || undefined}
              />
            ))
          ) : (
            !loading && <p className="text-center">No blogs available.</p>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;