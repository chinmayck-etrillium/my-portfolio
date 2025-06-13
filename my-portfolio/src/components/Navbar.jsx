import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "SIP Calculator", path: "/sip" },
  
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-semibold text-indigo-600 tracking-tight"
          >
            thewealthmanager<span className="text-gray-800">.in</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition shadow-sm"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - always mounted */}
      <div
        className={`
          md:hidden bg-white border-t border-gray-100 px-4
          transform transition-all duration-300 ease-in-out origin-top
          ${
            isOpen
              ? "scale-y-100 opacity-100 pointer-events-auto py-4 space-y-2"
              : "scale-y-0 opacity-0 pointer-events-none h-0"
          }
        `}
        style={{ transformOrigin: "top" }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="block text-sm text-gray-700 font-medium hover:text-indigo-600 transition"
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md text-sm hover:bg-indigo-700 transition shadow-sm"
        >
          Book a Call
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
