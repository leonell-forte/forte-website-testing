import { useResponsivePadding } from "@/lib/hooks";
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

  return (
    <div>
      <div
        style={{
          padding,
        }}
      >
        <div className="space-y-10">
          <div className="space-y-[30px] px-5 text-center">
            <p className="font-lyon text-[32px] leading-[38.4px] tracking-[-2%] md:text-[66px] md:leading-[79.2px]">
              {header}
            </p>

            <p className="mx-auto max-w-[348px] text-[15px] leading-[18px] md:max-w-[658px] md:text-[22px] md:leading-[26.4px] lg:max-w-[792px]">
              {description}
            </p>
          </div>

          <div className="hide-scroll w-full overflow-scroll px-5">
            <div className="mx-auto flex w-fit flex-col gap-5 lg:flex-row lg:justify-start">
              {cards.map((item, index) => {
                return <Card key={index} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
