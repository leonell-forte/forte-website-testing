import { PartnersContent as Type } from "../../../lib/types/components";

const PartnersContent = (props: Type) => {
  const { title, partner } = props;

  return (
    <div className="py-6 md:py-24 space-y-10 md:space-y-[85px] lg:space-y-[100px]">
      <p className="text-center font-lyon text-[32px] md:text-[66px] leading-[38.4px] md:leading-[79.2px]">
        {title}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {partner.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[80px] md:h-[115px] lg:h-[161px] flex items-center justify-center px-6 md:px-11 lg:px-[65px]"
            >
              <img
                src={item.image.url}
                alt="partner"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnersContent;
