import { Link, useLocation } from "react-router-dom";

import arrow from "@/assets/images/icons/arrow.svg";
import { useResponsivePadding, useTranslation } from "@/lib/hooks";
import { SmallCardContent as Type } from "@/lib/types/components";
import { cn } from "@/lib/utilities/cn";

import SectionContainer from "../ui/section-container/SectionContainer";

const SmallCardSection = (props: Type) => {
  const {
    title,

    description,

    smallCards,

    mobilePadding,

    tabletPadding,

    desktopPadding,
  } = props;

  const { padding } = useResponsivePadding({
    mobilePadding,

    tabletPadding,

    desktopPadding,
  });

  const { translation } = useTranslation();

  const { pathname } = useLocation();

  const isAbout = pathname.includes("about");

  return (
    <div style={{ padding }}>
      <SectionContainer className="main-container !space-y-[80px] !px-16 lg:-mt-[15px]">
        <div className="space-y-[15px] text-center md:space-y-[30px]">
          <p className="font-lyon text-[32px] leading-[38.4px] -tracking-[1.25px] md:text-[66px] md:leading-[79.2px]">
            {title[translation]}
          </p>

          {description && (
            <p className="mx-auto max-w-[886px] text-[15px] font-medium leading-[18px] md:text-[22px] md:leading-[26.4px]">
              {description[translation]}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {smallCards.map((item, index) => {
            const { title, description, link } = item;

            return (
              <div
                key={index}
                className="relative flex min-h-[220px] flex-col justify-between rounded-[18px] bg-[#30F1FF1A] p-5 backdrop-blur-[29.83px] md:min-h-[240px] md:p-[30px] lg:min-h-[320px]"
              >
                {link && (
                  <Link
                    to={link}
                    className="absolute right-5 top-[30px] md:top-10"
                  >
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-[19px] md:w-[28px]"
                    />
                  </Link>
                )}
                <p
                  className={cn(
                    "font-lyon text-[27px] leading-[32.4px] tracking-normal md:text-[36px] md:leading-[38.2px]",
                    link ? "lg:max-w-[295px]" : ""
                  )}
                >
                  {title[translation]}
                </p>

                <p
                  className={cn(
                    "text-[15px] font-light leading-[21.6px] md:text-[18px]",
                    isAbout ? "mr-[40px]" : ""
                  )}
                >
                  {description[translation]}
                </p>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
};

export default SmallCardSection;
