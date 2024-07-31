import { icon } from "../../public/assets/svg/icon.jsx";
import about from "../../public/assets/svg/about.jpg";
import ContainerWrapper from "../components/ContainerWrapper.js";
const About = () => {
  return (
    <ContainerWrapper>
    <>  
      <div className="card bg-slate-950 rounded-lg w-[60%] relative z-10 p-4 py-6">
        <div className="tools flex items-center p-2.5">
          <div className="circle px-1">
            <span className="red box bg-[#ff605c] inline-block align-middle w-2.5 h-2.5 p-[1px] rounded-full" />
          </div>
          <div className="circle px-1">
            <span className="yellow box bg-[#ffbd44] inline-block align-middle w-2.5 h-2.5 p-[1px] rounded-full" />
          </div>
          <div className="circle px-1">
            <span className="green box bg-[#00ca4e] inline-block align-middle w-2.5 h-2.5 p-[1px] rounded-full" />
          </div>
        </div>
        <div>
          <div className="card__content text-center">
            <h1 className="text-white text-6xl text-center mb-5 mt-2 drop-shadow-lg">
              About Me
            </h1>
           <p className="px-9"> I'm an enthusiastic and motivated individual with a deep passion for
            coding and problem-solving. As a fresher in the industry, I'm
            thrilled to embark on my journey as a developer. I find joy in
            exploring new technologies and constantly expanding my skill set. I
            have a strong drive to overcome challenges and find creative
            solutions to complex problems. Writing clean, efficient, and
            maintainable code is something I take great pride in, building a
            solid foundation for my work.</p> 
          </div>
        <div>
          <img src="person " alt="" />
        </div>
        </div>
      </div>

      <div>
        <h1 className="text-secondary text-6xl text-center mt-24 mb-8 ">
          Skills
        </h1>

        <div className="flex space-x-2 justify-center items-center  w-full">
          {icon?.map((i) => (
            <span className="h-full w-full mx-6 p-4">{i}</span>
          ))}
        </div>
      </div></>
    </ContainerWrapper>
  );
};

export default About;
