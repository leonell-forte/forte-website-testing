import classNames from "classnames";

import { useTranslation } from "@/lib/hooks";
import { Card as Cardtype } from "@/lib/types/components";

const Card = (props: Cardtype) => {
  const { title, description, image, withBottomPadding } = props;

  const { translation } = useTranslation();

  return (
    <div
      className={classNames(
        "flex rounded-[9px] bg-[#30F1FF1A] backdrop-blur-[69.83px] md:rounded-[18px] lg:flex-shrink-0",
        withBottomPadding
          ? "h-full flex-col gap-[120px] px-5 pb-5 pt-5 md:flex-row md:items-center md:gap-[40px] md:px-10 md:pb-[56px] md:pt-10 lg:flex-col lg:items-start lg:gap-[76px] lg:px-8 lg:pb-[74px] lg:pt-8"
          : "h-full flex-col justify-between p-7 md:gap-[100px] lg:min-h-[426px]"
      )}
    >
      <div
        className={classNames(
          "flex-shrink-0 lg:w-[120px]",
          withBottomPadding ? "w-20 md:w-[100px]" : ""
        )}
      >
        {image && (
          <img
            src={image.url}
            alt="card-image"
            className={classNames(
              withBottomPadding
                ? "w-[80px] bg-cover md:w-[100px] lg:h-[106px] lg:w-[120px]"
                : "hidden h-[60px] max-w-fit md:block"
            )}
          />
        )}
      </div>

      <div
        className={classNames(
          withBottomPadding
            ? "space-y-[22px] sm:space-y-[30px]"
            : "space-y-[60px] md:space-y-4"
        )}
      >
        <p className="font-lyon text-[27px] leading-[32.4px] md:text-[36px] md:leading-[43.2px]">
          {title[translation]}
        </p>

        <p className="line-clamp-3 text-[12px] leading-[14.4px] md:text-[18px] md:leading-[21.6px] lg:line-clamp-5">
          {description[translation]}
        </p>
      </div>
    </div>
  );
};

export default Card;
