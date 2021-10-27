import React, { useState } from 'react';
import { useTheme } from 'next-themes'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import Logo from '@jstncno/components/logo/Logo';


export default function Navbar() {
  const {theme, setTheme} = useTheme();
  const [mobileMenuOpen, openMobileMenu] = useState(false);

  function toggle() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <nav className="bg-transparent w-screen absolute top-0 left-0">
      <div className="max-w-full mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-grow items-center">
            <div className="flex-shrink-0 -mr-2">
              <Logo />
            </div>
            <div className="ml-2 flex flex-grow invisible items-center md:visible">
              <div className="ml-10 flex flex-grow items-end space-x-4 justify-end">
                <a href="#" className="text-primary dark:text-primary-dark hover:text-gray-300 hover:text-white rounded-md text-md font-medium"><FaTwitter /></a>

                <a href="#" className="text-primary dark:text-primary-dark hover:text-gray-300 hover:text-white rounded-md text-md font-medium"><FaGithub /></a>

                <a href="#" className="text-primary dark:text-primary-dark hover:text-gray-300 rounded-md text-md font-medium"><FaLinkedin /></a>
                <button className="invisible md:visible" onClick={toggle}>Toggle Theme</button>
              </div>
            </div>
            <div className="flex md:invisible">
              <button onClick={toggle}>Toggle Theme</button>
              {/* Mobile menu button */}
              <button type="button" className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-primary dark:text-primary-dark focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" onClick={() => openMobileMenu(false)} />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" onClick={() => openMobileMenu(true)} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
