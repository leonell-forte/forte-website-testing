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
    containers: {
      mobileBackgroundImage: Image;

      desktopBackgroundImage: Image;

      components: any[];
    }[];
  };
}

export interface PageCompomnentProps {
  id: string;
}
