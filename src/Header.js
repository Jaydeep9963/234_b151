import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isSticky ? "fixed" : "sticky"
      } top-0 z-10 bg-white shadow-md w-full px-2 sm:px-1 md:px-2 lg:px-8`}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-3">
        <div className="flex w-full sm:w-auto mt-2">
          <button
            className="text-gray-800 sm:hidden mr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`h-6 w-5 transition-transform ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link to="/">
            <img
              src="https://logoipsum.com/"
              alt="Your Site Name"
              className="h-10"
            />
          </Link>
          <h1 className="text-xl font-bold text-gray-800 ml-2 sm:ml-auto">
            Your Site Name
          </h1>
        </div>

        <nav
          className={`${isMenuOpen ? "block" : "hidden"} sm:block mt-4 sm:mt-0`}
        >
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-gray-700 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-700 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="hover:text-gray-700 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/subscribe"
                className="hover:text-gray-700 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center space-x-4 ml-1">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-2 border rounded-md text-sm md:text-base"
          />
          <button className="border border-gray-800 text-gray-800 font-medium py-2 px-2 md:px-4 rounded-md hover:bg-gray-100 transition-transform text-sm md:text-base">
            Sign In
          </button>
          <button className="bg-orange-500 text-white font-bold py-2 px-4 md:px-6 rounded-md hover:bg-orange-600 transition-transform shadow-md text-sm md:text-base">
            Start Writing
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
