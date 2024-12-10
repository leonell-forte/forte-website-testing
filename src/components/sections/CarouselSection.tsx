import Carousel from "../ui/button/carousel/Carousel";
import { CarouselContent as Type } from "../../lib/types/components";

const CarouselSection = (props: Type) => {
  const { backgroundImage, carouselItems } = props;

  return (
    <div className="">
      <Carousel
        items={carouselItems}
        background={backgroundImage.url}
      />
    </div>
  );
};

export default CarouselSection;
