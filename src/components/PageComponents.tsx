import { fetchData } from "../api/data-fetcher";
import { individualPageQuery } from "../lib/queries/pages";
import { IndividualPage, PageCompomnentProps } from "../lib/types/pages";
import { useQuery } from "@tanstack/react-query";
import HeroSection from "./sections/HeroSection";
import CardSection from "./sections/CardSection/CardSection";
import FeatureSection from "./sections/FeatureSection/FeatureSection";
import ContentSection from "./sections/ContentSesction/ContentSection";
import CTASection from "./sections/CTASection/CTASection";

const PageComponents = ({ id }: PageCompomnentProps) => {
  const { data } = useQuery<IndividualPage>({
    queryKey: ["individual-page", id],

    queryFn: () => fetchData(individualPageQuery(id)),
  });

  const renderComponents = () => {
    return data?.page.components.map((item, index) => {
      const { __typename } = item;

      switch (__typename) {
        case "HeroSectionRecord":
          return (
            <HeroSection
              key={index}
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

        case "ContentSectionRecord":
          return (
            <ContentSection
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

        default:
          return "";
      }
    });
  };

  return <div>{renderComponents()}</div>;
};

export default PageComponents;
