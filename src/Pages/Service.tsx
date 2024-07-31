import React from "react";
import ServiceCard from "../components/ServiceCard";
import { serviceObj } from "../../Constants";

const Service = () => {
  return (
    <div className="flex justify-evenly items-center gap-2 my-24 flex-col">
      <h1 className="text-secondary text-6xl text-center my-8 drop-shadow-lg">
        Service's
      </h1>
      <div className="flex justify-evenly items-center gap-2 w-full">
       {serviceObj?.map(card => {
         return <ServiceCard icon={card.icon} title={card.title} description={card.description}/>
       })}
      </div>
    </div>
  );
};

export default Service;
