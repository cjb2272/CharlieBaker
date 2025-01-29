import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useSpring, animated } from '@react-spring/web';
import { Bars3Icon } from '@heroicons/react/24/solid'

const AnimatedMenuButton = animated(MenuButton);
const AnimatedMenuItems = animated(MenuItems);
const AnimatedContainer = animated.div;

// deviceInputType prop equals 'Touch Input' OR 'Mouse Input'
const HamburgerNavigation = ({ deviceInputType }) => {

  const [buttonStyles, buttonApi] = useSpring(() => ({
    from: {boxShadow: '0px 3px 2px 2px rgba(0,0,0,0.3)'},
    config: { tension: 200, friction: 20 }
  }));

  const [menuItemStyles, menuItemApi] = useSpring(() => ({  // opacity and transform values interpreted as the 'from'
    opacity: 0,
    transform: 'scale(0.95)',
    config: { tension: 200, friction: 20 } // this is a basic object configuration applied to all props - opacity and transform
  }));

  // Spring for background container
  const [containerStyles, containerApi] = useSpring(() => ({
    from: {
      backgroundColor: 'rgba(191, 252, 249, 0)', 
      backdropFilter: "blur(0px)",
    },
    config: { tension: 200, friction: 20 }
  }));

  return (
    <Menu> {/*HeadlessUI Menu Component automatically tracks whether menu is open or closed */}
      {({ open }) => { //open is HeadlessUI internal state

        buttonApi.start({
          boxShadow: open ? '0px 0px 0px 0px rgba(0,0,0,0.3)' : '0px 3px 2px 2px rgba(0,0,0,0.3)'
        });

        containerApi.start({
          backgroundColor: open ? 'rgba(191, 252, 249, 0.5)' : 'rgba(191, 252, 249, 0)',
          backdropFilter: open ? "blur(4px)" : "blur(0px)"
        });
        
        // api.start triggers whenever the state of open changes
        menuItemApi.start({
          opacity: open ? 1 : 0,
          transform: open ? 'scale(1)' : 'scale(0.95)',
        });

        return (
          <>
            <AnimatedContainer
              style={{...containerStyles}}
              className='p-2 rounded-xl'
            >
              <AnimatedMenuButton
                style={{...buttonStyles}}
                className="p-2 rounded-full bg-light"
              >
                <Bars3Icon className="size-12"/> {/* Hamburger Icon */}
              </AnimatedMenuButton>
              {/* In React Spring, an 'animated' component recieves SpringValues through the style prop */}
              <AnimatedMenuItems
                style={menuItemStyles}
                className="flex flex-col items-start mt-2 space-y-2 text-xl" //MenuItems is a div by default
              >
                <MenuItem className="">
                  <a
                    href="#sectionContact"
                    className={`px-4 py-2 bg-light rounded-full`}
                  >
                    Contact
                  </a>
                </MenuItem>
                <MenuItem className="">
                  <a
                    href="#sectionAbout"
                    className={`px-4 py-2 bg-light rounded-full`}
                  >
                  About
                  </a>
                </MenuItem>
                <MenuItem className="">
                  <a
                    href="#sectionProjects"
                    className={`px-4 py-2 bg-light rounded-full`}
                    >
                    Projects
                  </a>
                </MenuItem>
              </AnimatedMenuItems>
            </AnimatedContainer>
          </>
        );
      }}
    </Menu>
  );
};

export default HamburgerNavigation;