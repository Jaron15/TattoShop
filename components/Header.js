import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold text-gray-900">Legion Tattoo</h1>
        </div>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="sm:hidden block text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isNavOpen ? (
              <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12H19V13H5V12Z"
            />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 6.75H19.5V8.25H4.5V6.75ZM4.5 10.5H19.5V12H4.5V10.5ZM4.5 14.25H19.5V15.75H4.5V14.25Z"
              />
            )}
          </svg>
        </button>
        <nav className="sm:block hidden">
          <ul className="flex">
            <li>
              <a
                className="font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm uppercase"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm uppercase"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm uppercase"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isNavOpen && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 100, transition: {duration: .55, type: 'spring'} }}
          className="sm:hidden bg-white border-b border-gray-200"
        >
          <ul className="py-3">
            <li>
              <a
                className="block font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-base uppercase"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-base uppercase"
                href="#"
              >
                Artists
              </a>
            </li>
            <li>
              <a
                className="block font-medium text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-base uppercase"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;