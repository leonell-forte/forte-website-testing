import { CardComponentData, HeroComponentData } from "./components";

export interface Page {
  title: "string";

  slug: string;

  id: string;

  __typename: string;
}

export interface AllPages {
  allPages: Page[];
}

export type ComponentRecords = "HeroSectionRecord" | "CardSectionRecord";

export interface Image {
  url: string;
}

export interface IndividualPage {
  page: {
    components: any[];
  };
}

export interface PageCompomnentProps {
  id: string;
}
