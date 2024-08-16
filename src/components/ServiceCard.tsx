const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex justify-center items-center h-[80vh] relative flex-col overflow-x-auto w-full">
      <div className="cardS relative lg:w-[60%] w-1/3 flex flex-col p-4 gap-4 rounded-lg bg-black">
        <p className="heading lg:text-3xl text-sm px-23 w-full flex items-center justify-center">{description}</p>

        <p> {title}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
