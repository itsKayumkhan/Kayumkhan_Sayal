import React from "react";
import Tag from "./Tag";

const Card = ({
  title,
  href,
  tag,
  img,
  key,
}: {
  title: string;
  href: string;
  tag: Array<string>;
  img: string;
  key: string;
}) => {
  return (
    <a
    key={key}
      href={href}
      className=" flex justify-center items-center h-[100vh] min-w-full relative flex-col"
    >
      <div className="container perspective-1000 relative w-[70%] h-[80%]  rounded-lg">
        <a href="#" className="link-1 " />
        <a href="#" className="link-2 " />
        <a href="#" className="link-3 " />
        <a href="#" className="link-4 " />
        <div className=" cardS card bg-white rounded-lg border border-black relative transition-all duration-300 ease-out transform origin-center w-full  shadow-none">
          <div className="card-header p-2 bg-black text-white text-lg border border-white rounded-t-lg">
            {title}
          </div>
          <div className="w-full h-full flex items-center justify-center rounded-lg">
            <img
              src={`../../public/project/${img}.png`}
              alt={img}
              className="w-full h-full object-contain rounded-b-lg "
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3  absolute bottom-10 left-3 ">
          {tag.map((text) => (
            <Tag text={text} key={`${text}Card`}/>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Card;
