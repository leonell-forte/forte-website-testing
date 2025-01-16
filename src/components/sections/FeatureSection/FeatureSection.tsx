import { useLocation } from "react-router-dom";

import dot from "@/assets/images/icons/dot.svg";
import SectionContainer from "@/components/ui/section-container/SectionContainer";
import {
  useResponsivePadding,
  useScreenSize,
  useTranslation,
} from "@/lib/hooks";
import { FeatureSectionData } from "@/lib/types/components";
import { cn } from "@/lib/utilities/cn";

const FeatureSection = (props: FeatureSectionData) => {
  const { features, title, mobilePadding, tabletPadding, desktopPadding } =
    props;

  const { pathname } = useLocation();

  const isExpertise = pathname.includes("expertise");

  const { isDesktop } = useScreenSize();

  const { padding } = useResponsivePadding({
    mobilePadding,

    tabletPadding,

    desktopPadding,
  });

  const { translation } = useTranslation();

  return (
    <div className="main-container">
      <div
        style={{
          padding,
        }}
      >
        <SectionContainer>
          <p
            className={cn(
              "text-center font-lyon text-[32px] leading-[38.4px] -tracking-[1.25px] md:text-[66px] md:leading-[66px] lg:mx-auto lg:leading-[79.2px]",
              isExpertise ? "lg:max-w-[1024px]" : "lg:-mt-[50px]"
            )}
          >
            {title[translation]}
          </p>

          <div className="space-y-5 md:space-y-[30px]">
            {features.map((item, index) => {
              const { title, headline, description, points, image } = item;

              return (
                <div
                  key={index}
                  className={cn(
                    "rounded-[15px] bg-[#30F1FF1A] px-5 py-10 md:py-[60px] lg:max-w-[1320px] lg:px-16 lg:py-[80px]",
                    isExpertise
                      ? "space-y-10 lg:max-h-[836px]"
                      : "space-y-8 md:px-10 lg:max-h-[800px]"
                  )}
                >
                  <div
                    className={cn(
                      "flex flex-col gap-x-12 gap-y-12 lg:flex-row lg:justify-between",
                      isExpertise
                        ? "-mt-[13px] lg:min-h-[487px]"
                        : "-mt-[13px] lg:min-h-[510px]"
                    )}
                  >
                    <div className="flex-1 space-y-[30px] text-balance">
                      <p className="text-[10px] text-mint md:text-[17px]">
                        {title[translation]}
                      </p>

                      <div className="space-y-[25px]">
                        <p className="font-lyon text-[27px] leading-[32.4px] md:text-[50px] md:leading-[60px]">
                          {headline[translation]}
                        </p>

                        <p className="text-[15px] leading-[18px] md:text-[22px] md:leading-[26.4px]">
                          {description[translation]}
                        </p>
                      </div>
                    </div>

                    <img
                      src={image.url}
                      alt="feature-image"
                      className={cn(
                        "h-fit",
                        isExpertise ? "lg:max-h-[506px]" : "lg:max-w-[488px]"
                      )}
                      style={{
                        margin: isDesktop ? item.imagePadding : "0px",
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    {points.map((item, index) => {
                      const { description, bullet, subtext = null } = item;

                      return (
                        <div
                          key={index}
                          className={cn(
                            "flex items-start gap-2 border-t pb-[25px] pt-[20px] md:gap-3 md:pb-[50px] md:pt-[30px] lg:gap-4 lg:pb-0 lg:pt-[40px]",
                            isExpertise ? "lg:pr-[92px]" : "lg:pr-[60px]"
                          )}
                        >
                          {bullet ? (
                            <>
                              <img
                                src={dot}
                                alt="dot"
                                className="mt-1 min-w-0.5 md:mt-1.5 md:min-w-2 lg:mt-1.5"
                              />

                              <p className="text-[12px] md:text-[18px]">
                                {description[translation]}
                              </p>
                            </>
                          ) : (
                            <div className="space-y-[15px]">
                              <p className="font-lyon text-[27px] md:text-[32px]">
                                {description[translation]}
                              </p>
                              {subtext && (
                                <p className="text-[12px] md:text-[18px]">
                                  {subtext[translation]}
                                </p>
                              )}
                            </div>
                          )}
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
