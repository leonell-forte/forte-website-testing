import {
  useResponsivePadding,
  useScreenSize,
  useTranslation,
} from "@/lib/hooks";
import { AboutHeroComponentData } from "@/lib/types/components";

const AboutHeroSection = (props: AboutHeroComponentData) => {
  const {
    title,

    heading,

    subheading,

    mobileImage,

    desktopImage,

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
    <div className="main-container pt-[66px] md:pt-[100px]">
      <div
        style={{
          padding,
        }}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[60px] text-center">
          <div className="space-y-[30px] md:space-y-[45px]">
            <p className="font-lyon text-[40px] leading-[44px] md:text-[82px] md:leading-[90.2px]">
              {title[translation]}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-[60px] md:space-y-[100px] lg:space-y-[150px]">
            {renderImage() && (
              <div className="mx-auto max-w-[1097px]">
                <img src={renderImage()} alt="mobile" />
              </div>
            )}

            <div className="space-y-[50px] text-left md:space-y-[80px] lg:w-[651px] lg:space-y-[100px]">
              <p className="text-balance font-lyon text-[27px] leading-[29px] md:text-[50px] md:leading-[60px]">
                {heading[translation]}
              </p>
              <p className="whitespace-pre-wrap font-lyon text-[15px] leading-[18px] md:text-[22px] md:leading-[26px]">
                {subheading[translation]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
