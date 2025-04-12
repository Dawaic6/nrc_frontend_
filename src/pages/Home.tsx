import NursingResearchBanner from "../components/researchBanner";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
     <div className="container mx-auto px-4 py-8">
      <NursingResearchBanner />
      {/* Other page content */}
    </div>
    </MainLayout>
  );
};

export default Home;
