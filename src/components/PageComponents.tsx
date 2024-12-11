import { fetchData } from "../api/data-fetcher";
import { individualPageQuery } from "../lib/queries/pages";
import { IndividualPage, PageCompomnentProps } from "../lib/types/pages";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "./sections/HeroSection";
import CardSection from "./sections/CardSection/CardSection";
import FeatureSection from "./sections/FeatureSection/FeatureSection";
import CTASection from "./sections/CTASection/CTASection";
import SmallCardSection from "./sections/SmallCardSection";
import BigCardSection from "./sections/BigCardSection";
import PartnersSection from "./sections/PartnersSection";
import CarouselSection from "./sections/CarouselSection";
import { useScreenSize } from "../lib/hooks";

const PageComponents = ({ id }: PageCompomnentProps) => {
  const { data } = useQuery<IndividualPage>({
    queryKey: ["individual-page", id],

    queryFn: () => fetchData(individualPageQuery(id)),
  });

  const { isMobile } = useScreenSize();

  console.log(data);

  const renderComponents = () => {
    return data?.page.containers.map((item, index) => {
      const { mobileBackgroundImage, desktopBackgroundImage } = item;
      return (
        <div
          key={index}
          style={{
            backgroundImage: `url(${
              isMobile
                ? mobileBackgroundImage?.url || desktopBackgroundImage?.url
                : desktopBackgroundImage?.url
            })`,

            backgroundPosition: "center",

            backgroundSize: "cover",
          }}
        >
          {item.components.map((item, index) => {
            const { __typename } = item;

            switch (__typename) {
              case "HeroSectionRecord":
                return (
                  <HeroSection
                    key={index}
                    index={index}
                    {...item}
                  />
                );

              case "CardSectionRecord":
                return (
                  <CardSection
                    key={index}
                    {...item}
                  />
                );

              case "FeatureSectionRecord":
                return (
                  <FeatureSection
                    key={index}
                    {...item}
                  />
                );

              case "CtaSectionRecord":
                return (
                  <CTASection
                    key={index}
                    {...item}
                  />
                );

              case "SmallCardSectionRecord":
                return (
                  <SmallCardSection
                    key={index}
                    {...item}
                  />
                );

              case "BigCardSectionRecord":
                return (
                  <BigCardSection
                    key={index}
                    {...item}
                  />
                );

              case "PartnersSectionRecord":
                return (
                  <PartnersSection
                    key={index}
                    {...item}
                  />
                );

              case "CarouselSectionRecord":
                return (
                  <CarouselSection
                    key={index}
                    {...item}
                  />
                );

              default:
                return "";
            }
          })}
        </div>
      );
    });
  };

  return <div>{renderComponents()}</div>;
};

export default PageComponents;
