
import { useEffect } from "react";
import ContainerWrapper from "../components/ContainerWrapper";
import Corousel from "../components/Corousel.tsx";
import Hading from "../components/Hading.tsx";
import { projectObj } from "../../Constants.ts";
import Card from "../components/Card.tsx";
import gsap from "gsap";

const ProjectCard = () => {
  const data = projectObj?.map((card, i) => (
    <Card
      key={`${i}Project`}
      title={card.title}
      href={card.link}
      tag={[...card.tags]}
      img={card.img}
    />
  ))

  useEffect(() => {
    gsap.from('.projects', {
      x:500,
        opacity: 0,
        zIndex: -1,
        scrollTrigger: {
          trigger: ".projects",
          scroller:"body",
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
        duration: 0.5
      })
  })
  return (
    <ContainerWrapper>
      <>
        <div className="absolute h-[150vh] w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

       <div className="projects"> <Hading text="Project's" /></div>
        <div className="flex">
          <Corousel data={data}/>
        </div>
      </>
    </ContainerWrapper>
  );
};

export default ProjectCard;
