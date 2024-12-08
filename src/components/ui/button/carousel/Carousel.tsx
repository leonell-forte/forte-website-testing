import { ICarousel } from "../../../../lib/types/ui";
import chevron from "../../../../assets/images/icons/chevron.svg";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const Carousel = (props: ICarousel) => {
  const { background, className, items } = props;

  const carouselRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const updateActiveIndex = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const containerWidth = carouselRef.current.offsetWidth;
      const index = Math.round(scrollLeft / containerWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const currentRef = carouselRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", updateActiveIndex, {
        passive: true,
      });
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", updateActiveIndex);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center gap-5 py-6">
      <button
        onClick={handlePrev}
        className="flex-shrink-0 hidden w-[34px] h-[34px] rounded-full border lg:flex items-center justify-center"
      >
        <img
          src={chevron}
          alt="prev"
          className="rotate-90 w-4 translate-x-[-1px]"
        />
      </button>

      <div
        ref={carouselRef}
        className="flex items-center gap-2.5 overflow-scroll snap-x hide-scroll"
      >
        {items.map((item, index) => {
          const { mainText, secondaryText, image } = item;

          return (
            <div
              key={index}
              className={classNames(
                "snap-start flex-shrink-0 w-[95%] md:w-full rounded-[9px] px-5 py-[110px] md:py-[170px] text-center flex flex-col items-center justify-center gap-[28px]",

                className,
              )}
              style={{
                backgroundImage: `url(${background})`,

                backgroundSize: "cover",

                backgroundPosition: "right",
              }}
            >
              <p className="font-lyon text-[27px] md:text-[36px] leading-[32.4px] md:leading-[43.2px] lg:max-w-[652px]">
                {mainText}
              </p>

              <div className="flex items-center gap-[15px]">
                <div className="px-[3.17px] w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#30F1FF1A] flex items-center justify-center">
                  <img
                    src={image.url}
                    alt="carouse-image"
                  />
                </div>

                <p className="text-[10px] md:text-[17px]">{secondaryText}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        className="flex-shrink-0 hidden w-[34px] h-[34px] rounded-full border lg:flex items-center justify-center"
      >
        <img
          src={chevron}
          alt="prev"
          className="-rotate-90 w-4 translate-x-[1px]"
        />
      </button>

      <div className="flex items-center gap-2 absolute bottom-0">
        {Array.from({ length: items.length }).map((item, index) => {
          return (
            <div
              className={classNames(
                "w-[5px] h-[5px] rounded-full",
                index === activeIndex
                  ? "bg-white w-[7px] h-[7px]"
                  : "bg-[#FFFFFF33]",
              )}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
