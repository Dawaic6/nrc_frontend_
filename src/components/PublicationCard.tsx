import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface PublicationCardProps {
  id: string;
  image: string;
  video?: string;
  title: string;
  shortDescription: string;
  pdf?: string;
}

const PublicationCard: React.FC<PublicationCardProps> = ({
  id,
  image,
  title,
  shortDescription,
}) => {
  const [imageBase64, setImageBase64] = useState("");

  useEffect(() => {
    if (!image.startsWith("data:")) {
      fetch(image)
        .then(res => res.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onloadend = () => setImageBase64(reader.result as string);
          reader.readAsDataURL(blob);
        });
    } else {
      setImageBase64(image);
    }
  }, [image]);

  return (
    <div className="w-full max-w-xs text-center">
      <img
        src={imageBase64 || image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="mt-2 font-bold text-sm">{title}</h3>
      <p className="text-gray-600 text-sm">{shortDescription}</p>
      <Link
        to={`/publications/${id}`}
        className="text-green-700 font-semibold hover:underline mt-1 inline-block"
      >
        Read more &nbsp; &gt;
      </Link>
    </div>
  );
};

export default PublicationCard;
