
import { NavLink, Outlet } from "react-router-dom";
import { ReactNode } from "react";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold">NRC's</h1>
        </div>
        <nav className="flex-1">
        <ul>
            <li className="px-6 py-3 hover:bg-blue-700">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-green-400 font-bold" : "text-white"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="px-6 py-3 hover:bg-blue-700">
              <NavLink
                to="/publications"
                className={({ isActive }) =>
                  isActive ? "text-green-400 font-bold" : "text-white"
                }
              >
                Publications
              </NavLink>
            </li>
            <li className="px-6 py-3 hover:bg-blue-700">
              <NavLink
                to="/research"
                className={({ isActive }) =>
                  isActive ? "text-green-400 font-bold" : "text-white"
                }
              >
                Research
              </NavLink>
            </li>
            <li className="px-6 py-3 hover:bg-blue-700">
              <NavLink
                to="/donations"
                className={({ isActive }) =>
                  isActive ? "text-green-400 font-bold" : "text-white"
                }
              >
                Donations
              </NavLink>
            </li>
            <li className="px-6 py-3 hover:bg-blue-700">
              <NavLink
                to="/help"
                className={({ isActive }) =>
                  isActive ? "text-green-400 font-bold" : "text-white"
                }
              >
                Help
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet /> {/* renders child routes here */}
      </main>
    </div>
  );
};

export default DashboardLayout;
