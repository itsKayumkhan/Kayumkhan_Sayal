import { useLayoutEffect, useRef } from "react";
import Logo from "../../public/logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavBar = ({
  logoRef,
  iconRef,
}: {
  logoRef: React.RefObject<HTMLDivElement>;
  iconRef: React.RefObject<HTMLDivElement>;
}) => {
  const navItem = ["Home", "About", "Skills", "Projects", "Contact"];
  const tl = gsap.timeline({ paused: true });

  const navBarRef = useRef<HTMLDivElement>(null);
  const navItemRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (navBarRef.current && navItemRef.current.length) {
      tl.to(navBarRef.current, {
        right: 0,
        duration: 0.6,
      }).from(navItemRef.current, {
        x: 400,
        opacity: 0,
        duration: .6,
        stagger: 0.3,
      });
    }
  }, []);

  const handleNav = (check: boolean) => {
    if (check) {
      tl.play();
    } else {
      tl.reverse();
    }
  };

  // Add wave effect
  useLayoutEffect(() => {
    navItemRef.current.forEach((item) => {
      if (item) {
        const waveEffect = () => {
          gsap.to(item, {
            y: -15,
            duration: 0.3,
            scale: 0.8,
            ease: "power1.inOut",
            onComplete: () => {
              gsap.to(item, {
                y: 0,
                duration: 0.3,
                scale: 1,
                ease: "power1.inOut",
              });
            },
          });
        };
        item.addEventListener("mouseenter", waveEffect);

        return () => {
          item.removeEventListener("mouseenter", waveEffect);
        };
      }
    });
  }, []);

  return (
    <> 
      <nav className="flex items-center justify-between text-white mx-2 lg:mx-12 mt-4 z-10">
        <div className="h-20 icon " ref={logoRef}>
          <img
            src={Logo}
            alt="logo"
            className="h-full object-cover logo hover:scale-95 duration-100"
          />
        </div>
        <div className=" text-3xl space-x-12 z-10 fixed lg:right-2" ref={iconRef}>
          <ul className="flex pe-7 items-center gap-6">
            <li className="hover:scale-90 duration-100">
             <a href="https://t.me/codemanoranjan" target="_ban"> <i className="icon ri-telegram-2-line "></i></a>
            </li>
            <li onClick={() => handleNav(true)} className="hover:scale-90 duration-100">
              <i className="icon ri-menu-4-line cursor-pointer "></i>
            </li>
          </ul>
        </div>

        <div
          ref={navBarRef}
          className="navBar fixed top-0 lg:w-1/3 bg-slate-800 w-full bg-opacity-70 h-full z-20 opacity-95 backdrop-blur-2xl  -right-[120%]"
        >
          <div className="navItems flex flex-col items-start justify-center space-y-6 text-6xl font-bold h-full">
            {navItem.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) navItemRef.current[index] = el;
                }}
              >
                <a
                  onClick={() => handleNav(false)}
                  href={`#${item}`}
                  className="navItem text-white ps-11 font-sans icon"
                >
                  {item}
                </a>
              </div>
            ))}
            <div
              onClick={() => handleNav(false)}
              className="closeBtn absolute top-0 right-10 bg-slate-900 rounded-full text-xl w-12 h-12 text-center flex items-center justify-center cursor-pointer hover:scale-95 duration-500 hover:bg-white hover:text-slate-900"
            >
              <i className="ri-close-large-line icon"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
