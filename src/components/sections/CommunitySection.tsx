import { CommunityContent } from "@/lib/types/components";

import CTASection from "./CTASection/CTASection";
import CarouselSection from "./CarouselSection";
import InfiniteCarouselSection from "./InfiniteCarouselSection";
import PartnersSection from "./PartnersSection";

const CommunitySection = (props: CommunityContent) => {
  const { sections } = props;

  const { partners, testimonial, trustedBy, cta } = sections;

  return (
    <div>
      <PartnersSection {...partners} />
      <CarouselSection {...testimonial} />
      <InfiniteCarouselSection {...trustedBy} />
      <CTASection {...cta} />
    </div>
  );
};

export default CommunitySection;
