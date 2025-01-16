import SectionContainer from "@/components/ui/section-container/SectionContainer";
import { useResponsivePadding, useTranslation } from "@/lib/hooks";
import { CardComponentData } from "@/lib/types/components";

import Card from "./Card";

const CardSection = (props: CardComponentData) => {
  const {
    header,

    description,

    cards,

    mobilePadding,

    tabletPadding,

    desktopPadding,

    withBottomPadding,
  } = props;

  const { padding } = useResponsivePadding({
    mobilePadding,

    tabletPadding,

    desktopPadding,
  });

  const { translation } = useTranslation();

  return (
    <div>
      <div
        style={{
          padding,
        }}
      >
        <SectionContainer className="main-container !space-y-[80px] !px-16 lg:-mt-[15px]">
          <div className="space-y-[30px] px-5 text-center">
            <p className="font-lyon text-[32px] leading-[38.4px] -tracking-[1.25px] md:text-[66px] md:leading-[79.2px]">
              {header[translation]}
            </p>

            {description && (
              <p className="mx-auto max-w-[348px] text-[15px] leading-[18px] md:max-w-[658px] md:text-[22px] md:leading-[26.4px] lg:max-w-[792px]">
                {description[translation]}
              </p>
            )}
          </div>

          <div className="hide-scroll w-full overflow-scroll">
            <div className="mx-auto grid grid-cols-1 flex-wrap gap-5 lg:grid-cols-3 lg:justify-center">
              {cards.map((item, index) => {
                return (
                  <Card
                    key={index}
                    {...item}
                    withBottomPadding={withBottomPadding}
                  />
                );
              })}
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default CardSection;
