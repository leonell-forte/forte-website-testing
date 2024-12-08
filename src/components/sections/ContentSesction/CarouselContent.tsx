import { CarouselContent as Type } from "@/lib/types/components";

const CarouselContent = (props: Type) => {
  const { backgroundImage, carouselItems } = props;
  return (
    <div>
      {carouselItems.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default CarouselContent;
