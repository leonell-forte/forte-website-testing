import { render } from "datocms-structured-text-to-html-string";
import DOMPurify from "dompurify";
import { useMemo } from "react";

import { useTranslation } from "@/lib/hooks";
import { PrivacyPolicyContent as Type } from "@/lib/types/components";

import SectionContainer from "../ui/section-container/SectionContainer";

const PrivacyPolicy = (props: Type) => {
  const { title, content } = props;

  const { translation } = useTranslation();

  const raw = useMemo(
    () => render(content[translation]) as string,
    [content, translation]
  );

  return (
    <div className="py-[100px]">
      <SectionContainer className="main-container min-h-screen space-y-[60px] py-[30px] text-left sm:space-y-[100px] sm:py-[80px] lg:py-[100px]">
        <p className="text-center font-lyon text-[40px] leading-[38.4px] sm:text-[82px] sm:leading-[79.2px]">
          {title[translation]}
        </p>
        <div
          className="rich-container mx-auto lg:max-w-[715px]"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(raw) }}
        />
      </SectionContainer>
    </div>
  );
};

export default PrivacyPolicy;
