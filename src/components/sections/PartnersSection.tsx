import classNames from "classnames";
import { PartnersContent as Type } from "../../lib/types/components";
import { useResponsivePadding } from "../../lib/hooks";

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
      <div className="space-y-6 md:space-y-10 main-container">
        <p className="text-center font-lyon text-[32px] md:text-[66px] leading-[38.4px] md:leading-[79.2px]">
          {title}
        </p>

        <div className="w-full overflow-scroll px-5 hide-scroll">
          <div
            className={classNames(
              flex
                ? "flex gap-12 overflow-scroll hide-scroll"
                : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
              "w-fit mx-auto",
            )}
          >
            {partner.map((item, index) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    flex
                      ? "h-10 md:h-[55px] flex-shrink-0 py-2"
                      : "flex-shrink-0 w-[165px] md:w-[216px] lg:w-[315px] h-[80px] md:h-[115px] lg:h-[161px] flex items-center justify-center mx-auto px-6 md:px-11 lg:px-[65px]",
                  )}
                >
                  <img
                    src={item.image.url}
                    alt="partner"
                    className={classNames(
                      "object-contain h-full max-h-[50px] max-w-[90px] md:max-h-[80px] md:max-w-[150px]",
                      flex && "!max-w-max !max-h-max",
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
