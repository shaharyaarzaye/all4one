import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsServicesDropdownOpen, setIsProjectsServicesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdown when main menu is closed
    if (isMenuOpen) {
      setIsProjectsServicesDropdownOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProjectsServicesDropdownOpen(false); // Also close dropdown
  };

  return (
    <>
      {/* Main Navbar Bar (always visible) */}
      <nav className="absolute top-0 left-0 w-full z-20 bg-transparent py-4 px-8 md:px-16 flex items-center justify-between"> {/* Reverted to bg-transparent */}
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <div className="w-60 h-15 flex items-center justify-center text-lg font-bold">
            <img src="./LogoW.png" alt="Company Logo" className="h-full w-auto object-contain" />
          </div>
        </div>

        {/* Hamburger Icon for ALL Screens */}
        <div>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white z-30 relative"
            aria-label="Toggle navigation"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                // Cross icon when menu is open
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon when menu is closed
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Blurred Overlay for when menu is open (before menu, so menu is always behind) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-[2px] z-30 transition-all duration-700 ease-in-out pointer-events-auto"
          style={{ backdropFilter: 'blur(4px)' }}
          onClick={closeMenu}
        ></div>
      )}

      {/* Side Navigation Menu (the "dialog") */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-black text-white z-40 shadow-lg
          transform transition-transform duration-1000 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end pt-5 pr-6"> {/* Container for close button inside side menu */}
          <button
            onClick={closeMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close navigation"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="pt-8 px-8"> {/* Adjusted padding top and horizontal padding for links */}
          <ul className="flex flex-col space-y-6 text-xl font-semibold"> {/* Increased space-y and text size */}
            <li><a href="#" className="block py-3 px-4 hover:bg-gray-700 rounded transition-colors" onClick={closeMenu}>Home</a></li> {/* Increased padding */}

            {/* Project/Services with Dropdown */}
            <li>
              <button
                onClick={() => setIsProjectsServicesDropdownOpen(!isProjectsServicesDropdownOpen)}
                className="flex items-center justify-between w-full py-3 px-4 hover:bg-gray-700 rounded transition-colors focus:outline-none" // Increased padding
              >
                <span>Project/Services</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${isProjectsServicesDropdownOpen ? 'rotate-180' : ''}`} // Increased icon size
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isProjectsServicesDropdownOpen && (
                <ul className="pl-6 mt-3 space-y-3 text-lg"> {/* Increased padding, space-y, and text size */}
                  <li><a href="#" className="block py-2 px-4 hover:bg-gray-600 rounded transition-colors" onClick={closeMenu}>Service A</a></li> {/* Increased padding */}
                  <li><a href="#" className="block py-2 px-4 hover:bg-gray-600 rounded transition-colors" onClick={closeMenu}>Service B</a></li>
                  <li><a href="#" className="block py-2 px-4 hover:bg-gray-600 rounded transition-colors" onClick={closeMenu}>Service C</a></li>
                </ul>
              )}
            </li>

            <li><a href="#" className="block py-3 px-4 hover:bg-gray-700 rounded transition-colors" onClick={closeMenu}>Our Projects</a></li>
            <li><a href="#" className="block py-3 px-4 hover:bg-gray-700 rounded transition-colors" onClick={closeMenu}>Clients</a></li>
            <li><a href="#" className="block py-3 px-4 hover:bg-gray-700 rounded transition-colors" onClick={closeMenu}>News and PR</a></li>
            <li><a href="#" className="block py-3 px-4 hover:bg-gray-700 rounded transition-colors" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
      {/* ...existing code... */}
    </>
  );
};

export default Navbar;