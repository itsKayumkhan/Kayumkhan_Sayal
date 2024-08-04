import "./App.css";
import "remixicon/fonts/remixicon.css";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ProjectCard from "./Pages/ProjectCard";
import Footer from "./components/Footer";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { textAnimation, navAnimation } from "./animation/animation.ts";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const logoRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const desRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const t1 = gsap.timeline();
    t1.from(logoRef.current, navAnimation);
    t1.from(iconRef.current, navAnimation);
    t1.from(headingRef.current, textAnimation);
    t1.from(desRef.current, textAnimation);
    t1.from(buttonRef.current, textAnimation);
  }, []);

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <NavBar logoRef={logoRef} iconRef={iconRef} />
      <Home buttonRef={buttonRef} headingRef={headingRef} desRef={desRef} />
      <About />
      <ProjectCard />
      <Service />
      <Contact />
      <Footer />
      <button className="button">
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>
    </>
  );
}

export default App;
