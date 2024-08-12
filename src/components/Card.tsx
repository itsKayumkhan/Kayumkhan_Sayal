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
      className=" scrollProject flex justify-center items-center h-[100vh] min-w-[90%] relative flex-col"
    >
      <div className="container perspective-1000 relative w-[70%] h-[80%]  rounded-lg">
        <a href="#" className="link-1 " />
        <a href="#" className="link-2 " />
        <a href="#" className="link-3 " />
        <a href="#" className="link-4 " />
        <div className=" card bg-white rounded-lg border border-black relative transition-all duration-300 ease-out transform origin-center w-full  shadow-none">
          <div className="card-header p-2 bg-black text-white text-lg border border-white rounded-t-lg">
            {title}
          </div>
          <div className="w-full h-full flex items-center justify-center rounded-lg">
            <img
              src={`../../project/${img}.png`}
              alt={img}
              className="w-full h-full object-contain rounded-b-lg "
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3  absolute top-0 -left-32 ">
          {tag.map((text) => (
            <Tag text={text} key={`${text}Card`}/>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Card;
