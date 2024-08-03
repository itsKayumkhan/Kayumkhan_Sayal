import ContainerWrapper from "../components/ContainerWrapper.js";
import Hading from "../components/Hading.js";
import { icon} from "../../public/assets/svg/icon.js";
const About = () => {



  return (
    <ContainerWrapper>
      <>
        <div className="cardA w-[80%] relative bg-custom-gradient justify-center items-center rounded-ld p-12
        ">
          <div className="bg-opacity-30 backdrop-blur-lg rounded drop-shadow-lg bg-white absolute top-0 left-0 h-full w-full -z-10" ></div>
          <div className="img w-24 h-24 bg-slate-900  shadow-lg rounded-lg" />
          <Hading text="About Me" classes="mt-2 mb-4" />
          <Hading text="Onwer of 'codeManoranjan'" classes="text-xl my-4" />
          <p className="info text-xl px-24 text-center">
            
            I'm an enthusiastic and motivated individual with a deep passion for
            coding and problem-solving. As a fresher in the industry, I'm
            thrilled to embark on my journey as a developer. I find joy in
            exploring new technologies and constantly expanding my skill set. I
            have a strong drive to overcome challenges and find creative
            solutions to complex problems. Writing clean, efficient, and
            maintainable code is something I take great pride in, building a
            solid foundation for my work.
          </p>
        </div>

        <div>
          <Hading text="Tools I use" isBlack={true}/>

          <div className="flex space-x-20 justify-center items-center  w-full bg-slate-200 ">
            {icon?.map((i:any,ind:number) => (
              <span key={`${ind}About`} className="h-full w-full mx-6 p-4 svgLogo">{i}</span>
            ))}
            {icon?.map((i:any,ind:number) => (
              <span key={`${ind}About`} className="h-full w-full mx-6 p-4 svgLogo">{i}</span>
            ))}
          </div>
        </div>
      </>
    </ContainerWrapper>
  );
};

export default About;
