import { ReactNode } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-40">
      <TopNav />
      <BottomNav />
      </div>
      <main className="flex-grow container mx-auto px-4 py-6 md:p-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;