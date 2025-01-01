import { useQuery } from "@tanstack/react-query";

import { fetchData } from "../api/data-fetcher";
import { useScreenSize, useTranslation } from "../lib/hooks";
import { individualPageQuery } from "../lib/queries/pages";
import { IndividualPage, PageCompomnentProps } from "../lib/types/pages";
import AboutHeroSection from "./sections/AboutHeroSection";
import BigCardSection from "./sections/BigCardSection";
import CTASection from "./sections/CTASection/CTASection";
import CardSection from "./sections/CardSection/CardSection";
import CarouselSection from "./sections/CarouselSection";
import FeatureSection from "./sections/FeatureSection/FeatureSection";
import HeroSection from "./sections/HeroSection";
import InfiniteCarouselSection from "./sections/InfiniteCarouselSection";
import PartnersSection from "./sections/PartnersSection";
import SmallCardSection from "./sections/SmallCardSection";
import TeamSection from "./sections/TeamSection";
import Contact from "./sections/static/Contact";

const CONTACT_SLUG = "/contact";

const PageComponents = ({ id, slug }: PageCompomnentProps) => {
  const { data } = useQuery<IndividualPage>({
    queryKey: ["individual-page", id],

    queryFn: () => fetchData(individualPageQuery(id)),
  });

  const { isMobile } = useScreenSize();

  const { translation } = useTranslation();

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
          {slug === CONTACT_SLUG ? (
            <Contact
              title={data?.page?.title[translation]}
              {...item.components?.[0]}
            />
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

                case "InfiniteCarouselRecord":
                  return <InfiniteCarouselSection key={index} {...item} />;

                case "AboutHeroRecord":
                  return <AboutHeroSection key={index} {...item} />;

                case "TeamSectionRecord":
                  return <TeamSection key={index} {...item} />;

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
