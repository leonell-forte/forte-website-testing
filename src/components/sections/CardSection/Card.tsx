import { Card as Cardtype } from "../../../lib/types/components";

const Card = (props: Cardtype) => {
  const { title, description, image } = props;

  return (
    <div className="bg-[#30F1FF1A] backdrop-blur-[69.83px] p-5 rounded-[9px] flex flex-col sm:flex-row lg:flex-col gap-[109px] sm:gap-10 sm:items-center md:items-start">
      <div className="w-20 sm:w-[100px] h-20 sm:h-[100px] flex-shrink-0">
        {image && (
          <img
            src={image.url}
            alt="card-image"
          />
        )}
      </div>

      <div className="space-y-[22px] sm:space-y-[30px]">
        <p className="font-lyon text-[27px] sm:text-[36px] leading-[80%]">
          {title}
        </p>

        <p className="text-[12px] sm:text-[18px] leading-[14.4px] sm:leading-[21.6px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
