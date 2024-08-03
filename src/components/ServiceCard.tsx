
const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  // const [show, setShow] = useState<boolean>(false);

  // const handleMouseEnter = () => setShow(true);
  // const handleMouseLeave = () => setShow(false);

  return (
 
     <div className="flex justify-center items-center h-[80vh] min-w-[33%] relative flex-col overflow-x-auto">
      <div className="cardS w-[80%]">
        <p className="heading">{description}</p>

        <p> {title}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
