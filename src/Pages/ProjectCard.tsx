import { useEffect, useRef } from "react";
import ContainerWrapper from "../components/ContainerWrapper";
import Corousel from "../components/Corousel";
import Hading from "../components/Hading";
import { isMobile, projectObj } from "../../Constants";
import Card from "../components/Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = () => {
  const hadingRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  // Filtering data based on the "type" attribute
  const dataMe = projectObj.filter((card) => card.type === "personal");
  const dataClient = projectObj.filter((card) => card.type === "client");

  useEffect(() => {
    if (!isMobile) {
      if (projectRef.current) {
        gsap.from(projectRef.current, {
          x: 500,
          opacity: 0,
          zIndex: -1,
          scrollTrigger: {
            trigger: projectRef.current,
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

  return (
    <ContainerWrapper>
     <> <div className="absolute h-[110vh] w-full bg-slate-950 " id="Projects">
        <div className="absolute bottom-0 left-0 right-0 top-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="projects my-12" ref={projectRef}>
        <Hading text="Projects" refs={hadingRef} />
      </div>

      <div className="relative flex justify-center items-center w-full p-4 my-20 flex-col">
        <h1 className="text-2xl lg:text-4xl font-bold p-4 left-0">MY PROJECT</h1>
        <div className="flex w-full h-[140vh]">
          {!isMobile ? (
            <Corousel data={dataMe.map((card, i) => (
              <Card
                key={`${i}Project`}
                title={card.title}
                href={card.link}
                tag={[...card.tags]}
                img={card.img}
              />
            ))} />
          ) : (
            <div className="w-full flex flex-col item-center h-full overflow-scroll">
              {dataMe.map((card, i) => (
                <Card
                  key={`${i}Project`}
                  title={card.title}
                  href={card.link}
                  tag={[...card.tags]}
                  img={card.img}
                />
              ))}
            </div>
          )}
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold p-4 left-0 mt-20">CLIENT PROJECT</h1>
        <div className="flex w-full h-[140vh]">
          {!isMobile ? (
            <Corousel data={dataClient.map((card, i) => (
              <Card
                key={`${i}Project`}
                title={card.title}
                href={card.link}
                tag={[...card.tags]}
                img={card.img}
              />
            ))} />
          ) : (
            <div className="w-full flex flex-col item-center h-full overflow-scroll">
              {dataClient.map((card, i) => (
                <Card
                  key={`${i}Project`}
                  title={card.title}
                  href={card.link}
                  tag={[...card.tags]}
                  img={card.img}
                />
              ))}
            </div>
          )}
        </div>
      </div></>
    </ContainerWrapper>
  );
};

export default ProjectCard;
