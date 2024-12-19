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
        <SectionContainer>
          <div className="space-y-[30px] px-5 text-center">
            <p className="font-lyon text-[32px] leading-[38.4px] tracking-[-2%] md:text-[66px] md:leading-[79.2px]">
              {header[translation]}
            </p>

            <p className="mx-auto max-w-[348px] text-[15px] leading-[18px] md:max-w-[658px] md:text-[22px] md:leading-[26.4px] lg:max-w-[792px]">
              {description[translation]}
            </p>
          </div>

          <div className="hide-scroll w-full overflow-scroll px-5">
            <div className="mx-auto flex w-fit flex-col flex-wrap gap-5 lg:flex-row lg:justify-center">
              {cards.map((item, index) => {
                return <Card key={index} {...item} />;
              })}
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default CardSection;
