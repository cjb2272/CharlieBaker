import React, {useEffect, useRef } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useSpring, animated } from '@react-spring/web';
import { Bars3Icon } from '@heroicons/react/24/solid'

const AnimatedMenuButton = animated(MenuButton);
const AnimatedMenuItems = animated(MenuItems);
const AnimatedContainer = animated.div;

// closeMenu is a prop that when set to true, means the menu should close
const HamburgerNavigation = ( {closeMenu} ) => { 
  //const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

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

  const handleSmoothScroll = (e, targetID) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      targetElement.scrollIntoView({behavior: "smooth"});
    }
  };

  // Programatically Close the Hamburger Menu based external menuClose prop
  useEffect(() => {
    if (menuButtonRef.current) { //if DOM element has initalized 
      // Trigger a click event on the Menu.Button to Close the menu
      const isHamburgerMenuCurrentlyOpen = menuButtonRef.current.getAttribute('aria-expanded') === 'true';
      if (closeMenu && isHamburgerMenuCurrentlyOpen) {
        //console.log("!!! Programatically Closing Menu with menuButtonRef.current.click(); !!!"); 
        setTimeout(() => { //avoiding flush sync
          menuButtonRef.current.click();
          // setTimeout delays execution until after React has completed its current rendering cycle.\
          // This prevents React from attempting to flush updates synchronously during rendering.
        }, 0);
      }
    }
  }, [closeMenu]); // missing menuButtonRef in dependency list!?

  return (
    <Menu>
      {({ open }) => { // Open render prop
  
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
                //ref={menuRef}
              >
                <AnimatedMenuButton
                  style={{...buttonStyles}}
                  className="p-2 rounded-full bg-light"
                  ref={menuButtonRef}
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
                      className={`px-4 py-2 bg-light rounded-full data-[focus]:bg-vibrant`}
                      onClick={(e) => {handleSmoothScroll(e, "sectionContact")}}
                    >
                      Contact
                    </a>
                  </MenuItem>
                  <MenuItem className="">
                    <a
                      href="#sectionAbout"
                      className={`px-4 py-2 bg-light rounded-full data-[focus]:bg-vibrant`}
                      onClick={(e) => {handleSmoothScroll(e, "sectionAbout")}}
                    >
                    About
                    </a>
                  </MenuItem>
                  <MenuItem className="">
                    <a
                      href="#sectionProjects"
                      className={`px-4 py-2 bg-light rounded-full data-[focus]:bg-vibrant`}
                      onClick={(e) => {handleSmoothScroll(e, "sectionProjects")}}
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