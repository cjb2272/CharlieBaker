import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useSpring, animated } from '@react-spring/web';
import { Bars3Icon } from '@heroicons/react/24/solid'

const AnimatedMenuItems = animated(MenuItems);

const HamburgerNavigation = () => {

  const [styles, api] = useSpring(() => ({
    opacity: 0,
    transform: 'scale(0.95)',
    config: { tension: 200, friction: 20 },
    
  }));

  return (
    <Menu>
      {({ open }) => {
        // api.start starts animation with the configuration provided
        api.start({
          opacity: open ? 1 : 0,
          transform: open ? 'scale(1)' : 'scale(0.95)',
        });

        return (
          <>
            <MenuButton className="p-2 rounded-full bg-light">
              {/* Hamburger Icon */}
              <Bars3Icon className="size-12" />

              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg> */}

            </MenuButton>
            {/* In Reach Spring, an 'animated' component recieves SpringValues through the style prop */}
            <AnimatedMenuItems
              style={styles}
              className="absolute mt-2 space-y-2 text-xl"
              //anchor="top-left"   //used for positioning MenuItems relative to MenuButton
            >
              <MenuItem className="">
                  <a
                    href="#sectionContact"
                    className={`inline-block px-4 py-2 bg-light rounded-full`}
                  >
                    Contact
                  </a>
              </MenuItem>
              <MenuItem className="">
                  <a
                    href="#sectionAbout"
                    className={`inline-block px-4 py-2 bg-light rounded-full`}
                  >
                  About
                  </a>
              </MenuItem>
              <MenuItem className="">
                <a
                  href="#sectionProjects"
                  className={`inline-block px-4 py-2 bg-light rounded-full`}
                  >
                  Projects
                </a>
              </MenuItem>
            </AnimatedMenuItems>
          </>
        );
      }}
    </Menu>
  );
};

export default HamburgerNavigation;