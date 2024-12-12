import { Card as Cardtype } from "@/lib/types/components";

const Card = (props: Cardtype) => {
  const { title, description, image } = props;

  return (
    <div className="flex h-[310px] max-w-[350px] flex-col justify-between rounded-[9px] bg-[#30F1FF1A] p-5 backdrop-blur-[69.83px] md:h-[235px] md:max-w-[688px] md:flex-row md:items-center md:gap-10 md:rounded-[18px] lg:h-[426px] lg:w-[426px] lg:flex-shrink-0 lg:flex-col lg:items-start lg:gap-4 lg:p-[30px] lg:pb-[74px]">
      <div className="w-20 flex-shrink-0 md:w-[100px] lg:w-[120px]">
        {image && <img src={image.url} alt="card-image" />}
      </div>

      <div className="space-y-[22px] sm:space-y-[30px]">
        <p className="font-lyon text-[27px] leading-[32.4px] md:text-[36px] md:leading-[43.2px]">
          {title}
        </p>

        <p className="line-clamp-3 text-[12px] leading-[14.4px] md:text-[18px] md:leading-[21.6px] lg:line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
