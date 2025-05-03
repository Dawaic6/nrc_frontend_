import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

type MenuType = 'about' | 'services' | 'community' | 'research' | 'publications' | null;

const BottomNav = () => {
  const [openMenu, setOpenMenu] = useState<MenuType>(null);
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = "hover:text-green-400 hover:underline transition duration-300";
  const activeClass = "text-green-400 underline";

  const handleMouseEnter = (menu: MenuType) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenMenu(null), 200);
    setHoverTimeout(timeout);
  };

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#414868] px-4 py-3 sticky top-0 z-10">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center text-white">
        <h1 className="font-bold text-lg">NRC</h1>
        <button onClick={toggleMobile} className="text-2xl">
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Menu Links */}
     <div
  className={`${
    mobileOpen ? "flex flex-col items-center space-y-4" : "hidden"
  } md:flex md:flex-row md:justify-center md:space-x-10 text-white font-bold text-sm relative`}
>

        <NavLink to="/" className={({ isActive }) => isActive ? activeClass : linkClass}>Home</NavLink>

        {/* About */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : linkClass}>About</NavLink>
          {openMenu === 'about' && (
            <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2">
              <HashLink to="/about#Background" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Background</HashLink>
              <HashLink to="/about#ourVision" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Our Vision</HashLink>
              <HashLink to="/about#ourMission" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Our Mission</HashLink>
            </div>
          )}
        </div>

       {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/services" className={({ isActive }) => isActive ? activeClass : linkClass}>Services</NavLink>
            {openMenu === 'services' && (
              <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2">
                <HashLink to="/services#communityawareness" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Community Awareness</HashLink>
                <HashLink to="/services#researchandinnovation" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Research and Innovation</HashLink>
                <HashLink to="/services#mentorshipwing" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Mentorship Wing</HashLink>
              </div>
            )}
          </div>
        <NavLink to="/team" className={({ isActive }) => isActive ? activeClass : linkClass}>Team</NavLink>

        {/* Publications */}
        <div className="relative" onMouseEnter={() => handleMouseEnter('publications')} onMouseLeave={handleMouseLeave}>
          <NavLink to="/publication" className={({ isActive }) => isActive ? activeClass : linkClass}>Publications</NavLink>
          {openMenu === 'publications' as MenuType && (
            <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2">
              <HashLink to="/publication#ongoingResearch" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Ongoing Research</HashLink>
              <HashLink to="/publication#publishedResearch" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Published Research</HashLink>
            </div>
          )}
        </div>

        <div className="md:inline-block block mt-2 md:mt-0">
  <NavLink to="/blog" className={({ isActive }) => isActive ? activeClass : linkClass}>Blog</NavLink>
</div>
<div className="md:inline-block block mt-2 md:mt-0">
  <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : linkClass}>Contact</NavLink>
</div>
<div className="md:inline-block block mt-2 md:mt-0">
  <NavLink to="/announcements" className={({ isActive }) => isActive ? activeClass : linkClass}>Announcements</NavLink>
</div>

      </div>
    </nav>
  );
};

export default BottomNav;
