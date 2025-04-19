import MainLayout from "../layouts/MainLayout";
import Banner from "../components/banner";
import NewsCard from "../components/Blog";
import { newsData } from "../components/newsDtat";


const Publications: React.FC = () => {
  return (
    <MainLayout>
      <div className="py-10 px-4 max-w-7xl mx-auto"><Banner /></div>
      <section  className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center ">Ongoing Research</h2>
        <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto mb-16"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center ">Published Research</h2>
         <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto mb-16"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

export default Publications;

// import React from "react";
// import Banner from "../components/Banner";
// import NewsCard from "../components/NewsCard";
// import { newsData } from "../data/news";

// const NewsAndInsights: React.FC = () => {
//   return (
//     <section className="py-10 px-4 max-w-7xl mx-auto">
//       <Banner />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

// export default NewsAndInsights;
