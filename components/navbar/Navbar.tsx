import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTheme } from '../../hooks';

export default function Navbar() {
  const [theme, setTheme] = useTheme();
  const [mobileMenuOpen, openMobileMenu] = useState(false);

  useEffect(() => console.log({theme}));

  function toggle() {
    const th = theme === 'light' ? 'dark' : 'light';
    setTheme(th);
  }

  return (
    <nav className="bg-transparent w-screen">
      <div className="max-w-full mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-grow items-center">
            <div className="flex-shrink-0 -mr-2">
              <Image src="/jstncno-light.png" alt="jstncno.dev" width={96} height={54}/>
            </div>
            <div className="ml-2 flex flex-grow invisible items-center md:visible">
              <div className="ml-10 flex flex-grow items-end space-x-4 justify-end">
                <a href="#" className="text-gray-700 hover:text-gray-300 hover:text-white rounded-md text-md font-medium"><FaTwitter /></a>

                <a href="#" className="text-gray-700 hover:text-gray-300 hover:text-white rounded-md text-md font-medium"><FaGithub /></a>

                <a href="#" className="text-gray-700 hover:text-gray-300 rounded-md text-md font-medium"><FaLinkedin /></a>
                <button onClick={toggle}>Toggle Theme</button>
              </div>
            </div>
            <div className="flex md:invisible">
              {/* Mobile menu button */}

              <button type="button" className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-800 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
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
