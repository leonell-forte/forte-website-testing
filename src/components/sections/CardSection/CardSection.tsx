import { CardComponentData } from "@/lib/types/components";
import Card from "./Card";

const CardSection = (props: CardComponentData) => {
  const { header, description, cards } = props;

  return (
    <div className="space-y-10 md:space-y-[100px]">
      <div className="text-center">
        <p className="font-lyon text-[32px] md:text-[66px]">{header}</p>

        <p className="text-[15px] md:text-[22px]">{description}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        {cards.map((item, index) => {
          return (
            <Card
              key={index}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardSection;
