import Button from "../ui/button/button";
import { useResponsivePadding, useScreenSize } from "../../lib/hooks";
import { HeroComponentData } from "@/lib/types/components";
import classNames from "classnames";

const HeroSection = (props: HeroComponentData) => {
  const {
    mainText,

    secondaryText,

    buttonLabel,

    buttonLink,

    mobileImage,

    desktopImage,

    index,

    mobilePadding,

    tabletPadding,

    desktopPadding,
  } = props;

  const { isMobile } = useScreenSize();

  const renderImage = () => {
    switch (isMobile) {
      case true:
        return mobileImage?.url;

      case false:
        return desktopImage?.url;

      default:
        return "";
    }
  };

  const { padding } = useResponsivePadding({
    mobilePadding,

    tabletPadding,

    desktopPadding,
  });

  return (
    <div
      className={classNames(
        `main-container`,
        index === 0 ? "pt-[66px] md:pt-[100px]" : "",
      )}
    >
      <div
        style={{
          padding,
        }}
      >
        <div className="flex flex-col items-center text-center gap-[60px] max-w-[1200px] mx-auto">
          <div className="space-y-[30px] md:space-y-[45px]">
            <p className="text-[40px] md:text-[82px] font-lyon leading-[44px] md:leading-[90.2px]">
              {mainText}
            </p>

            <p className="text-[15px] md:text-[22px] leading-[18px] md:leading-[26.4px]">
              {secondaryText}
            </p>

            <div className="flex justify-center">
              <Button
                href={buttonLink}
                variant="mint"
              >
                {buttonLabel}
              </Button>
            </div>
          </div>

          {renderImage() && (
            <div className="max-w-[1097px] mx-auto">
              <img
                src={renderImage()}
                alt="mobile"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
