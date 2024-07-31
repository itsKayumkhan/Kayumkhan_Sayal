import Card from "../components/Card";
import ContainerWrapper from "../components/ContainerWrapper";
import {projectObj} from '../../Constants.ts'

const ProjectCard = () => {
  return (
    <ContainerWrapper>
      <>
        <h1 className="text-secondary text-6xl text-center my-5 drop-shadow-lg">
          Project
        </h1>
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
