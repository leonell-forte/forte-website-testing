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
      <div className="space-y-6 md:space-y-10 main-container">
        <div className="text-center space-y-[15px] md:space-y-[30px]">
          <p className="font-lyon text-[32px] md:text-[66px] leading-[38.4px] md:leading-[79.2px] tracking-[-2%]">
            {title}
          </p>

          <p className="text-[15px] font-medium md:text-[22px] leading-[18px] md:leading-[26.4px] max-w-[886px] mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {bigCard.map((item, index) => {
            const { title, description, image } = item;

            return (
              <div
                key={index}
                className="bg-[#30F1FF1A] rounded-[9px] md:rounded-[18px] overflow-hidden backdrop-blur-[69.83px] p-5 space-y-[30px] md:space-y-[60px] md:py-[60px] md:px-10 lg:px-[60px]"
              >
                <img
                  src={image.url}
                  alt="card-image"
                  className="rounded-[12px] md:rounded-[24px]"
                />

                <div className="space-y-[15px] md:space-y-[20px]">
                  <p className="font-lyon text-[27px] md:text-[50px]">
                    {title}
                  </p>

                  <p className="text-[15px] md:text-[22px] leading-[18px] md:leading-[26.4px]">
                    {description}
                  </p>
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
