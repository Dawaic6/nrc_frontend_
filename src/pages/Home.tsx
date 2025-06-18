import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";
import NursingResearchBanner from "../components/researchBanner";
import NewsCard from "../components/Blog";
import TwitterCard from "../components/twitter";
import PublicationCard from "../components/PublicationCard";

interface BlogPost {
  _id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image?: string;  // Full Cloudinary URL expected
  video?: string;  // Full Cloudinary URL expected
  pdf?: string;    // Full Cloudinary URL expected
  createdAt?: string;
}

const Home: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [publications, setPublications] = useState<BlogPost[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [loadingPublications, setLoadingPublications] = useState(true);
  const [errorBlogs, setErrorBlogs] = useState<string | null>(null);
  const [errorPublications, setErrorPublications] = useState<string | null>(null);

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

        const sortedBlogs = cleaned.sort((a: { createdAt: any; }, b: { createdAt: any; }) => {
          const dateA = new Date(a.createdAt || "").getTime();
          const dateB = new Date(b.createdAt || "").getTime();
          return dateB - dateA;
        });

        setBlogs(sortedBlogs.slice(0, 6));
      } catch (err) {
        setErrorBlogs("Failed to fetch blog posts.");
        console.error(err);
      } finally {
        setLoadingBlogs(false);
      }
    };

    const fetchPublications = async () => {
      try {
        const res = await axios.get("https://backend-nrc.onrender.com/api/publications");
        const cleaned = res.data.data.map((item: BlogPost) => ({
          ...item,
          title: item.title?.replace(/^"|"$/g, "") || "Untitled",
          shortDescription: item.shortDescription?.replace(/^"|"$/g, "") || "No description available",
          longDescription: item.longDescription?.replace(/^"|"$/g, "") || "No content available",
        }));

        const sortedPublications = cleaned.sort((a: { createdAt: any; }, b: { createdAt: any; }) => {
          const dateA = new Date(a.createdAt || "").getTime();
          const dateB = new Date(b.createdAt || "").getTime();
          return dateB - dateA;
        });

        setPublications(sortedPublications.slice(0, 6));
      } catch (err) {
        setErrorPublications("Failed to fetch publications.");
        console.error(err);
      } finally {
        setLoadingPublications(false);
      }
    };

    fetchBlogs();
    fetchPublications();
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto py-1">
        <NursingResearchBanner />

        {/* Section: Recent Publications */}
        <section className="py-10 px-4">
          <h2 className="text-3xl font-bold text-center">Our Recent Publications</h2>
          <div className="mt-4 h-1 w-20 bg-green-600 mx-auto mb-8"></div>

          {loadingPublications && <p className="text-center">Loading publications...</p>}
          {errorPublications && <p className="text-center text-red-500">{errorPublications}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {publications.length > 0 ? (
              publications.map((item) => (
                <PublicationCard
                  key={item._id}
                  id={item._id}
                  image={item.image || ""} 
                  title={item.title}
                  shortDescription={(item.shortDescription || "").slice(0, 100) + "..."}
                />
              ))
            ) : (
              !loadingPublications && <p className="text-center">No publications available.</p>
            )}
          </div>
        </section>

        {/* Section: Latest News and Insights */}
        <section className="py-10 px-4">
          <h2 className="text-3xl font-bold text-center">Latest News and Insights</h2>
          <div className="mt-4 h-1 w-20 bg-green-600 mx-auto mb-8"></div>

          {loadingBlogs && <p className="text-center">Loading news...</p>}
          {errorBlogs && <p className="text-center text-red-500">{errorBlogs}</p>}

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
              !loadingBlogs && <p className="text-center">No news available.</p>
            )}
          </div>
        </section>

        {/* Section: Upcoming Events */}
        <section className="py-10 px-4">
          <h2 className="text-3xl font-bold text-center">Upcoming Events</h2>
          <div className="mt-4 h-1 w-20 bg-green-600 mx-auto mb-8"></div>

          {loadingBlogs && <p className="text-center">Loading news...</p>}
          {errorBlogs && <p className="text-center text-red-500">{errorBlogs}</p>}

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
              !loadingBlogs && <p className="text-center">No news available.</p>
            )}
          </div>
        </section>

        {/* Section: Twitter */}
        <div className="min-h-screen bg-white flex items-center justify-center">
          <TwitterCard />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
