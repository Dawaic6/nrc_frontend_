import React from "react";
import image from "../assets/IMG-20250228-WA0014.jpg";
const Banner: React.FC = () => {
  return (
    <div
      className="relative w-full h-80 rounded-lg overflow-hidden border border-blue-500 mb-12"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex items-center px-6">
        <div className="text-white max-w-xl rounded-2xl bg-gray-200 bg-opacity-50 p-6 shadow-lg">
          <h2 className="text-xl font-bold">Publication</h2>
          <p className="text-md font-medium">
            "Explore our latest research insights, <br />
            groundbreaking discoveries, <br />
            and innovative solutions driving progress in <br />
            [your field]. Stay informed and inspired by our work!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
