import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ContainerWrapper from "../components/ContainerWrapper.js";
import Hading from "../components/Hading.js";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
 
    if (window.innerWidth >1147) {
      gsap.from(".about", {
        x: 600,
        zIndex: -1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".about",
          scroller: "body",
          start: "top 90%",
          end: "top 20%",
          scrub: true,
        },
        duration: 0.5,
      });

      gsap.to(".info", {
        opacity: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: ".info",
          scroller: "body",
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
        duration: 0.5,
      });

   
    }
  }, []);

  return (
    <ContainerWrapper>
      <div id="About" ref={aboutRef} className="w-full  h-[120vh] ">
        <div className="lg:h-[20%]  about lg:w-full my-24">
          {" "}
          <Hading
            text="About"
            refs={aboutRef}
            classes="absolute lg:left-24 top-[-12rem]"
          />
        </div>

        <p className="info text-xl lg:px-24 text-left px-2 lg:mt-24 mt-10 md:blur-md md:opacity-0">
          I'm an enthusiastic and motivated individual with a deep passion for
          coding and problem-solving. As a fresher in the industry, I'm thrilled
          to embark on my journey as a developer. I find joy in exploring new
          technologies and constantly expanding my skill set. I have a strong
          drive to overcome challenges and find creative solutions to complex
          problems. Writing clean, efficient, and maintainable code is something
          I take great pride in, building a solid foundation for my work.
        </p>
        <p className="info text-xl lg:px-24 text-left px-2 lg:mt-24 md:blur-md md:opacity-0 mt-10">
          I run the YouTube channel to help students solve daily life problems
          that I faced in the early days of learning.
          <h1>~ Codemanoranjan</h1>
        </p>
      </div>
    </ContainerWrapper>
  );
};

export default About;
