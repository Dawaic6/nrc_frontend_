import MainLayout from "../layouts/MainLayout";
import NewsCard from "../components/Blog";
import { newsData } from "../components/newsDtat";
// import Banner from "../components/banner";
import image from "../assets/IMG-20250228-WA0014.jpg"; 

const  Blog: React.FC = () => {
  return (
    <MainLayout>
      
      <section> <div
      className="relative w-full h-80 rounded-lg overflow-hidden border border-blue-500 mb-12"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex items-center px-6">
        <div className="text-black  text-bold text-center max-w-xl rounde  bg-gray-200/40 p-6 shadow-lg">
          <h2 className="text-xl font-bold">News and Insights</h2>
          <p className="text-md font-medium">
            "Explore our latest research insights, <br />
            groundbreaking discoveries, <br />
            and innovative solutions driving progress in <br />
            [your field]. Stay informed and inspired by our work!"
          </p>
        </div>
      </div>
    </div></section>
      <section className="py-10 px-4">
      <h2 className="text-3xl font-bold  text-center">
        Latest News and Insights
      </h2>
      <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {newsData.map((item, index) => (
          <NewsCard
            key={index}
            Image={item.Image}
            title={item.title}
            description={item.description}
            longDescription={item.longDescription}
            link={item.link}
          />
        ))}
      </div>
    </section>
    </MainLayout>
  );
};

export default Blog;

// import React from "react";
// import NewsCard from "../components/NewsCard";
// import { newsData } from "../data/news";

// const NewsSection: React.FC = () => {
//   return (
//     <section className="py-10 px-4">
//       <h2 className="text-2xl font-semibold mb-8 text-center">
//         Latest News and Insights
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
//         {newsData.map((item, index) => (
//           <NewsCard
//             key={index}
//             image={item.image}
//             title={item.title}
//             description={item.description}
//             link={item.link}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default NewsSection;
