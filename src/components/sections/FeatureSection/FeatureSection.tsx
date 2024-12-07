import { FeatureSectionData } from "../../../lib/types/components";
import dot from "../../../assets/images/icons/dot.svg";

const FeatureSection = (props: FeatureSectionData) => {
  const { features, title } = props;

  console.log(features);

  return (
    <div className="py-[60px] space-y-10 md:space-y-[85px]">
      <p className="text-center font-lyon text-[32px] leading-[38.4px] md:text-[66px] md:leading-[66px]">
        {title}
      </p>

      <div className="space-y-5 md:space-y-[30px]">
        {features.map((item, index) => {
          const { title, headline, description, points, image } = item;

          return (
            <div
              key={index}
              className="py-10 px-5 md:py-[60px] md:px-10 bg-[#30F1FF1A] rounded-[9px] space-y-10 md:space-y-[60px]"
            >
              <div className="flex flex-col gap-10 md:gap-[60px] lg:flex-row lg:justify-between">
                <div className="space-y-[30px] lg:max-w-[488px]">
                  <p className="text-[10px] md:text-[17px] text-mint">
                    {title}
                  </p>

                  <div className="space-y-[25px]">
                    <p className="text-[27px] md:text-[50px] font-lyon leading-[32.4px] md:leading-[60px]">
                      {headline}
                    </p>

                    <p className="text-[15px] md:text-[22px] leading-[18px] md:leading-[26.4px]">
                      {description}
                    </p>
                  </div>
                </div>

                <img
                  src={image.url}
                  alt="feature-image"
                  className="lg:max-w-[488px]"
                />
              </div>

              <div className="flex flex-col md:flex-row">
                {points.map((item, index) => {
                  const { description } = item;

                  return (
                    <div className="border-t py-5 md:py-[30px] flex items-start gap-4">
                      <img
                        src={dot}
                        alt="dot"
                        className=" w-1 h-6"
                      />
                      <p className="text-[12px] md:text-[18px]">
                        {description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
