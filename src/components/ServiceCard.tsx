import React, { useState } from "react";

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  // const [show, setShow] = useState<boolean>(false);

  // const handleMouseEnter = () => setShow(true);
  // const handleMouseLeave = () => setShow(false);

  return (
    // <div className="flex justify-center items-center h-[100vh] min-w-[33%] relative flex-col overflow-x-auto">
    //   <div className="relative overflow-hidden w-[80%] h-[60%] rounded-3xl cursor-pointer text-2xl font-bold bg-purple-400"  onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}>
    //     <div className="z-10 absolute w-full h-full peer" />
    //     <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500" />
    //     <div className="absolute flex text-lg text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-36 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500 p-4 text-white">
    //       {show && description}
    //     </div>
    //     <div

    //       className="w-full h-full items-center justify-center flex uppercase text-center text-2xl ">
    //       {title}
    //     </div>
    //   </div>
    // </div>
     <div className="flex justify-center items-center h-[80vh] min-w-[33%] relative flex-col overflow-x-auto">
      <div className="cardS w-[80%]">
        <p className="heading">{description}</p>

        <p> {title}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
