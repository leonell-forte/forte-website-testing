import { Option } from "./ui";

export interface Page {
  title: "string";

  slug: string;

  id: string;

  __typename: string;
}

export interface AllPages {
  allPages: Page[];
}

export type ComponentRecords =
  | "HeroSectionRecord"
  | "CardSectionRecord"
  | "FeatureSectionRecord"
  | "ContentSectionRecord"
  | "CTASectionRecord";

export interface Image {
  url: string;
}

export interface IndividualPage {
  page: {
    title?: string;
    containers: {
      backgroundImage: Image;

      components: any[];
    }[];
  };
}

export interface PageCompomnentProps {
  id: string;
  slug?: string;
}

export type ContactProps = {
  title: string;
  topicList: Option[];
};
