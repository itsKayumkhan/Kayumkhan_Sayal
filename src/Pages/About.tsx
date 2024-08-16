import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ContainerWrapper from "../components/ContainerWrapper.js";
import Hading from "../components/Hading.js";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // const hadingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  // const hadingName = ['skills','about']
  useEffect(() => {
    gsap.from(".about", {
      x: 600,

      zIndex: -1,
      opacity: 0,
      scrollTrigger: {
        trigger: '.about',
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
        trigger: '.info',
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
      duration: 0.5,
    })

    // const svgLogos = document.querySelectorAll(".svgLogo");
    // const totalWidth = Array.from(svgLogos).reduce(
    //   (acc, el) => acc + el.clientWidth,
    //   0
    // );

    // gsap.to(".svgContainer", {
    //   x: -totalWidth,
    //   duration: 20,
    //   ease: "linear",
    //   repeat: -1,
    //   modifiers: {
    //     x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
    //   },
    // });
  }, []);

  return (
    <ContainerWrapper>
      <div id="About" ref={aboutRef} className="w-full  h-[120vh] ">
        <div className="lg:h-[20%]  about w-full my-24">
          {" "}
          <Hading
            text="About"
            refs={aboutRef}
            classes="absolute left-24 top-[-12rem]"
          />
        </div>

        <p className="info text-xl lg:px-24 text-left px-2 lg:mt-24 mt-10 blur-md opacity-0">
          I'm an enthusiastic and motivated individual with a deep passion for
          coding and problem-solving. As a fresher in the industry, I'm thrilled
          to embark on my journey as a developer. I find joy in exploring new
          technologies and constantly expanding my skill set. I have a strong
          drive to overcome challenges and find creative solutions to complex
          problems. Writing clean, efficient, and maintainable code is something
          I take great pride in, building a solid foundation for my work.
        </p>
        <p className="info text-xl lg:px-24 text-left px-2 lg:mt-24 blur-md opacity-0 mt-10">
          i run the youtube channal for help student to solve daily life problem
          which i face in starting days of larning
          <h1>~ Codemanoranjan</h1>
        </p>
        {/* <ContainerWrapper>
          <div className="w-full h-screen ">
            <div className="skill " ref={hadingRef}>
              <Hading text="Tools" refs={hadingRef}  classes=""/>
            </div>
            <div className="svgContainer flex space-x-20 justify-center items-center w-full bg-slate-200 cardT -z-10 overflow-hidden">
              {icon?.map((i, ind) => (
                <span
                  key={`${ind}About`}
                  className="h-full w-full mx-6 p-4 svgLogo z-10"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </ContainerWrapper> */}
      </div>
    </ContainerWrapper>
  );
};

export default About;
