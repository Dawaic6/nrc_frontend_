import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Announcements from "./pages/Announcements";
// import Auth from "./pages/Auth";
// import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout"; // Import your DashboardLayout
import SignUpForm from "./pages/signUp";
import SignInForm from "./pages/signIn";
import ContactForm from "./pages/contact";
import DonationForm from "./pages/Donate";
import Publication from "./pages/Publication";
import Research from "./pages/dashboard/research";

import Publications from "./pages/dashboard/pulication";
import Donation from "./pages/dashboard/danation";
import Events from "./pages/dashboard/event"; 
import Users from "./pages/dashboard/users"; // You'll need to create these components
import LogOut from "./pages/dashboard/logOut";// You'll need to create these components
import Help from "./pages/dashboard/help"; // You'll need to create these components
import DashboardHome from "./pages/dashboard/dashboard"; // You might want a separate component for the dashboard ho
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

        {/* Dashboard routes - all nested under /dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} /> {/* This will render at /dashboard */}
          <Route path="publications" element={<Publications />} /> {/* /dashboard/publications */}
          <Route path="research" element={<Research />} /> {/* /dashboard/research */}
          <Route path="donations" element={<Donation />} /> {/* /dashboard/donations */}
          <Route path="events" element={<Events />} /> {/* /dashboard/events */}
          <Route path="users" element={<Users />} /> {/* /dashboard/users */}
          <Route path="logout" element={<LogOut />} /> {/* /dashboard/logout */}
          <Route path="help" element={<Help />} /> {/* /dashboard/help */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;