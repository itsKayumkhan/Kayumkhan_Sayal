import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ContainerWrapper from "../components/ContainerWrapper.js";
import Hading from "../components/Hading.js";
import { isMobile } from "../../Constants.js";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile) {
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
      <div id="About" ref={aboutRef} className="w-full  h-[150vh] ">
        <div className="h-[20%]  about lg:w-full">
          {" "}
          <Hading
            text="About"
            refs={aboutRef}
            classes="absolute lg:left-24 top-[-12rem]"
          />
        </div>
        <div className="h-[80%]">
          <p className="info text-xl lg:px-24 text-left px-2 lg:mt-24 mt-10 lg:blur-md lg:opacity-0">
            I'm an enthusiastic and motivated individual with a deep passion for
            coding and problem-solving. As a fresher in the industry, I'm
            thrilled to embark on my journey as a developer. I find joy in
            exploring new technologies and constantly expanding my skill set. I
            have a strong drive to overcome challenges and find creative
            solutions to complex problems. Writing clean, efficient, and
            maintainable code is something I take great pride in, building a
            solid foundation for my work.
          </p>

          <div className="relative lg:px-24 info text-xl  text-left px-2 lg:mt-24 mt-10 lg:blur-md lg:opacity-0">
            <h1 className="text-2xl uppercase text-bold mt-10">Channel</h1>{" "}
            <p className="info text-xl text-left  lg:blur-md lg:opacity-0 ">
              I run the YouTube channel to help students solve daily life
              problems that I faced in the early days of learning.
            </p>
            <div className="flex  gap-2 mt-10 ">
              <div className="flex items-center gap-2 ">
                <img
                  className="w-[50px] h-[50px] object-cover rounded-full "
                  src="../../public/cLogog.jpg"
                  alt="channel logo"
                />
              </div>
              <a
                target="_blank"
                href="https://www.instagram.com/Kayumkhansayal"
                className="flex items-center justify-start"
              >
                Kayumkhansayal
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default About;
