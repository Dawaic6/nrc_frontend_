import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Publications from "../pages/Publication";
import Team from "../pages/Team";
import Blog from "../pages/Blog";
import Announcements from "../pages/Announcements";
import Dashboard from "../pages/Dashboard";
import SignUpForm from "../pages/signUp";
import SignInForm from "../pages/signIn";
import ContactForm from "../pages/contact";
import DonationForm from "../pages/Donate";

const WebRoutes = () => (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/publications" element={<Publications />} />
    <Route path="/team" element={<Team />} />
    <Route path="/donate" element={<DonationForm />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/announcements" element={<Announcements />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/signUp" element={<SignUpForm />} />
    <Route path="/signIn" element={<SignInForm />} />
    <Route path="/contact" element={<ContactForm />} />
  </>
);

export default WebRoutes;
