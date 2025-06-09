import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface NewsCardProps {
  id: string; // Add an id or slug for navigation
  image: string;
  video?: string;
  title: string;
  shortDescription: string;

  pdf?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  image,
  title,
  shortDescription,
}) => {
  const [imageBase64, setImageBase64] = useState("");

  const convertImageToBase64 = async (url: string): Promise<string> => {
    const response = await fetch(url, { mode: "cors" });
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  };

  useEffect(() => {
    if (!image.startsWith("data:")) {
      convertImageToBase64(image).then(setImageBase64);
    } else {
      setImageBase64(image);
    }
  }, [image]);

  return (
    <>
      <div className="w-full max-w-xs text-center">
        <img
          src={imageBase64 || image}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h3 className="mt-2 font-bold text-sm">{title}</h3>
        <p className="text-gray-600 text-sm">{shortDescription}</p>
        <Link
          to={`/blog/${id}`}
          className="text-green-700 font-semibold hover:underline mt-1 inline-block"
        >
          Read more &nbsp; &gt;
        </Link>
      </div>
    </>
  );
};

export default NewsCard;
