import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { icon } from "../../public/assets/svg/icon.js";
import ContainerWrapper from "../components/ContainerWrapper.js";
import Hading from "../components/Hading.js";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from(".cardA", {
      x: -600,
      opacity: 0,
      scrollTrigger: {
        trigger: ".cardA",
        start: "top 30%",
        end: "top center",
        scrub: true,
      },
    });

    gsap.from(".skills", {
      x: 500,
      opacity: 0,
      zIndex: -1,
      scrollTrigger: {
        trigger: ".skills",
        scroller: "body",
        start: "top 80%",
        end:"top center",
        scrub: true,
        markers:true
      },
      duration: 0.5,
    });

    const svgLogos = document.querySelectorAll('.svgLogo');
    const totalWidth = Array.from(svgLogos).reduce((acc, el) => acc + el.clientWidth, 0);

    gsap.to(".svgContainer", {
      x: -totalWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });
  }, []);

  return (
    <ContainerWrapper>
      <div>
        <div className="skills">
          <Hading text="Tools I use"  />
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
    </ContainerWrapper>
  );
};

export default About;
