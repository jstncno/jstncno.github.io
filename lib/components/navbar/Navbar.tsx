import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'

import Logo from '@jstncno/lib/components/logo/Logo';
import { SOCIAL_MEDIA } from '@jstncno/lib/constants';


export default function Navbar() {
  const {theme, setTheme} = useTheme();
  const [mobileMenuOpen, openMobileMenu] = useState(false);

  function toggle() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <nav className="bg-transparent w-screen absolute top-0 left-0">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4 max-w-full mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex col-start-2 col-span-1 md:col-end-6 items-center justify-between h-16">
          <div className="flex flex-grow items-center">
            <div className="flex-shrink-0 -mr-2">
              <Logo />
            </div>
            <div className="ml-2 flex flex-grow invisible md:visible items-center">
              <div className="ml-10 flex flex-grow items-end space-x-4 justify-end">
                {SOCIAL_MEDIA.map(({href, icon}, idx) => (
                  <a href={href} key={idx} target="_blank" className="text-primary dark:text-primary-dark hover:text-gray-300 hover:text-white rounded-md text-md font-medium">
                    {React.createElement(icon)}
                  </a>
                ))}
                <button className="invisible md:visible" onClick={toggle}>Toggle Theme</button>
              </div>
            </div>
            <div className="flex md:hidden rounded-md m-2 p-2">
              <button onClick={toggle}>Toggle Theme</button>
              {/* Mobile menu button */}
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="bg-transparent rounded-md m-2 p-2 inline-flex items-center justify-center text-primary dark:text-primary-dark hover:bg-background-light dark:hover:bg-background-dark focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  {mobileMenuOpen ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" onClick={() => openMobileMenu(false)} />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" onClick={() => openMobileMenu(true)} />
                  )}
                </Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0">
                  <Menu.Items className="absolute right-0 w-56 mt-2 z-10 p-2 bg-background-light dark:bg-background-dark rounded-md">
                    {SOCIAL_MEDIA.map(({href, icon, name}, idx) => (
                      <Menu.Item key={idx}>
                        <a href={href} target="_blank" className="text-primary flex dark:text-primary-dark hover:text-gray-500 dark:hover:text-gray-400 rounded-md text-md font-medium">
                          <span className="ml-1.5 my-auto">
                            {React.createElement(icon)}
                          </span>
                          <span className="mx-2 my-1">{name}</span>
                        </a>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
