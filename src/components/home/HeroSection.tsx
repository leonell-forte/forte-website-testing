import Button from "../ui/button/button";
import { HeroSectionProps } from "@/lib/types/components";
import { useScreenSize } from "../../lib/hooks";

const HeroSection = ({
  mobileImage,

  desktopImage,

  mainText,

  secondaryText,

  buttonLabel,
}: HeroSectionProps) => {
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
    <div className="flex flex-col items-center text-center gap-[45px] py-12 md:py-[100px]">
      <p className="text-[40px] md:text-[82px] font-lyon leading-[44px] md:leading-[90px]">
        {mainText}
      </p>
      <p className="text-[22px]">{secondaryText}</p>

      <Button variant="mint">{buttonLabel}</Button>

      {renderImage() && (
        <div className="max-w-[1097px] mx-auto">
          <img
            src={renderImage()}
            alt="mobile"
          />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
