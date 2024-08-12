import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

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
      <ul className="flex flex-col items-center justify-center gap-2 text-3xl">
        <li
          ref={(el) => listRefs.current[0] = el}
          className="text-3xl flex items-center justify-center icon cursor-pointer hover:scale-125 w-12 h-12 list z-10"
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kayumkhan-sayal-4aa583264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <i className="hover:scale-90 duration-300 text-slate-300 hover:text-white ri-linkedin-fill"></i>
          </a>
        </li>
        <li
          ref={(el) => listRefs.current[1] = el}
          className="text-3xl flex items-center justify-center icon cursor-pointer hover:scale-125 w-12 h-12 list z-10"
        >
          <a target="_blank" href="https://github.com/itsKayumkhan">
            <i className="hover:scale-90 duration-300 text-slate-300 hover:text-white ri-github-fill"></i>
          </a>
        </li>
        <li
          ref={(el) => listRefs.current[2] = el}
          className="text-3xl flex items-center justify-center icon cursor-pointer hover:scale-125 w-12 h-12 list z-10"
        >
          <a target="_blank" href="https://www.twitter.com/kayumkhankks">
            <i className="hover:scale-90 duration-300 text-slate-300 hover:text-white ri-twitter-fill"></i>
          </a>
        </li>
        <li
          ref={(el) => listRefs.current[3] = el}
          className="text-3xl flex items-center justify-center icon cursor-pointer hover:scale-125 w-12 h-12 list z-10"
        >
          <a target="_blank" href="https://www.instagram.com/codemanoranjan">
            <i className="hover:scale-90 duration-300 text-slate-300 hover:text-white ri-instagram-line"></i>
          </a>
        </li>
        <li
          ref={(el) => listRefs.current[4] = el}
          className="text-3xl flex items-center justify-center icon cursor-pointer hover:scale-125 w-12 h-12 list z-10"
        >
          <a target="_blank" href="https://www.facebook.com/kayumkhankks">
            <i className="hover:scale-90 duration-300 text-slate-300 hover:text-white ri-facebook-fill"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
