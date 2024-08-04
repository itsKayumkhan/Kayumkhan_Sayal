
const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
 
     <div className="flex justify-center items-center h-[80vh] relative flex-col overflow-x-auto">
      <div className="cardS w-[40%]">
        <p className="heading">{description}</p>

        <p> {title}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
