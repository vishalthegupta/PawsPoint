import React, { useState } from 'react';
import logo from '../images/logo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-gray-700 py-2.5 w-full h-24">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl h-full px-4 mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            className="h-12 w-16 mr-3"
            alt="Landwind Logo"
          />
          <span className="self-center text-2xl font-title_font font-bold whitespace-nowrap text-white">
            PawsPoint
          </span>
        </a>

        {/* Right Section - Download Button and Menu Toggle Button */}
        <div className="flex items-center lg:order-2">

          <button
            class="group relative flex flex-row items-center bg-[#212121] justify-center gap-2 rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
          >
            <div
              class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"
            ></div>
            <div
              class="shrink-0 bg-border w-[1px] h-4"
              role="none"
              data-orientation="vertical"
            ></div>
            <span
              class="inline animate-gradient whitespace-pre bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%] text-center"
            >Explore</span
            >
            <svg
              stroke-linecap="round"
              class="text-[#9c40ff]"
              stroke-width="1.5"
              aria-hidden="true"
              viewBox="0 0 10 10"
              height="11"
              width="11"
              stroke="currentColor"
              fill="none"
            >
              <path
                stroke-linecap="round"
                d="M0 5h7"
                class="opacity-0 transition group-hover:opacity-100"
              ></path>
              <path
                stroke-linecap="round"
                d="M1 1l4 4-4 4"
                class="transition group-hover:translate-x-[3px]"
              ></path>
            </svg>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-400 rounded-lg lg:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-controls="mobile-menu-2"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${isMobileMenuOpen ? 'block' : 'hidden'
            } items-center justify-between bg-gray-900 z-40 w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-500 lg:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-400 border-b border-gray-600 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-500 lg:p-0"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-400 border-b border-gray-600 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-500 lg:p-0"
              >
                Marketplace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-400 border-b border-gray-600 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-500 lg:p-0"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-400 border-b border-gray-600 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-500 lg:p-0"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-400 border-b border-gray-600 hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-500 lg:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

