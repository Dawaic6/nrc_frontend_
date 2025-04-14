import MainLayout from "../layouts/MainLayout";
import NewsCard from "../components/Blog";
import { newsData } from "../components/newsDtat";
import Banner from "../components/banner";

const  Blog: React.FC = () => {
  return (
    <MainLayout>
      <div className="py-10 px-4 max-w-7xl mx-auto"><Banner /></div>
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
