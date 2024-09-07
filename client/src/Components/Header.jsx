import React, { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For small screen menu
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navigate = useNavigate();
  const productsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [window.location.search]);

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  const handleSearchBlur = () => {
    setIsSearching(false);
  };

  const toggleProductsMenu = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle for small screen menu
  };

  return (
    <div className="bg-white border-b-2 border-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left section with Logo */}
        <div className="flex justify-start">
          <Link to="/" className="text-black">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/magicsprings-dbaf7.appspot.com/o/Screenshot_06-Sep_23-55-16_22656-removebg-preview.png?alt=media&token=b1e32080-b4f9-4b85-ba43-f7270004cf79"
              alt="Logo"
              className="h-14 w-18"
            />
          </Link>
        </div>

        {/* Center section with search bar */}
        <div className="flex-grow flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex items-center w-full max-w-md justify-center"
          >
            <input
              type="text"
              placeholder="Search our products"
              className={classNames(
                "bg-transparent border-b border-gray-300 focus:outline-none text-black w-30 sm:w-96"
              )}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
            <button className="ml-2 focus:outline-none">
              <FaSearch className="text-gray-500" />
            </button>
          </form>
        </div>

        {/* Right section with options for larger screens */}
        <div className="hidden md:flex justify-end space-x-4 items-center">
          <ul className="flex gap-3 sm:gap-6 text-black font-thin items-center space-x-2 sm:space-x-4">
            <li>
              <Link
                to="/ourproducts"
                className={classNames("cursor-pointer ", {
                  "hover:text-cyan-600": !isProductsOpen,
                  "text-gray-700": isProductsOpen,
                })}
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-cyan-600 transition-all duration-300"
              >
                About Us
              </Link>
            </li>
            {currentUser ? (
              <li>
                <Link
                  to="/profile"
                  className="hover:text-cyan-600 transition-all duration-300"
                >
                  Profile
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/signin"
                  className="hover:text-gray-700 transition-all duration-300"
                >
                  Sign in
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - visible when the hamburger is toggled */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link
                to="/ourproducts"
                className={classNames("cursor-pointer", {
                  "hover:text-gray-700": !isProductsOpen,
                  "text-gray-700": isProductsOpen,
                })}
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-700 transition-all duration-300"
              >
                About Us
              </Link>
            </li>
            {currentUser ? (
              <li>
                <Link
                  to="/profile"
                  className="hover:text-gray-700 transition-all duration-300"
                >
                  Profile
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/signin"
                  className="hover:text-gray-700 transition-all duration-300"
                >
                  Sign in
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
