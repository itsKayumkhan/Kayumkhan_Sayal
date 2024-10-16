import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { isMobile } from "../../Constants";

const Corousel = ({ data }: { data: Array<any> }) => {
  return (
    <>
      
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          emulateTouch={true}
          showArrows={true}
          interval={2000}
          showThumbs={false}
          stopOnHover={false}
        >
          {data}
        </Carousel>
       
    </>
  );
};

export default Corousel;
