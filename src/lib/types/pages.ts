import { ITranslation } from "./components";
import { Option } from "./ui";

export interface Page {
  title: ITranslation;

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
    title: ITranslation;
    containers: {
      mobileBackgroundImage: Image;

      desktopBackgroundImage: Image;

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
