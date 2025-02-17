import { useResponsivePadding, useTranslation } from "@/lib/hooks";
import { BigCardContent as Type } from "@/lib/types/components";

import SectionContainer from "../ui/section-container/SectionContainer";

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

  const { translation } = useTranslation();

  return (
    <div style={{ padding }}>
      <SectionContainer className="main-container">
        <div className="space-y-[15px] text-center md:space-y-[30px]">
          <p className="font-lyon text-[32px] leading-[38.4px] -tracking-[1.25px] md:text-[66px] md:leading-[79.2px]">
            {title[translation]}
          </p>

          <p className="mx-auto max-w-[886px] text-[15px] font-medium leading-[18px] md:text-[22px] md:leading-[26.4px]">
            {description[translation]}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {bigCard.map((item, index) => {
            const { title, description, image } = item;

            return (
              <div
                key={index}
                className="space-y-[30px] overflow-hidden rounded-[9px] bg-[#30F1FF1A] p-5 backdrop-blur-[69.83px] md:space-y-[60px] md:rounded-[18px] md:px-10 md:py-[60px] lg:px-[60px]"
              >
                <img
                  src={image.url}
                  alt="card-image"
                  className="mx-auto w-full rounded-[12px] md:rounded-[24px] lg:max-h-[400px] lg:max-w-[533px]"
                />

                <div className="space-y-[15px] md:space-y-[20px]">
                  <p className="font-lyon text-[27px] md:text-[50px]">
                    {title[translation]}
                  </p>

                  <p className="text-[15px] leading-[18px] md:text-[22px] md:leading-[26.4px]">
                    {description[translation]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
};

export default BigCardSection;
