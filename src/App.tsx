import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Publications from "./pages/Publication";
import Team from "./pages/Team";
import Donate from "./pages/Donate";
import Blog from "./pages/Blog";
import Announcements from "./pages/Announcements";
import Auth from "./pages/Auth";  // Updated import for combined Auth page
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/team" element={<Team />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/auth" element={<Auth />} /> {/* Combined Auth page route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
