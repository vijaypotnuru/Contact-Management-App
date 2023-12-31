import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  // State to control mobile menu visibility
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Get current location using React Router's useLocation
  const location = useLocation();
  const { pathname } = location;

  // Determine button classes based on current path
  const contactButtonClass =
    pathname === "/"
      ? "bg-violet-100 border-violet-200 text-violet-400 font-bold"
      : "";
  const chartsButtonClass =
    pathname !== "/"
      ? "bg-violet-100 border-violet-200 text-violet-400 font-bold"
      : "";

  // Set header title based on current path
  const headerTitle = pathname === "/" ? "Contacts Manager" : "Charts & Maps";

  // Handle mobile menu toggling
  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="flex flex-col items-center p-1 border-b-2 fixed w-full bg-white">
      {/* Desktop Header */}
      <div className="flex items-center p-1 w-full">
        {/* Logo */}
        <div className="flex items-center pl-6 p-0 cursor-pointer">
          <Link to="/">
            <img
              className="w-auto h-auto m-0 p-0"
              src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1692858500/colorfilterlogo_qugeno.png"
              alt="logo"
            />
          </Link>
        </div>

        {/* Header Title */}
        <div className="w-full flex items-center justify-center p-0">
          <h1 className="text-violet-500 font-bold text-2xl portrait:text-lg p-0 m-0">
            {headerTitle}
          </h1>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={handleMobileMenu}
          type="button"
          className="landscape:hidden w-12 mr-4"
        >
          <GiHamburgerMenu className="text-4xl text-violet-500" />
        </button>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="w-full flex flex-col justify-around items-center px-5 landscape:hidden">
          {/* Contacts Link */}
          <Link to="/" className="w-full m-2">
            <button
              className={`${contactButtonClass} w-full h-full px-6 pt-2 pb-2 border-2 rounded-lg`}
              type="button"
            >
              Contacts
            </button>
          </Link>
          {/* Charts & Maps Link */}
          <Link to="/charts-maps" className="w-full m-2">
            <button
              className={`${chartsButtonClass} w-full pt-2 pb-2 border-2 rounded-lg`}
              type="button"
            >
              Charts & Maps
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

// Export the Header component as the default export
export default Header;
