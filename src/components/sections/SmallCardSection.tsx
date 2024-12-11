import { SmallCardContent as Type } from "../../lib/types/components";
import arrow from "../../assets/images/icons/arrow.svg";
import { Link } from "react-router-dom";
import { useResponsivePadding } from "../../lib/hooks";

const SmallCardSection = (props: Type) => {
  const {
    title,

    description,

    smallCards,

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
      <div className="space-y-10 md:space-y-[85px] main-container">
        <div className="text-center space-y-[30px] md:space-y-[45px]">
          <p className="font-lyon text-[32px] md:text-[66px]">{title}</p>

          <p className="text-[15px] md:text-[22px] max-w-[886px] mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {smallCards.map((item, index) => {
            const { title, description, link } = item;

            return (
              <div
                key={index}
                className="relative bg-[#30F1FF1A] backdrop-blur-[69.83px] rounded-[18px] p-5 md:p-[30px] h-[220px] md:h-[240px] lg:h-[320px] flex flex-col justify-between"
              >
                <Link
                  to={link}
                  className="absolute top-[30px] md:top-10 right-5"
                >
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-[19px] md:w-[28px]"
                  />
                </Link>
                <p className="text-[27px] md:text-[36px] font-lyon leading-[32.4px] md:leading-[43.2px] lg:max-w-[295px]">
                  {title}
                </p>

                <p className="text-[15px] md:text-[18px] font-light max-w-[258px] md:max-w-max">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SmallCardSection;
