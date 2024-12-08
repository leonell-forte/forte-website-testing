import Carousel from "../../../components/ui/button/carousel/Carousel";
import { CarouselContent as Type } from "../../../lib/types/components";

const CarouselContent = (props: Type) => {
  const { backgroundImage, carouselItems } = props;

  return (
    <div className="py-6">
      <Carousel
        items={carouselItems}
        background={backgroundImage.url}
      />
    </div>
  );
};

export default CarouselContent;
