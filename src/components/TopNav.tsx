import { Link } from "react-router-dom";
import NRC from "../assets/NRC.jpg";

const TopNav = () => {
    return (
        <nav className="stick top-0 z-10 bg-white flex justify-between items-center px-4 py-[10px]">
            <div className="flex justify-between items-center px-5">
                <img src={NRC} alt="logo" className="w-[40px] h-[40px]" />
                <h1 className="text-green-700 font-bold">Nursing Research Club</h1>
            </div>
            <div className="flex gap-5 px-10">
                <Link
                    to="/signin"
                    className="px-4 py-1 bg-green-500 text-black font-bold rounded"
                >
                    Donate
                </Link>
                <Link
                    to="/signin"
                    className="px-4 py-1 bg-white text-black font-bold border-1 border-black-300"
                >
                    Signin
                </Link>
            </div>
        </nav>
    );
};

export default TopNav;
