import { serviceObj } from "../../Constants";
import Hading from "../components/Hading";
import ServiceCard from "../components/ServiceCard";

const Service = () => {
  return (
    <>
      <div className="z-10 flex justify-evenly items-center gap-2 my-24 flex-col relative">
   <div className="absolute h-full w-full bg-black -z-10"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" /><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full -z-10" /></div>

        <Hading text="Services" />
        <div className="flex justify-evenly items-center gap-2 w-full">
          {serviceObj?.map((card) => {
            return (
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
