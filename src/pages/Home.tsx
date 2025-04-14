import NursingResearchBanner from "../components/researchBanner";
import MainLayout from "../layouts/MainLayout";
import NewsCard from "../components/Blog";
import { newsData } from "../components/newsDtat";
import TwitterCard from "../components/twitter";


const Home = () => {
  return (
    <MainLayout>
     <div className="container mx-auto px-4 py-8">
      <NursingResearchBanner />
       <section className="py-10 px-4">
            <h2 className="text-3xl font-bold  text-center">
              Our Recent Publication
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
          <div className="min-h-screen bg-white flex items-center justify-center ">
      <TwitterCard />
    </div>

      {/* Other page content */}
    </div>
    </MainLayout>
  );
};

export default Home;
