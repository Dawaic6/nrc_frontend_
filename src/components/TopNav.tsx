import { Link } from "react-router-dom";
import NRC from "../assets/NRC.jpg";

const TopNav = () => {
    return (
        <nav className=" bg-white flex justify-between items-center px-4 py-2 md:py-[10px]">
            <div className="flex items-center gap-2 md:gap-4">
                <a href="/">
                <img src={NRC} alt="logo" className="w-8 h-8 md:w-10 md:h-10" />
                </a>
                {/* Hide title on small screens */}
                <h1 className="hidden md:block text-green-800 font-semibold text-sm md:text-base lg:text-lg">
                    Nursing Research Club
                </h1>
            </div>
            <div className="flex gap-2 md:gap-5 px-2 md:px-10">
                <Link
                    to="/donate"
                    className="px-2 md:px-4 py-1 bg-green-700 text-black font-semibold text-xs md:text-sm rounded"
                >
                    Donate
                </Link>
                <Link
                    to="/signIn"
                    className="px-2 md:px-4 py-1 bg-white text-black font-semibold text-xs md:text-sm border border-black"
                >
                    Signin
                </Link>
            </div>
        </nav>
    );
};

export default TopNav;
