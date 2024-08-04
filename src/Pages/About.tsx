import ContainerWrapper from "../components/ContainerWrapper.js";
import Hading from "../components/Hading.js";
import { icon} from "../../public/assets/svg/icon.js";
import React, { useEffect } from "react";
import gsap from "gsap";
const About = () => {


  const info = React.useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.from(".cardA", {
      x: -600,

      opacity: 0,
      scrollTrigger: {
        trigger: ".cardA",
        start: "top 30%",
        end: "top center",
        scrub: true,
        markers: true,
      },
    })
    gsap.from(info.current, {
      y:200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".cardA",
        scroller:"body",
        start: "top 20%",
        end: "top top",
        scrub: true,
        markers: true,
      },
      duration: 0.5
    })
    gsap.from('.skills', {
    x:500,
      opacity: 0,
      zIndex: -1,
      scrollTrigger: {
        trigger: ".skills",
        scroller:"body",
        start: "top center",
        scrub: true,
        markers: true,
      },
      duration: 0.5
    })
  })


  return (
    <ContainerWrapper>
      <>
        <div className="cardA w-[80%] relative bg-custom-gradient justify-center items-center rounded-ld p-12
        ">
          <div className="bg-opacity-30 backdrop-blur-lg rounded drop-shadow-lg bg-white absolute top-0 left-0 h-full w-full -z-10" ></div>
          <div className="img w-24 h-24 bg-slate-900  shadow-lg rounded-lg" />
          <Hading text="About Me" classes="mt-2 mb-4 " />
          <Hading text="Onwer of 'codeManoranjan'" classes="text-xl my-4" />
          <p className="info text-xl px-24 text-center aboutP" >
            
            I'm an enthusiastic and motivated individual with a deep passion for
            coding and problem-solving. As a fresher in the industry, I'm
            thrilled to embark on my journey as a developer. I find joy in
            exploring new technologies and constantly expanding my skill set. I
            have a strong drive to overcome challenges and find creative
            solutions to complex problems. Writing clean, efficient, and
            maintainable code is something I take great pride in, building a
            solid foundation for my work.
          </p>
        </div>

        <div>
        <div className="skills">  <Hading text="Tools I use" isBlack={true} /></div>

          <div className="flex space-x-20 justify-center items-center  w-full bg-slate-200 cardT -z-10">
            {icon?.map((i:any,ind:number) => (
              <span key={`${ind}About`} className="h-full w-full mx-6 p-4 svgLogo z-10">{i}</span>
            ))}
            {icon?.map((i:any,ind:number) => (
              <span key={`${ind}About`} className="h-full w-full mx-6 p-4 svgLogo z-10">{i}</span>
            ))}
          </div>
        </div>
      </>
    </ContainerWrapper>
  );
};

export default About;
