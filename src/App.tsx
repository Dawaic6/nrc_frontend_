import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Announcements from "./pages/Announcements";
import DashboardLayout from "./layouts/DashboardLayout"; 
import SignUpForm from "./pages/signUp";
import SignInForm from "./pages/signIn";
import ContactForm from "./pages/contact";
import DonationForm from "./pages/Donate";
import Publication from "./pages/Publication";
import Research from "./pages/dashboard/research";

import Publications from "./pages/dashboard/publication";
import Donation from "./pages/dashboard/danation";
import Events from "./pages/dashboard/announcement"; 
import Users from "./pages/dashboard/users"; 
import LogOut from "./pages/dashboard/logOut";
import Help from "./pages/dashboard/help"; 
// import DashboardHome from "./pages/dashboard/dashboard"; 
import TeamDashboard from "./pages/dashboard/team"; 
import MessagesDashboard from "./pages/dashboard/mesage";
import DashboardAnnouncements from "./pages/dashboard/UpcomingEvents"; // Import the new component

// ProtectedRoute component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/signIn" replace />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/team" element={<Team />} />
        <Route path="/donate" element={<DonationForm />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/announcements" element={<Announcements />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
        <Route path="/signUp" element={<SignUpForm />} />
        <Route path="/signIn" element={<SignInForm />} />
        <Route path="/contact" element={<ContactForm />} />

        {/* Protected dashboard routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Publications />} />
          
          {/* <Route index element={<DashboardHome />} /> This will render at /dashboard */}
          {/* <Route path="publications" element={<Publications />} /> /dashboard/publications */}
          <Route path="research" element={<Research />} /> {/* /dashboard/research */}
          <Route path="donations" element={<Donation />} /> {/* /dashboard/donations */}
          <Route path="events" element={<Events />} /> {/* /dashboard/events */}
          <Route path="users" element={<Users />} /> {/* /dashboard/users */}
          <Route path="TeamDashboard" element={<TeamDashboard />} /> {/* /dashboard/team */}
          <Route path="logout" element={<LogOut />} /> {/* /dashboard/logout */}
          <Route path="help" element={<Help />} /> {/* /dashboard/help */}
          <Route path="Dashboardannouncements" element={<DashboardAnnouncements />} /> {/* /dashboard/announcements */}
          <Route path="message" element={<MessagesDashboard />} /> {/* /dashboard/help */}

        </Route>
      </Routes>
    </Router>
  );
};

export default App;