import { useQuery } from "@tanstack/react-query";

import { fetchData } from "../api/data-fetcher";
import { individualPageQuery } from "../lib/queries/pages";
import { IndividualPage, PageCompomnentProps } from "../lib/types/pages";
import BigCardSection from "./sections/BigCardSection";
import CTASection from "./sections/CTASection/CTASection";
import CardSection from "./sections/CardSection/CardSection";
import CarouselSection from "./sections/CarouselSection";
import FeatureSection from "./sections/FeatureSection/FeatureSection";
import HeroSection from "./sections/HeroSection";
import PartnersSection from "./sections/PartnersSection";
import SmallCardSection from "./sections/SmallCardSection";
import Contact from "./sections/static/Contact";

const CONTACT_SLUG = "/contact";

const PageComponents = ({ id, slug }: PageCompomnentProps) => {
  const { data } = useQuery<IndividualPage>({
    queryKey: ["individual-page", id],

    queryFn: () => fetchData(individualPageQuery(id)),
  });

  console.log(data);

  const renderComponents = () => {
    return data?.page.containers.map((item, index) => {
      const { backgroundImage } = item;
      return (
        <div
          key={index}
          style={{
            backgroundImage: `url(${backgroundImage?.url})`,

            backgroundPosition: "center",

            backgroundSize: "cover",
          }}
        >
          {slug === CONTACT_SLUG ? (
            <Contact title={data?.page?.title} {...item.components?.[0]} />
          ) : (
            item.components.map((item, index) => {
              const { __typename } = item;

              switch (__typename) {
                case "HeroSectionRecord":
                  return <HeroSection key={index} index={index} {...item} />;

                case "CardSectionRecord":
                  return <CardSection key={index} {...item} />;

                case "FeatureSectionRecord":
                  return <FeatureSection key={index} {...item} />;

                case "CtaSectionRecord":
                  return <CTASection key={index} {...item} />;

                case "SmallCardSectionRecord":
                  return <SmallCardSection key={index} {...item} />;

                case "BigCardSectionRecord":
                  return <BigCardSection key={index} {...item} />;

                case "PartnersSectionRecord":
                  return <PartnersSection key={index} {...item} />;

                case "CarouselSectionRecord":
                  return <CarouselSection key={index} {...item} />;

                default:
                  return "";
              }
            })
          )}
        </div>
      );
    });
  };

  return <div>{renderComponents()}</div>;
};

export default PageComponents;
