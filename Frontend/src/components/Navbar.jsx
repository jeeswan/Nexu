import React, { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom";
import { FaHome, FaSearch, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import assets from "../assets/assets";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="flex items-center justify-between py-2 font-medium gap-1">
            {/* Logo */}
            <Link to="/">
            <div className="flex items-center justify-between py-2 px-0">
                <h1 className="text-3xl font-bold">Nexu</h1>
            </div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink to="/" className="flex flex-col items-center gap-1">
                <FaHome size={25}/>
                <p>Home</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/search" className="flex flex-col items-center gap-1">
                <FaSearch size={25}/>
                <p>Search</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/profile" className="flex flex-col items-center gap-1">
                <FaUserCircle size={25}/>
                <p>Profile</p>
                <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
        </ul>

        {/* Right side: Theme toggle + Profile dropdown */}
        <div className="flex items-center gap-4 relative">
            {/* Dark/Light Theme Toggle */}
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 hover:ring-2 hover:ring-gray-400 transition">
                    <img src={assets.profile} alt="Profile" className="w-10 h-10 object-cover rounded-full" />
                </button>

                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-md shadow-lg py-2 z-50">
                    <NavLink
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                        onClick={() => setDropdownOpen(false)}
                    >
                        My Profile
                    </NavLink>
                    <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                        onClick={() => {
                        setDropdownOpen(false);
                        console.log("Logged out!");
                        }}
                    >
                        Logout
                    </button>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default Navbar;
