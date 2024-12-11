import classNames from "classnames";

import { useResponsivePadding } from "../../lib/hooks";
import { PartnersContent as Type } from "../../lib/types/components";

const PartnersSection = (props: Type) => {
  const {
    title,

    partner,

    flex,

    mobilePadding,

    tabletPadding,

    desktopPadding,
  } = props;

  const { padding } = useResponsivePadding({
    mobilePadding,

    tabletPadding,

    desktopPadding,
  });

  return (
    <div style={{ padding }}>
      <div className="main-container space-y-6 md:space-y-10">
        <p className="text-center font-lyon text-[32px] leading-[38.4px] md:text-[66px] md:leading-[79.2px]">
          {title}
        </p>

        <div className="hide-scroll w-full overflow-scroll px-5">
          <div
            className={classNames(
              flex
                ? "hide-scroll flex gap-12 overflow-scroll"
                : "grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4",
              "mx-auto w-fit"
            )}
          >
            {partner.map((item, index) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    flex
                      ? "h-10 flex-shrink-0 py-2 md:h-[55px]"
                      : "mx-auto flex h-[80px] w-[165px] flex-shrink-0 items-center justify-center px-6 md:h-[115px] md:w-[216px] md:px-11 lg:h-[161px] lg:w-[315px] lg:px-[65px]"
                  )}
                >
                  <img
                    src={item.image.url}
                    alt="partner"
                    className={classNames(
                      "h-full max-h-[50px] max-w-[90px] object-contain md:max-h-[80px] md:max-w-[150px]",
                      flex && "!max-h-max !max-w-max"
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
