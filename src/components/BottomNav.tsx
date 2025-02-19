import { Link } from "react-router-dom";
const BottomNav = () => {
    return (
        <nav className="stick top-0 z-10 bg-[#414868] flex justify-between items-center px-50 py-[20px]">
            <div className="space-x-10 text-white font-bold">
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
        </nav>
    );
};

export default BottomNav;