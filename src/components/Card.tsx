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
      className=" scrollProject flex justify-center items-center h-[100vh] min-w-[80%] relative flex-col my-4"
    >
      <div className="container perspective-1000 relative lg:w-[70%] lg:h-[80%]  h-full rounded-lg">
        <a href={href} target="_blank" className="link-1 " />
        <a href={href} target="_blank" className="link-2 " />
        <a href={href} target="_blank" className="link-3 " />
        <a href={href} target="_blank" className="link-4 " />
        <div className=" card bg-white rounded-lg border border-black relative transition-all duration-300 ease-out transform origin-center w-full  shadow-none">
          <div className="card-header p-2 bg-black text-white text-lg border border-white rounded-t-lg">
            {title}
          </div>
          <div className=" h-[full] lg:w-full lg:h-full flex items-center justify-center rounded-lg">
            <img
              src={img}
              alt={img}
              className="md:h-full md:w-full object-contain rounded-b-lg "
            />
          </div>
        </div>
        <div className="md:flex lg:flex-col items-center justify-center gap-3 my-10  absolute lg:top-0 lg:-left-32 hidden">
          {tag.map((text) => (
            <Tag text={text} key={`${text}Card`}/>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Card;
