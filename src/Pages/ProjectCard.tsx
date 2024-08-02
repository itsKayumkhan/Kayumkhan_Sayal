import Card from "../components/Card";
import ContainerWrapper from "../components/ContainerWrapper";
import {projectObj} from '../../Constants.ts'
import Hading from "../components/Hading.tsx";

const ProjectCard = () => {
  return (
    <ContainerWrapper>
      <><div className="absolute h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" /></div>

        <Hading text="Project's" />
        <div className="flex">
          {
            projectObj?.map(card=>{
              return <Card title={card.title} href={card.link} tag={[...card.tags] } img={card.img}/>
            })
          }
        </div>
      </>
    </ContainerWrapper>
  );
};

export default ProjectCard;
