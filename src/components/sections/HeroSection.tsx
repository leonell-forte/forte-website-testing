import classNames from "classnames";

import {
  useResponsivePadding,
  useScreenSize,
  useTranslation,
} from "@/lib/hooks";
import { HeroComponentData } from "@/lib/types/components";

import Button from "../ui/button/button";

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

  const { translation } = useTranslation();

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
        index === 0 ? "pt-[66px] md:pt-[100px]" : ""
      )}
    >
      <div
        style={{
          padding,
        }}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[60px] text-center md:gap-[90px]">
          <div className="space-y-[30px] md:space-y-[45px]">
            <div className="space-y-[30px]">
              <p className="font-lyon text-[40px] leading-[44px] md:text-[82px] md:leading-[90.2px]">
                {mainText[translation]}
              </p>

              <p className="mx-auto w-[790px] text-[15px] leading-[18px] md:text-[22px] md:leading-[26.4px]">
                {secondaryText[translation]}
              </p>
            </div>
            <div className="flex justify-center">
              <Button href={buttonLink} variant="mint">
                {buttonLabel[translation]}
              </Button>
            </div>
          </div>

          {renderImage() && (
            <div className="mx-auto max-w-[1097px]">
              <img src={renderImage()} alt="mobile" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
