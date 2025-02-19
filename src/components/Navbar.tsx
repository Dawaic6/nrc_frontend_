import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">NRC Website</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/publications" className="hover:underline">Publications</Link>
          <Link to="/team" className="hover:underline">Team</Link>
          <Link to="/donate" className="hover:underline">Donate</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/announcements" className="hover:underline">Announcements</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </div>
        <div>
          <Link to="/signin" className="px-4 py-2 bg-white text-blue-600 rounded">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
