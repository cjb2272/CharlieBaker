import React, {useEffect, useRef } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useSpring, animated } from '@react-spring/web';
import { Bars3Icon } from '@heroicons/react/24/solid'

const AnimatedMenuButton = animated(MenuButton);
const AnimatedMenuItems = animated(MenuItems);
const AnimatedContainer = animated.div;

const HamburgerNavigation = ( {deviceType} ) => {
  //const menuRef = useRef(null); // Reference to the menu container

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

  // useEffect(() => {
  //   if (deviceType === 'Touch Input') {
  //     const scrollableDiv = document.querySelector('.overflow-y-scroll');
  //     const handleTouchOutside = (event) => {
  //       if (menuRef.current && !menuRef.current.contains(event.target)) {
  //         // If touch occurs outside of the menu, close it
          
  //         //document.body.style.overflow = 'auto'; // Re-enable scrolling

          
  //         scrollableDiv.style.overflow = 'auto';

  //         containerApi.start({
  //           backgroundColor: 'rgba(191, 252, 249, 0)',
  //           backdropFilter: 'blur(0px)',
  //         });
  //         menuItemApi.start({
  //           opacity: 0,
  //           transform: 'scale(0.95)',
  //         });
  //       }
  //     };

  //     scrollableDiv.addEventListener('touchstart', handleTouchOutside);
  //     //document.addEventListener('touchstart', handleTouchOutside);

  //     return () => {
  //       scrollableDiv.removeEventListener('touchstart', handleTouchOutside);
  //       //document.removeEventListener('touchstart', handleTouchOutside);
  //     };
  //   }
  // }, [deviceType, containerApi, menuItemApi]);

  //if (deviceType ===  "Mouse Input") {
    return (
      <Menu>
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

          // Handle scrolling behavior for mouse-based devices
          // if (deviceType === 'Mouse Input') {
          //   document.body.style.overflow = open ? 'hidden' : 'auto';
          // }
  
          return (
            <>
              <AnimatedContainer
                style={{...containerStyles}}
                className='p-2 rounded-xl'
                //ref={menuRef} //detect clicks/touches outside
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
  // } else {
  //   return (
  //     <Menu>
  //       {({ open }) => { //open is HeadlessUI internal state
  
  //         buttonApi.start({
  //           boxShadow: open ? '0px 0px 0px 0px rgba(0,0,0,0.3)' : '0px 3px 2px 2px rgba(0,0,0,0.3)'
  //         });
  
  //         containerApi.start({
  //           backgroundColor: open ? 'rgba(191, 252, 249, 0.5)' : 'rgba(191, 252, 249, 0)',
  //           backdropFilter: open ? "blur(4px)" : "blur(0px)"
  //         });
          
  //         // api.start triggers whenever the state of open changes
  //         menuItemApi.start({
  //           opacity: open ? 1 : 0,
  //           transform: open ? 'scale(1)' : 'scale(0.95)',
  //         });
  
  //         return (
  //           <>
  //             <AnimatedContainer
  //               style={{...containerStyles}}
  //               className='p-2 rounded-xl'
  //             >
  //               <AnimatedMenuButton
  //                 style={{...buttonStyles}}
  //                 className="p-2 rounded-full bg-light"
  //               >
  //                 <Bars3Icon className="size-12"/> {/* Hamburger Icon */}
  //               </AnimatedMenuButton>
  //               {/* In React Spring, an 'animated' component recieves SpringValues through the style prop */}
  //               <AnimatedMenuItems
  //                 style={menuItemStyles}
  //                 className="flex flex-col items-start mt-2 space-y-2 text-xl" //MenuItems is a div by default
  //               >
  //                 <MenuItem className="">
  //                   <a
  //                     href="#sectionContact"
  //                     className={`px-4 py-2 bg-light rounded-full`}
  //                   >
  //                     Contact
  //                   </a>
  //                 </MenuItem>
  //                 <MenuItem className="">
  //                   <a
  //                     href="#sectionAbout"
  //                     className={`px-4 py-2 bg-light rounded-full`}
  //                   >
  //                   About
  //                   </a>
  //                 </MenuItem>
  //                 <MenuItem className="">
  //                   <a
  //                     href="#sectionProjects"
  //                     className={`px-4 py-2 bg-light rounded-full`}
  //                     >
  //                     Projects
  //                   </a>
  //                 </MenuItem>
  //               </AnimatedMenuItems>
  //             </AnimatedContainer>
  //           </>
  //         );
  //       }}
  //     </Menu>
  //   );
  // }

};

export default HamburgerNavigation;