import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hading = ({
  text,
  classes,
  refs
}: {
  text: string;
  classes?: string;
  refs:any
}) => {
  useGSAP(()=>{
    gsap.to('.text-hover',{
      width:"50rem",
      duration:0.5,
      scrollTrigger:{
        trigger:refs?.current,
        scroller:"body",
        start:"top 50%",
        end:"100% top",
        scrub:true,
      },
      onComplete: () => {
        gsap.to(".text-hover", {
          width:"0px",
        });
      },
    })
  })



  return (
    
    <div
      className={` text-[40vh] font-bold  ${
        classes ? classes : "my-32 -left-[38rem]   -top-[19rem]"
      }  relative head w-full`}
    >
      <h1 className="opacity-20 font-sans absolute -z-10"> {text}</h1>
      <h1 className="-z-10 font-sans absolute w-0 overflow-hidden text-hover"> {text}</h1>
    </div>
  );
};

export default Hading;
