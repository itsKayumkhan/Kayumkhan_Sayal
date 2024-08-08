import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hading from "../components/Hading";
import { useRef } from "react";

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
    "stripe",
    "npm",

    "Stripe",
    "Razorpay",
  ];
    const hadingRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
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
        start: "top 80%",
        end: "top center",
        scrub: true,
      },
      duration: 0.5,
    });
  }, []);

  return (
    <>
      <div
        className="main flex items-center justify-center h-screen z-10 flex-col"
        id="Skills"
      >
        <div className="skill my-12 -z-100 " ref={hadingRef}>
         
          <Hading text="Skills" refs={hadingRef}/>
        </div>
        <div className="w-[80%] flex items-center justify-center flex-wrap skills gap-4 ">
          {icon.map((item, index) => (
            <h1
              className="iconSkill z-10  border-white border-[2px] rounded-full py-4 px-4 text-3xl blur-xl opacity-0"
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
