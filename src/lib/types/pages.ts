export interface Page {
  title: "string";

  slug: string;

  id: string;
}

export interface AllPages {
  allPages: Page[];
}

export type ComponentRecords = "HeroSectionRecord";

export interface Image {
  url: string;
}

export interface Component {
  id: string;

  __typename: ComponentRecords;

  mainText: string;

  secondaryText: string;

  buttonLabel: string;

  mobileImage: Image;

  desktopImage: Image;
}

export interface IndividualPage {
  page: {
    components: Component[];
  };
}

export interface PageCompomnentProps {
  id: string;
}
