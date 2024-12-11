import Carousel from "../ui/button/carousel/Carousel";
import { CarouselContent as Type } from "../../lib/types/components";
import { useResponsivePadding } from "../../lib/hooks";

const CarouselSection = (props: Type) => {
  const {
    backgroundImage,

    carouselItems,

    mobilePadding,

    tabletPadding,

    desktopPadding,
  } = props;

  const { padding } = useResponsivePadding({
    mobilePadding,

    tabletPadding,

    desktopPadding,
  });

  return (
    <div style={{ padding }}>
      <div className="main-container">
        <Carousel
          items={carouselItems}
          background={backgroundImage.url}
        />
      </div>
    </div>
  );
};

export default CarouselSection;
