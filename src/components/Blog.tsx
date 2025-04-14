import React from "react";

interface NewsCardProps {
  Image: string;
  title: string;
  description: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ Image, title, description, link }) => {
  return (
    <div className="w-full max-w-xs text-center">
      <img src={Image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="mt-2 font-bold text-sm">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <a href={link} className="text-blue-700 font-semibold hover:underline mt-1 inline-block">
        Read more &nbsp; &gt;
      </a>
    </div>
  );
};

export default NewsCard;
