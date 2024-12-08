import { useCallback } from "react";
import { ContentSectionData } from "../../../lib/types/components";
import SmallCardContent from "./SmallCardContent";
import BigCardContent from "./BigCardContent";
import PartnersContent from "./PartnersContent";
import CarouselContent from "./CarouselContent";

const ContentSection = (props: ContentSectionData) => {
  const { content, backgroundImage } = props;

  const renderContent = useCallback(() => {
    return content.map((item, index) => {
      const { __typename } = item;

      switch (__typename) {
        case "SmallCardContentRecord":
          return (
            <SmallCardContent
              key={index}
              {...item}
            />
          );

        case "BigCardContentRecord":
          return (
            <BigCardContent
              key={index}
              {...item}
            />
          );

        case "PartnersContentRecord":
          return (
            <PartnersContent
              key={index}
              {...item}
            />
          );

        case "CarouselContentRecord":
          return (
            <CarouselContent
              key={index}
              {...item}
            />
          );

        default:
          return null;
      }
    });
  }, [content]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage?.url})`,
        backgroundSize: "cover",
      }}
    >
      <div className="main-container">{renderContent()}</div>
    </div>
  );
};

export default ContentSection;
