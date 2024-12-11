import Button from "../../../components/ui/button/button";
import { useResponsivePadding, useScreenSize } from "../../../lib/hooks";
import { CTASectionData } from "../../../lib/types/components";

const CTASection = (props: CTASectionData) => {
  const {
    title,

    description,

    buttonLabel,

    buttonLink,

    desktopBackground,

    mobileBackground,

    mobilePadding,

    tabletPadding,

    desktopPadding,
  } = props;

  const { padding } = useResponsivePadding({
    mobilePadding,

    tabletPadding,

    desktopPadding,
  });

  const { isDesktop } = useScreenSize();

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            isDesktop ? desktopBackground.url : mobileBackground.url
          })`,

          backgroundPosition: "center",

          backgroundSize: "cover",
        }}
      >
        <div style={{ padding }}>
          <div className="main-container">
            <div className="bg-[#30F1FF1A] backdrop-blur-[69.83px] px-[21px] py-[140px] rounded-[9px] md:rounded-[18px] flex flex-col items-center text-center space-y-[30px] md:space-y-[60px]">
              <div className="max-w-[702px] space-y-[30px] md:space-y-10">
                <p className="text-[40px] md:text-[82px] font-lyon leading-[44px] md:leading-[90.2px]">
                  {title}
                </p>

                <p className="text-[15px] md:text-[22px]">{description}</p>
              </div>

              <Button
                href={buttonLink}
                variant="mint"
              >
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
