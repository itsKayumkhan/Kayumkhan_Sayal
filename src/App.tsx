import "remixicon/fonts/remixicon.css";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import ProjectCard from "./Pages/ProjectCard";
import Service from "./Pages/Service";
import Skills from "./Pages/Skills";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import { isMobile } from "../Constants";
import { navAnimation, textAnimation } from "./animation/animation";
import WebsiteTour from "./components/WebsiteTour";
import Marque from "./components/Marque";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const logoRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const desRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [scrollBtn, setScrollBtn] = useState(false);

  useLayoutEffect(() => {
    if (!isMobile) {
      const t1 = gsap.timeline();
      if (
        logoRef.current &&
        iconRef.current &&
        headingRef.current &&
        desRef.current &&
        buttonRef.current
      ) {
        t1.from(logoRef.current, navAnimation)
          .from(iconRef.current, navAnimation)
          .from(headingRef.current, textAnimation)
          .from(desRef.current, textAnimation)
          .from(buttonRef.current, textAnimation);
      }
    }
  }, []);
  useLayoutEffect(() => {
    if (!isMobile) {
      const handleCursor = (e: MouseEvent) => {
        if (mouseRef.current) {
          gsap.to(mouseRef.current, {
            x: e.clientX,
            y: e.clientY,
            ease: "power3.out",
            duration: 0.3,
            opacity: 1,
          });

          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }

          timeoutRef.current = setTimeout(() => {
            if (mouseRef.current) {
              gsap.to(mouseRef.current, { opacity: 0, duration: 0.5 });
            }
          }, 1000);
        }
      };

      window.addEventListener("mousemove", handleCursor);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        window.removeEventListener("mousemove", handleCursor);
      };
    }
  }, []);

  const gotoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const checkScroll = () => {
    const h = 300;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > h) setScrollBtn(true);
    else setScrollBtn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const imgArray: string[] = [
    "https://res.cloudinary.com/dslgstzex/image/upload/v1732703286/pic1_pwyp0w.png",
    "https://res.cloudinary.com/dslgstzex/image/upload/v1732703297/pic2_nkjtoi.png",
    "https://res.cloudinary.com/dslgstzex/image/upload/v1732703288/pic3_qusi1o.png ",
    "https://res.cloudinary.com/dslgstzex/image/upload/v1734545321/Screenshot_2024-12-18_233829_fyxpiu.png"
  ];

  return (
    <>


      <Toaster />
      <div
        ref={mouseRef}
        className="cursor w-6 h-6 rounded-full bg-slate-200 fixed"
      ></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />

      <NavBar logoRef={logoRef} iconRef={iconRef} />
      <Home buttonRef={buttonRef} headingRef={headingRef} desRef={desRef} />
      <About />
      {!isMobile && <Marque />}

      <Skills />
      <ProjectCard />
      <Marque />
      <Service />
      <WebsiteTour imgArray={imgArray} title="Website Tour" />
      <Contact />
      <Footer />
      {scrollBtn && (
        <button
          onClick={gotoTop}
          className="button fixed bottom-8 right-8 z-20"
        >
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
      )}
    </>
  );
}

export default App;
