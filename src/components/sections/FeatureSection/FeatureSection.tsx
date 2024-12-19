import dot from "@/assets/images/icons/dot.svg";
import SectionContainer from "@/components/ui/section-container/SectionContainer";
import { useResponsivePadding } from "@/lib/hooks";
import { FeatureSectionData } from "@/lib/types/components";

const FeatureSection = (props: FeatureSectionData) => {
  const { features, title, mobilePadding, tabletPadding, desktopPadding } =
    props;

  const { padding } = useResponsivePadding({
    mobilePadding,

    tabletPadding,

    desktopPadding,
  });

  return (
    <div className="main-container">
      <div
        style={{
          padding,
        }}
      >
        <SectionContainer>
          <p className="text-center font-lyon text-[32px] leading-[38.4px] tracking-[-2%] md:text-[66px] md:leading-[66px] lg:leading-[79.2px]">
            {title}
          </p>

          <div className="space-y-5 md:space-y-[30px]">
            {features.map((item, index) => {
              const { title, headline, description, points, image } = item;

              return (
                <div
                  key={index}
                  className="space-y-10 rounded-[9px] bg-[#30F1FF1A] px-5 py-10 md:space-y-[60px] md:px-10 md:py-[60px]"
                >
                  <div className="flex flex-col gap-10 md:gap-[60px] lg:flex-row lg:justify-between">
                    <div className="space-y-[30px] lg:max-w-[488px]">
                      <p className="text-[10px] text-mint md:text-[17px]">
                        {title}
                      </p>

                      <div className="space-y-[25px]">
                        <p className="font-lyon text-[27px] leading-[32.4px] md:text-[50px] md:leading-[60px]">
                          {headline}
                        </p>

                        <p className="text-[15px] leading-[18px] md:text-[22px] md:leading-[26.4px]">
                          {description}
                        </p>
                      </div>
                    </div>

                    <img
                      src={image.url}
                      alt="feature-image"
                      className="lg:max-w-[488px]"
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row">
                    {points.map((item, index) => {
                      const { description } = item;

                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 border-t py-5 md:py-[30px] lg:pr-[92px]"
                        >
                          <img src={dot} alt="dot" className="h-6 w-1" />
                          <p className="text-[12px] md:text-[18px]">
                            {description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default FeatureSection;
