import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const links = [
  {
    href: "https://www.linkedin.com/in/kayumkhan-sayal-4aa583264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    iconClass: "ri-linkedin-fill",
  },
  {
    href: "https://github.com/itsKayumkhan",
    iconClass: "ri-github-fill",
  },
  {
    href: "https://www.twitter.com/kayumkhankks",
    iconClass: "ri-twitter-fill",
  },
  {
    href: "https://www.instagram.com/codemanoranjan",
    iconClass: "ri-instagram-line",
  },
  {
    href: "https://www.facebook.com/kayumkhankks",
    iconClass: "ri-facebook-fill",
  },
];

const SideNav = () => {
  const listRefs = useRef<(HTMLLIElement | null)[]>([]); // Array of refs

  useGSAP(() => {
    gsap.from(listRefs.current, {
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 0.5,
    });
  }, []);

  return (
    <nav className="z-10">
      <ul className="flex flex-col items-center justify-center gap-2 text-3xl space-y-3 lg:space-y-0">
        {links.map((link, index) => (
          <li
            key={index}
            ref={(el) => (listRefs.current[index] = el)}
            className="text-3xl flex items-center justify-center icon cursor-pointer hover:scale-125 lg:w-12 lg:h-12 w-6 h-6 list z-10"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              className="  duration-300 text-slate-300   sideNavBtn"
            >
              <i className={link.iconClass}></i>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
