import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

import chevron from "@/assets/images/icons/chevron.svg";
import { useTranslation } from "@/lib/hooks";
import { ICarousel } from "@/lib/types/ui";

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

  const { translation } = useTranslation();

  return (
    <div className="relative flex items-center justify-center gap-5 py-6">
      <button
        onClick={handlePrev}
        className="hidden h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full border opacity-50 lg:flex"
      >
        <img
          src={chevron}
          alt="prev"
          className="w-4 translate-x-[-1px] rotate-90"
        />
      </button>

      <div
        ref={carouselRef}
        className="hide-scroll flex snap-x items-center gap-2.5 overflow-scroll"
      >
        {items.map((item, index) => {
          const { mainText, secondaryText, image } = item;

          return (
            <div
              key={index}
              className={classNames(
                "flex h-[20rem] w-[95%] flex-shrink-0 snap-start flex-col items-center justify-center gap-[28px] overflow-hidden rounded-[9px] px-5 text-center sm:h-[25rem] md:h-[30rem] md:w-full md:rounded-[18px]",
                className
              )}
              style={{
                backgroundImage: `url(${background})`,

                backgroundSize: "cover",

                backgroundPosition: "right",
              }}
            >
              <p className="font-lyon text-[27px] leading-[32.4px] md:text-[36px] md:leading-[43.2px] lg:max-w-[652px]">
                {mainText[translation]}
              </p>

              <div className="flex items-center gap-[15px]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#30F1FF1A] px-[3.17px] md:h-12 md:w-12">
                  <img src={image.url} alt="carouse-image" />
                </div>

                <p className="text-[10px] md:text-[17px]">{secondaryText}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        className="hidden h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full border opacity-50 lg:flex"
      >
        <img
          src={chevron}
          alt="prev"
          className="w-4 translate-x-[1px] -rotate-90"
        />
      </button>

      <div className="absolute bottom-0 flex items-center gap-2">
        {Array.from({ length: items.length }).map((item, index) => {
          return (
            <div
              key={index}
              className={classNames(
                "h-[5px] w-[5px] rounded-full",
                index === activeIndex
                  ? "h-[7px] w-[7px] bg-white"
                  : "bg-[#FFFFFF33]"
              )}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
