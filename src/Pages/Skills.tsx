import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hading from "../components/Hading";
import { useRef } from "react";
import { isMobile } from "../../Constants";
import {  svgIcons } from "../../public/svg/icon";
import FlyingIcon from "../components/FlyingIcon";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const icon = [
    "Html",
    "Javascript",
    "typescript",
    "Css",
    "Bootstrap",
    "gsap",
    "React",
    "NextJs",
    "npm",
    "photoEditing",
    "tailwindCss",
    "MongoDb",
    "Sql",
    "express",
    "c",
    "NodeJs",
    "RestApi",
    "Cpp",
    "Postman",
    "Git",
    "GitBash",
    "Stripe",
    "Razorpay",
  ];
  const hadingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isMobile) {
      icon.forEach((tag) => {
        gsap.to(`#${tag}`, {
          opacity: 1,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: `#${tag}`,
            scroller: "body",
            start: "0% 80%",
            end: "90% 74%",
            scrub: true,
          },
          stagger: {
            each: 0.3,
            from: "random",
          },
        });
      });
      gsap.from(".skill", {
        x: 500,
        opacity: 0,
        zIndex: -1,
        scrollTrigger: {
          trigger: ".skill",
          scroller: "body",
          start: "top 90%",
          end: "top 20%",
          scrub: true,
        },
        duration: 0.5,
      });
    }
  }, []);

  return (
    <>
      <div
        className="main flex items-center justify-center  z-10 flex-col h-[150vh] "
        id="Skills"
      >
        <div className="h-[20%] skill my-12 -z-100" ref={hadingRef}>
          <Hading text="Skills" refs={hadingRef} />
        </div>

        {svgIcons?.map((item, index) => (
          <FlyingIcon key={index} icon={item}/>
        ))}

        <div className="w-[80%] flex items-end justify-center flex-wrap skills gap-4 z-4 ">
          {icon.map((item, index) => (
            <h1
              className="iconSkill z-1  border-white border-[2px] rounded-full lg:py-4 lg:px-4 px-3 py-2 lg:text-3xl lg:blur-xl lg:opacity-0"
              id={item}
              key={index}
            >
              {item}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
