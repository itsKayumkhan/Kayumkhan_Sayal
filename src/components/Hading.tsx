import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobile } from "../../Constants";

gsap.registerPlugin(ScrollTrigger);

const Hading = ({
  text,
  classes,
  refs,
}: {
  text: string;
  classes?: string;
  refs: any;
}) => {
  useGSAP(() => {
    if (!isMobile) {
      gsap.to(".text-hover", {
        width: "50rem",
        duration: 0.5,
        scrollTrigger: {
          trigger: refs?.current,
          scroller: "body",
          start: "top 50%",
          end: "100% top",
          scrub: true,
        },
        onComplete: () => {
          gsap.to(".text-hover", {
            width: "0px",
          });
        },
      });
    }
  });

  return (
    <>
      {!isMobile ? (
        <div
          className={`text-[5rem] lg:text-[40vh] font-bold  ${
            classes
              ? classes
              : "lg:my-32 lg:-left-[38rem]   lg:-top-[19rem] left-[-7rem] top-[1rem] "
          }  relative head w-full `}
        >
          <h1 className="opacity-20 font-sans absolute -z-10"> {text}</h1>
          <h1 className="-z-10 font-sans absolute w-0 overflow-hidden text-hover">
            {" "}
            {text}
          </h1>
        </div>
      ) : (
        <div
          className={`text-[5rem] font-bold  relative head w-full `}
        >
          <h1 className="-z-10 font-sans  w-full  ">
            {text}
          </h1>
        </div>
      )}
    </>
  );
};

export default Hading;
