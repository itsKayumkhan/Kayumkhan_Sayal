import { useEffect } from "react";
import { serviceObj } from "../../Constants";
import Corousel from "../components/Corousel";
import Hading from "../components/Hading";
import ServiceCard from "../components/ServiceCard";
import gsap from "gsap";

const Service = () => {
  
  useEffect(() => {
    gsap.from('.services', {
      x:500,
        opacity: 0,
        zIndex: -1,
        scrollTrigger: {
          trigger: ".services",
          scroller:"body",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        duration: 0.5
      })
  })
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
      <div className="z-10 flex justify-evenly items-center gap-2 my-24 flex-col relative">
        <div className="absolute h-full w-full bg-black -z-10">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full -z-10" />
        </div>
        <div className="services"><Hading text="Services" /></div>
        <div className="">
          <Corousel data={data} />
        </div>
      </div>
    </>
  );
};

export default Service;
