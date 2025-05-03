import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/NRC.jpg"; // Adjust the path to your logo image
import { 
  FaTachometerAlt, 
  FaBook, 
  FaFlask, 
  FaDonate,
  FaCalendarAlt,
  FaEnvelope,
  FaUsers,
  FaQuestionCircle,
  FaSignOutAlt 
} from "react-icons/fa";
import { ReactNode } from "react";

// Type definitions
interface MenuItemProps {
  to: string;
  icon: ReactNode;
  label: string;
  isLogout?: boolean;
}

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#414868] text-white flex flex-col">
      <div className="p-6 text-center flex gap-4  items-center">
          {/* Logo Image */}
          <img src={logo} alt="logo" className=" rounded-full w-[70px] h-[70px]" />
          {/* Dashboard Title */}
          <h1 className="text-4xl font-bold">NRC's</h1>
        </div>
        <nav className="flex-1">
          <ul>
            {/* <MenuItem 
              to="" 
              icon={<FaTachometerAlt className="mr-3" />} 
              label="Dashboard"
            /> */}
            <MenuItem 
              to="/dashboard/publications" 
              icon={<FaBook className="mr-3" />} 
              label="Publications"
            />
            <MenuItem 
              to="/dashboard/research" 
              icon={<FaFlask className="mr-3" />} 
              label="Blogs"
            />
            <MenuItem 
              to="/dashboard/donations" 
              icon={<FaDonate className="mr-3" />} 
              label="Donations"
            />
            <MenuItem 
              to="/dashboard/events" 
              icon={<FaCalendarAlt className="mr-3" />} 
              label="Announcements"
            />
             <MenuItem 
              to="/dashboard/message" 
              icon={<FaEnvelope className="mr-3" />}
              label="Messages"
            />
             <MenuItem 
              to="/dashboard/TeamDashboard" 
              icon={<FaUsers className="mr-3" />} 
              label="Team"
            />
            <MenuItem 
              to="/dashboard/users" 
              icon={<FaUsers className="mr-3" />} 
              label="Users"
            />
            <MenuItem 
              to="/dashboard/help" 
              icon={<FaQuestionCircle className="mr-3" />} 
              label="Help"
            />
            <MenuItem 
              to="/dashboard/logout" 
              icon={<FaSignOutAlt className="mr-3" />} 
              label="Log Out"
              isLogout={true}
            />
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

const MenuItem = ({ to, icon, label, isLogout = false }: MenuItemProps) => {
  return (
    <li className={`px-6 py-3 hover:bg-blue-700 ${isLogout ? "mt-auto" : ""}`}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center ${isActive ? "text-green-400 font-bold" : "text-white"}`
        }
      >
        {icon}
        <span className="ml-3">{label}</span>
      </NavLink>
    </li>
  );
};

export default DashboardLayout;