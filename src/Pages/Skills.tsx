import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hading from "../components/Hading";

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
    "tailwindCss",
    "MongoDb",
    "Sql",
    "express",
    "NodeJs",
    "RestApi",
    "c",
    "Cpp",
    "Postman",
    "npm",
    "Git",
    "GitBash",
    "stripe",
    "Stripe",
    "Razorpay",
  ];

  useGSAP(() => {
    gsap.fromTo(
      ".iconSkill",
      {
        // opacity: 0,
        // filter: "blur(10px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: ".skills",
          scroller: "body",
          start: "0% 80%",
          end: "90% 74%",
          scrub: true,
        },
        stagger: {
          each: 0.1,
          from: "random",
        },
      }
    );
    gsap.from(".skill", {
      x: 500,
      opacity: 0,
      zIndex: -1,
      scrollTrigger: {
        trigger: ".skill",
        scroller: "body",
        start: "top 80%",
        end:"top center",
        scrub: true,
      },
      duration: 0.5,
    });
  }, []);

  return (
    <>
      <div className="main flex items-center justify-center h-screen z-10 flex-col">
     
        <div className="skill my-4">
          {" "}
          <Hading text="Skills" />
        </div>
        <div className="w-[80%] flex items-center justify-center flex-wrap skills gap-4">
          {icon.map((item, index) => (
            <h1
              className="iconSkill border border-white rounded-full py-4 px-4 text-3xl blur-xl opacity-0"
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
