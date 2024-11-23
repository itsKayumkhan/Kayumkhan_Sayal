import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Logo from "../../logo.svg";
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
  const tl = useRef(gsap.timeline({ paused: true }));
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const [onMobile, setOnMobile] = useState<boolean>(true); // Default to true to hide on mobile
  const navBarRef = useRef<HTMLDivElement>(null);
  const navItemRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (navBarRef.current && navItemRef.current.length) {
      tl.current
        .to(navBarRef.current, {
          right: 0,
          duration: 0.6,
        })
        .from(navItemRef.current, {
          x: 400,
          opacity: 0,
          duration: 0.6,
          stagger: 0.3,
        });
    }
  }, []);

  // Control the timeline directly when navOpen changes
  useLayoutEffect(() => {
    if (navOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [navOpen]);

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

  useLayoutEffect(() => {}, []);

  // Detect screen width to determine mobile or desktop
  useEffect(() => {
    const handleResize = () => {
      setOnMobile(window.innerWidth > 1147);
    };

    // Check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between text-white mx-2 lg:mx-12 mt-4 z-10">
        <div className="flex items-center justify-between w-screen">
          <div className="w-1/2 h-10 lg:h-20 icon" ref={logoRef}>
            <img
              src={Logo}
              alt="logo"
              className="h-full object-cover logo hover:scale-95 duration-100"
            />
          </div>
          {onMobile && (
            <div
              className="text-3xl space-x-12 z-10 lg:right-2 w-1/2 fixed"
              ref={iconRef}
            >
              <ul className="flex pe-7 items-center justify-end gap-6 w-screen lg:w-full">
                {/* <div className="absolute -top-20 right-11 translate-x-[-50%] translate-y-[-50%] circle w-12 h-12 bg-white rounded-full">

                </div> */}
                <li className="hover:scale-90 duration-100">
                  <a
                    href="https://t.me/kayumkhansayal"
                    className="relative"
                    target="_ban"
                  >

                      <i className="icon ri-telegram-2-line "></i>
                  </a>
                </li>
                <li
                  onClick={() => setNavOpen(true)}
                  className="hover:scale-90 duration-100"
                >
                  <i className="icon ri-menu-4-line cursor-pointer"></i>
                </li>
                <div
                  ref={navBarRef}
                  className="navBar absolute  lg:w-[30vw] lg:-top-10 bg-slate-800 w-[100vw] -top-2 bg-opacity-70 h-screen z-30 opacity-95 backdrop-blur-2xl -right-[100%] "
                >
                  <div className="navItems flex flex-col items-start justify-center space-y-6 text-6xl font-bold h-full relative">
                    {navItem.map((item, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          if (el) navItemRef.current[index] = el;
                        }}
                      >
                        <a
                          onClick={() => setNavOpen(false)}
                          href={`#${item}`}
                          className="navItem text-white ps-11 font-sans icon"
                        >
                          {item}
                        </a>
                      </div>
                    ))}
                    <div
                      onClick={() => setNavOpen(false)}
                      className="closeBtn absolute top-0 right-10 bg-slate-900 rounded-full text-xl w-12 h-12 text-center flex items-center justify-center cursor-pointer hover:scale-95 duration-500 hover:bg-white hover:text-slate-900"
                    >
                      <i className="ri-close-large-line icon"></i>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
