import Button from "@/components/ui/button/button";
import { useResponsivePadding, useScreenSize } from "@/lib/hooks";
import { CTASectionData } from "@/lib/types/components";

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
            <div className="flex flex-col items-center space-y-[30px] rounded-[9px] bg-[#30F1FF1A] px-[21px] py-[140px] text-center backdrop-blur-[69.83px] md:space-y-[60px] md:rounded-[18px]">
              <div className="max-w-[702px] space-y-[30px] md:space-y-10">
                <p className="font-lyon text-[40px] leading-[44px] md:text-[82px] md:leading-[90.2px]">
                  {title}
                </p>

                <p className="text-[15px] md:text-[22px]">{description}</p>
              </div>

              <Button href={buttonLink} variant="mint">
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
