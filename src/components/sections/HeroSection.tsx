import Button from "../ui/button/button";
import { useScreenSize } from "../../lib/hooks";
import { HeroComponentData } from "@/lib/types/components";

const HeroSection = (props: HeroComponentData) => {
  const {
    mainText,
    secondaryText,
    buttonLabel,
    buttonLink,
    mobileImage,
    desktopImage,
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

  return (
    <div className="main-container">
      <div className="flex flex-col items-center text-center gap-[45px] py-12 md:py-[100px]">
        <p className="text-[40px] md:text-[82px] font-lyon leading-[44px] md:leading-[90px]">
          {mainText}
        </p>

        <p className="text-[22px]">{secondaryText}</p>

        <Button
          href={buttonLink}
          variant="mint"
        >
          {buttonLabel}
        </Button>

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
  );
};

export default HeroSection;
