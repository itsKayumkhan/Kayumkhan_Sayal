import { useEffect, useRef } from "react";
import { isMobile, serviceObj } from "../../Constants";
import Corousel from "../components/Corousel";
import Hading from "../components/Hading";
import ServiceCard from "../components/ServiceCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const hadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobile) {
      if (hadingRef.current) {
        gsap.from(hadingRef.current, {
          x: 500,
          opacity: 0,
          zIndex: -1,
          scrollTrigger: {
            trigger: hadingRef.current,
            scroller: "body",
            start: "top 90%",
            end: "top 20%",
            scrub: true,
          },
          duration: 0.5,
        });
      }
    }
  }, []);

  const data = serviceObj?.map((card) => {
    return (
      <ServiceCard
        key={card.title}
        title={card.title}
        description={card.description}
      />
    );
  });

  return (
    <>
      <div
        className="z-10 flex justify-evenly items-center gap-2 my-24 flex-col relative"
        id="Services"
      >
    
        <div className="services my-12" ref={hadingRef}>
          <Hading text="Services" refs={hadingRef} />
        </div>

        <div className="">
          <Corousel data={data} />
        </div>
      </div>
    </>
  );
};

export default Service;
