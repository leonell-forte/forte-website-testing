import classNames from "classnames";

import { useTranslation } from "@/lib/hooks";
import { Card as Cardtype } from "@/lib/types/components";

const Card = (props: Cardtype) => {
  const { title, description, image, withBottomPadding } = props;

  const { translation } = useTranslation();

  return (
    <div
      className={classNames(
        "flex justify-between rounded-[9px] bg-[#30F1FF1A] backdrop-blur-[69.83px] md:rounded-[18px] lg:h-[426px] lg:flex-shrink-0 lg:gap-4 lg:p-[30px]",
        withBottomPadding
          ? "h-[310px] flex-col p-5 md:h-[235px] md:flex-row md:items-center md:gap-10 lg:flex-col lg:items-start lg:pb-[74px]"
          : "h-full flex-col p-8 md:gap-[90px]"
      )}
    >
      <div
        className={classNames(
          "flex-shrink-0 lg:w-[120px]",
          withBottomPadding ? "w-20 md:w-[100px]" : "md:w-[150px]"
        )}
      >
        {image && (
          <img
            src={image.url}
            alt="card-image"
            className={classNames(
              withBottomPadding ? "block" : "hidden md:block"
            )}
          />
        )}
      </div>

      <div
        className={classNames(
          withBottomPadding
            ? "space-y-[22px] sm:space-y-[30px]"
            : "space-y-[60px] md:space-y-[30px]"
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
