// import { NavLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
// import React, { useState } from "react";

// const BottomNav = () => {
//     const [isAboutHovered, setIsAboutHovered] = useState(false);
//     const [isServicesHovered, setIsServicesHovered] = useState(false);
//     const [isCommunityHovered, setIsCommunityHovered] = useState(false);
//     const [isResearchHovered, setIsResearchHovered] = useState(false);
//     const [isPublicationsHovered, setIsPublicationsHovered] = useState(false);
//     const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

//     const linkClass =
//         "hover:text-green-400 hover:underline transition duration-300";

//     const activeClass =
//         "text-green-400 underline"; // Color for the active route

//     const handleMouseEnter = (setHoverState: React.Dispatch<React.SetStateAction<boolean>>) => {
//         if (hoverTimeout) clearTimeout(hoverTimeout); // Clear any existing timeout
//         setHoverState(true);
//     };

//     const handleMouseLeave = (setHoverState: React.Dispatch<React.SetStateAction<boolean>>) => {
//         const timeout = setTimeout(() => setHoverState(false), 400); // Add delay
//         setHoverTimeout(timeout);
//     };

//     return (
//         <nav className="sticky top-0 z-10 bg-[#414868] px-16 py-5">
//             <div className="flex justify-center space-x-10 text-white font-bold text-sm relative">
//                 <NavLink to="/" className={({ isActive }) => isActive ? activeClass : linkClass}>Home</NavLink>
                
//                 {/* About Menu */}
//                 <div
//                     className="relative"
//                     onMouseEnter={() => handleMouseEnter(setIsAboutHovered)}
//                     onMouseLeave={() => handleMouseLeave(setIsAboutHovered)}
//                 >
//                     <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : linkClass}>
//                         About
//                     </NavLink>
//                     {isAboutHovered && (
//                         <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2">
//                             <HashLink
//                                 to="/about#Background"
//                                 smooth
//                                 className="block px-4 py-2 hover:bg-gray-100"
//                                 onClick={() => setIsAboutHovered(true)}
//                             >
//                                 Background
//                             </HashLink>
//                             <HashLink
//                                 to="/about#ourVision"
//                                 smooth
//                                 className="block px-4 py-2 hover:bg-gray-100"
//                                 onClick={() => setIsAboutHovered(true)}
//                             >
//                                 Our Vision
//                             </HashLink>
//                             <HashLink
//                                 to="/about#ourMission"
//                                 smooth
//                                 className="block px-4 py-2 hover:bg-gray-100"
//                                 onClick={() => setIsAboutHovered(true)}
//                             >
//                                 Our Mission
//                             </HashLink>
//                         </div>
//                     )}
//                 </div>

//                 {/* Services Menu */}
//                 <div
//                     className="relative"
//                     onMouseEnter={() => handleMouseEnter(setIsServicesHovered)}
//                     onMouseLeave={() => handleMouseLeave(setIsServicesHovered)}
//                 >
//                     <NavLink to="/services" className={({ isActive }) => isActive ? activeClass : linkClass}>
//                         Services
//                     </NavLink>
//                     {isServicesHovered && (
//                         <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2">
//                             {/* Community Awareness */}
//                             <div
//                                 className="relative"
//                                 onMouseEnter={() => handleMouseEnter(setIsCommunityHovered)}
//                                 onMouseLeave={() => handleMouseLeave(setIsCommunityHovered)}
//                             >
//                                 <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                                     Community Awareness
//                                 </span>
//                                 {isCommunityHovered && (
//                                     <div className="absolute top-0 left-full mt-0 bg-white text-gray-800 rounded-lg shadow-lg py-2">
//                                         <HashLink
//                                             to="/services#ncdsScreening"
//                                             smooth
//                                             className="block px-4 py-2 hover:bg-gray-100"
//                                             onClick={() => setIsCommunityHovered(false)}
//                                         >
//                                             NCDs Screening
//                                         </HashLink>
//                                         <HashLink
//                                             to="/services#srhEducation"
//                                             smooth
//                                             className="block px-4 py-2 hover:bg-gray-100"
//                                             onClick={() => setIsCommunityHovered(false)}
//                                         >
//                                             SRH Education
//                                         </HashLink>
//                                         <HashLink
//                                             to="/services#mentalHealthEducation"
//                                             smooth
//                                             className="block px-4 py-2 hover:bg-gray-100"
//                                             onClick={() => setIsCommunityHovered(false)}
//                                         >
//                                             Mental Health Education
//                                         </HashLink>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Research & Innovation */}
//                             <div
//                                 className="relative"
//                                 onMouseEnter={() => handleMouseEnter(setIsResearchHovered)}
//                                 onMouseLeave={() => handleMouseLeave(setIsResearchHovered)}
//                             >
//                                 <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                                     Research & Innovation
//                                 </span>
//                                 {isResearchHovered && (
//                                     <div className="absolute top-0 left-full mt-0 bg-white text-gray-800 rounded-lg shadow-lg py-2">
//                                         <HashLink
//                                             to="/services#innovativeProjects"
//                                             smooth
//                                             className="block px-4 py-2 hover:bg-gray-100"
//                                             onClick={() => setIsResearchHovered(false)}
//                                         >
//                                             Innovative Projects
//                                         </HashLink>
//                                         <HashLink
//                                             to="/services#researchFellowship"
//                                             smooth
//                                             className="block px-4 py-2 hover:bg-gray-100"
//                                             onClick={() => setIsResearchHovered(false)}
//                                         >
//                                             Research Fellowship
//                                         </HashLink>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//                 <NavLink to="/team" className={({ isActive }) => isActive ? activeClass : linkClass}>Team</NavLink>
//                 {/* Publications Menu */}
//                 <div
//                     className="relative"
//                     onMouseEnter={() => handleMouseEnter(setIsPublicationsHovered)}
//                     onMouseLeave={() => handleMouseLeave(setIsPublicationsHovered)}
//                 >
//                     <NavLink to="/publications" className={({ isActive }) => isActive ? activeClass : linkClass}>
//                         Publications
//                     </NavLink>
//                     {isPublicationsHovered && (
//                         <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2">
//                             <HashLink
//                                 to="/publications#ongoingResearch"
//                                 smooth
//                                 className="block px-4 py-2 hover:bg-gray-100"
//                                 onClick={() => setIsPublicationsHovered(false)}
//                             >
//                                 Ongoing Research
//                             </HashLink>
//                             <HashLink
//                                 to="/publications#publishedResearch"
//                                 smooth
//                                 className="block px-4 py-2 hover:bg-gray-100"
//                                 onClick={() => setIsPublicationsHovered(false)}
//                             >
//                                 Published Research
//                             </HashLink>
//                         </div>
//                     )}
//                 </div>

//                 <NavLink to="/dashboard" className={({ isActive }) => isActive ? activeClass : linkClass}>Blog</NavLink>
//                 <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : linkClass}>Contact</NavLink>
//                 <NavLink to="/announcements" className={({ isActive }) => isActive ? activeClass : linkClass}>Announcements</NavLink>
//             </div>
//         </nav>
//     );
// }; 

// export default BottomNav;


import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React, { useState } from "react";

type MenuType = 'about' | 'services' | 'community' | 'research' | 'publications' | null;

const BottomNav = () => {
  const [openMenu, setOpenMenu] = useState<MenuType>(null);
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  const linkClass = "hover:text-green-400 hover:underline transition duration-300";
  const activeClass = "text-green-400 underline";

  type MenuType = 'about' | 'services' | 'community' | 'research' | 'publications' | null;
  const handleMouseEnter = (menu: MenuType) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setOpenMenu(menu); 
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenMenu(null), 200);
    setHoverTimeout(timeout);
  };

  return (
    <nav className="sticky top-0 z-10 bg-[#414868] px-16 py-5">
      <div className="flex justify-center space-x-10 text-white font-bold text-sm relative">

        <NavLink to="/" className={({ isActive }) => isActive ? activeClass : linkClass}>Home</NavLink>

        {/* About Menu */}
        <div className="relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : linkClass}>About</NavLink>
          {openMenu === 'about' && (
            <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2">
              <HashLink to="/about#Background" smooth className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Background</HashLink>
              <HashLink to="/about#ourVision" smooth className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Our Vision</HashLink>
              <HashLink to="/about#ourMission" smooth className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Our Mission</HashLink>
            </div>
          )}
        </div>

        {/* Services Menu */}
        <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
          <NavLink to="/services" className={({ isActive }) => isActive ? activeClass : linkClass}>Services</NavLink>
          {openMenu === 'services' && (
            <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2">
              {/* Community Awareness */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('community')} onMouseLeave={handleMouseLeave}>
                <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Community Awareness</span>
                {openMenu === 'community' as MenuType && (
                  <div className="absolute top-0 left-full mt-0 bg-white text-gray-800 rounded-lg shadow-lg py-2">
                    <HashLink to="/services#ncdsScreening" smooth className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>NCDs Screening</HashLink>
                    <HashLink to="/services#srhEducation" smooth className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>SRH Education</HashLink>
                    <HashLink to="/services#mentalHealthEducation" smooth className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Mental Health Education</HashLink>
                  </div>
                )}
              </div>

              {/* Research & Innovation */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('research')} onMouseLeave={handleMouseLeave}>
                <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Research & Innovation</span>
                {openMenu === 'research' as MenuType && (
                  <div className="absolute top-0 left-full mt-0 bg-white text-gray-800 rounded-lg shadow-lg py-2">
                    <HashLink to="/services#innovativeProjects" smooth className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Innovative Projects</HashLink>
                    <HashLink to="/services#researchFellowship" smooth className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Research Fellowship</HashLink>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <NavLink to="/team" className={({ isActive }) => isActive ? activeClass : linkClass}>Team</NavLink>

        {/* Publications */}
        <div className="relative" onMouseEnter={() => handleMouseEnter('publications')} onMouseLeave={handleMouseLeave}>
          <NavLink to="/publications" className={({ isActive }) => isActive ? activeClass : linkClass}>Publications</NavLink>
          {openMenu === 'publications' && (
            <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2">
              <HashLink to="/publications#ongoingResearch" smooth className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Ongoing Research</HashLink>
              <HashLink to="/publications#publishedResearch" smooth className="block px-4 py-2 hover:bg-gray-100" onClick={() => setOpenMenu(null)}>Published Research</HashLink>
            </div>
          )}
        </div>

        <NavLink to="/blog" className={({ isActive }) => isActive ? activeClass : linkClass}>Blog</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : linkClass}>Contact</NavLink>
        <NavLink to="/announcements" className={({ isActive }) => isActive ? activeClass : linkClass}>Announcements</NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
