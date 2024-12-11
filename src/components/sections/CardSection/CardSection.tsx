import { CardComponentData } from "../../../lib/types/components";
import Card from "./Card";
import { useResponsivePadding } from "../../../lib/hooks";

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
        <div className="space-y-10 md:space-y-[85px] lg:space-y-[100px]">
          <div className="text-center space-y-[30px] md:space-y-[45px] px-5">
            <p className="font-lyon text-[32px] md:text-[66px] leading-[38.4px] md:leading-[79.2px] tracking-[-2%]">
              {header}
            </p>

            <p className="text-[15px] md:text-[22px] leading-[18px] md:leading-[26.4px] max-w-[348px] md:max-w-[658px] lg:max-w-[792px] mx-auto">
              {description}
            </p>
          </div>

          <div className="w-full overflow-scroll px-5 hide-scroll">
            <div className="flex flex-col lg:flex-row lg:justify-start gap-5 w-fit mx-auto">
              {cards.map((item, index) => {
                return (
                  <Card
                    key={index}
                    {...item}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
