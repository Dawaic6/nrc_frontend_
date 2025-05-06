import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/NRC.jpg";
import {
  FaBook,
  FaFlask,
  FaDonate,
  FaCalendarAlt,
  FaEnvelope,
  FaUsers,
  FaQuestionCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ReactNode } from "react";

interface MenuItemProps {
  to: string;
  icon: ReactNode;
  label: string;
  isLogout?: boolean;
}

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // Close sidebar when clicking outside (mobile only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        window.innerWidth < 640 // Mobile screen
      ) {
        closeSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-[#414868] text-white z-40 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:translate-x-0`}
      >
        <div className="p-6 flex items-center gap-4 border-b border-gray-500">
          <img src={logo} alt="logo" className="rounded-full w-12 h-12" />
          <h1 className="text-xl font-bold">NRC's</h1>
        </div>
        <nav className="flex flex-col h-full overflow-y-auto">
          <ul className="flex-1">
            <MenuItem to="/dashboard" icon={<FaBook />} label="Publications" />
            <MenuItem to="/dashboard/research" icon={<FaFlask />} label="Blogs" />
            <MenuItem to="/dashboard/donations" icon={<FaDonate />} label="Donations" />
            <MenuItem to="/dashboard/events" icon={<FaCalendarAlt />} label="Announcements" />
            <MenuItem to="/dashboard/message" icon={<FaEnvelope />} label="Messages" />
            <MenuItem to="/dashboard/TeamDashboard" icon={<FaUsers />} label="Team" />
            <MenuItem to="/dashboard/users" icon={<FaUsers />} label="Users" />
            <MenuItem to="/dashboard/help" icon={<FaQuestionCircle />} label="Help" />
            <MenuItem to="/dashboard/logout" icon={<FaSignOutAlt />} label="Log Out" isLogout />
          </ul>
        </nav>

        {/* Mobile close button */}
        <button
          className="sm:hidden absolute top-4 right-4 text-white"
          onClick={closeSidebar}
        >
          <FaTimes size={22} />
        </button>
      </aside>

      {/* Main content area */}
      <div className="sm:ml-64 flex-1 flex flex-col bg-white overflow-auto">
        {/* Mobile Topbar */}
        <div className="sm:hidden bg-[#414868] text-white p-4 flex justify-between items-center">
          <button onClick={toggleSidebar}>
            <FaBars size={22} />
          </button>
          <h1 className="text-lg font-semibold">NRC Dashboard</h1>
        </div>

        {/* Main content */}
        <main className="p-4 md:p-6 lg:p-8 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const MenuItem = ({ to, icon, label }: MenuItemProps) => {
  return (
    <li className="px-6 py-3 hover:bg-blue-700">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 ${isActive ? "text-green-400 font-bold" : "text-white"}`
        }
      >
        {icon}
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

export default DashboardLayout;
