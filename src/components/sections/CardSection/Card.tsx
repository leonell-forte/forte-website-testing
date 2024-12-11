import { Card as Cardtype } from "../../../lib/types/components";

const Card = (props: Cardtype) => {
  const { title, description, image } = props;

  return (
    <div className="bg-[#30F1FF1A] max-w-[350px] md:max-w-[688px] lg:w-[426px] lg:flex-shrink-0 backdrop-blur-[69.83px] p-5 lg:p-[30px] lg:pb-[74px] rounded-[9px] md:rounded-[18px] flex flex-col md:flex-row lg:flex-col md:items-center md:gap-10 lg:gap-4 lg:items-start justify-between h-[310px] md:h-[235px] lg:h-[426px]">
      <div className="w-20 md:w-[100px] lg:w-[120px] flex-shrink-0">
        {image && (
          <img
            src={image.url}
            alt="card-image"
          />
        )}
      </div>

      <div className="space-y-[22px] sm:space-y-[30px]">
        <p className="font-lyon text-[27px] md:text-[36px] leading-[32.4px] md:leading-[43.2px]">
          {title}
        </p>

        <p className="text-[12px] md:text-[18px] leading-[14.4px] md:leading-[21.6px] line-clamp-3 lg:line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
