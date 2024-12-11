import { useResponsivePadding } from "../../lib/hooks";
import { BigCardContent as Type } from "../../lib/types/components";

const BigCardSection = (props: Type) => {
  const {
    title,

    description,

    bigCard,

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
      <div className="space-y-10 md:space-y-[85px] lg:space-y-[100px] main-container">
        <div className="text-center space-y-[30px] md:space-y-[45px]">
          <p className="text-[32px] font-lyon leading-[35.2px] md:text-[66px]">
            {title}
          </p>

          <p className="text-[15px] md:text-[22px] font-medium">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {bigCard.map((item, index) => {
            const { title, description, image } = item;

            return (
              <div
                key={index}
                className="bg-[#30F1FF1A] rounded-[9px] backdrop-blur-[69.83px] p-5 space-y-[30px] md:space-y-[60px] md:py-[60px] md:px-10 lg:px-[60px]"
              >
                <img
                  src={image.url}
                  alt="card-image"
                />

                <div className="space-y-[25px] dm:space-y-[33px]">
                  <p className="font-lyon text-[27px] md:text-[50px]">
                    {title}
                  </p>

                  <p className="text-[15px] md:text-[22px]">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BigCardSection;
