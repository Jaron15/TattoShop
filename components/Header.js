import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="bg-zinc-900 shadow-md">
      <div className="max-w-7xl h-24 mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link className="text-2xl font-bold text-white" href='/'>Legion Tattoo</Link>
        </div>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="sm:hidden block text-white  focus:outline-none"
        >
          <svg
            className="h-9 w-9 fill-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isNavOpen ? (
              <path
              fill="white"
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
              <Link
                className="font-medium hover:text-base hover:transition-all hover:duration-500
                transform duration-500 ease-in-out text-white  px-3 py-2 rounded-md text-sm uppercase"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-medium hover:text-base hover:transition-all hover:duration-500
                transform duration-500 ease-in-out text-white  px-3 py-2 rounded-md text-sm uppercase"
                href="/artists"
              >
                Artists
              </Link>
            </li>
            <li>
              <Link
                className="font-medium hover:text-base hover:transition-all hover:duration-500
                transform duration-500 ease-in-out text-white  px-3 py-2 rounded-md text-sm uppercase"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <AnimatePresence>
      {isNavOpen && (
        <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 100, transition: {duration: .55, type: 'spring'} }}
        exit={{y: -200, opactiy: 0, transition: {duration: .13}}}
          className="sm:hidden bg-zinc-900 border-b border-gray-200 absolute w-full"
        >
          <ul className="py-3">
            <li>
              <Link
                className="block font-medium text-white px-3 py-2 rounded-md text-base uppercase"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block font-medium text-white px-3 py-2 rounded-md text-base uppercase"
                href="/artists"
              >
                Artists
              </Link>
            </li>
            <li>
              <Link
                className="block font-medium text-white px-3 py-2 rounded-md text-base uppercase"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Header;