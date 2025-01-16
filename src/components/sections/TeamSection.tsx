import { useResponsivePadding, useTranslation } from "@/lib/hooks";
import { TeamSectionContent as Type } from "@/lib/types/components";

import SectionContainer from "../ui/section-container/SectionContainer";

const TeamSection = (props: Type) => {
  const {
    title,

    members,

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

  return (
    <div style={{ padding }}>
      <SectionContainer className="main-container">
        <div className="space-y-[15px] text-center md:space-y-[30px]">
          <p className="font-lyon text-[32px] leading-[38.4px] -tracking-[1.25px] md:text-[66px] md:leading-[79.2px]">
            {title[translation]}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 md:gap-y-10 lg:grid-cols-4 lg:gap-y-16">
          {members.map((item, index) => {
            const { name, positionName, image } = item;

            return (
              <div
                key={index}
                className="relative flex flex-row gap-x-[20px] gap-y-[31px] md:flex-col"
              >
                <img
                  src={image.url}
                  alt={name}
                  className="w-[200px] rounded-[19px] md:w-[315px]"
                />
                <div>
                  <p className="text-[14px] leading-[16.8px] md:text-[20px] md:leading-[24px]">
                    {name}
                  </p>

                  <p className="text-[14px] leading-[16.8px] opacity-60 md:text-[20px] md:leading-[24px]">
                    {positionName[translation]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
};

export default TeamSection;
