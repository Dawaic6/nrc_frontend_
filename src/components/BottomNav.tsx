import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

const BottomNav = () => {
    const [isAboutHovered, setIsAboutHovered] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const linkClass =
        "hover:text-green-400 hover:underline transition duration-300";

    const activeClass =
        "text-green-400 underline"; // Color for the active route

    const handleMouseEnter = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout); // Clear any existing timeout
        setIsAboutHovered(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => setIsAboutHovered(false), 200); // Add delay
        setHoverTimeout(timeout);
    };

    return (
        <nav className="sticky top-0 z-10 bg-[#414868] px-16 py-5">
            <div className="flex justify-center space-x-10 text-white font-bold text-sm relative">
                <NavLink to="/" className={({ isActive }) => isActive ? activeClass : linkClass}>Home</NavLink>
                <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : linkClass}>
                        About
                    </NavLink>
                    {isAboutHovered && (
                        <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2">
                            <NavLink
                                to="/about#Background"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Background
                            </NavLink>
                            <NavLink
                                to="/about#ourVision"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Our Vision
                            </NavLink>
                            <NavLink
                                to="/about#ourMission"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Our Mission
                            </NavLink>
                        </div>
                    )}
                </div>
                <NavLink to="/services" className={({ isActive }) => isActive ? activeClass : linkClass}>Services</NavLink>
                <NavLink to="/publications" className={({ isActive }) => isActive ? activeClass : linkClass}>Publications</NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? activeClass : linkClass}>Blog</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : linkClass}>Contact</NavLink>
                <NavLink to="/announcements" className={({ isActive }) => isActive ? activeClass : linkClass}>Announcements</NavLink>
            </div>
        </nav>
    );
};

export default BottomNav;