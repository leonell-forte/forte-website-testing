import { ComponentRecords, Image } from "./pages";

export interface IPaddings {
  mobilePadding: string;

  tabletPadding: string;

  desktopPadding: string;
}

export interface HeroComponentData extends IPaddings {
  __typename: ComponentRecords;

  buttonLabel: string;

  buttonLink: string;

  mainText: string;

  secondaryText: string;

  mobileImage: Image;

  desktopImage: Image;

  index?: number;
}

export interface Card {
  title: string;

  description: string;

  image: Image;
}

export interface CardComponentData extends IPaddings {
  __typename: ComponentRecords;

  header: string;

  description: string;

  cards: Card[];
}

export interface Feature {
  title: string;

  headline: string;

  description: string;

  image: Image;

  points: {
    description: string;
  }[];
}

export interface FeatureSectionData extends IPaddings {
  __typename: ComponentRecords;

  title: string;

  features: Feature[];
}

export interface Smallcard {
  title: string;

  description: string;

  link: string;
}

export interface SmallCardContent extends IPaddings {
  __typename: "SmallCardContentRecord";

  title: string;

  description: string;

  smallCards: Smallcard[];
}

export interface BigCard {
  title: string;

  description: string;

  image: Image;
}

export interface BigCardContent extends IPaddings {
  __typename: "BigCardContentRecord";

  title: string;

  description: string;

  bigCard: BigCard[];
}

export interface Partner {
  image: Image;
}

export interface PartnersContent extends IPaddings {
  __typename: "PartnersContentRecord";

  title: string;

  flex: boolean;

  partner: Partner[];
}

export interface CarouselItem {
  mainText: string;

  secondaryText: string;

  image: Image;
}

export interface CarouselContent extends IPaddings {
  __typename: "CarouselContentRecord";

  backgroundImage: Image;

  carouselItems: CarouselItem[];
}

export interface ContentSectionData {
  __typename: string;

  backgroundImage: Image;

  content:
    | SmallCardContent[]
    | BigCardContent[]
    | PartnersContent[]
    | CarouselContent[];
}

export interface CTASectionData extends IPaddings {
  __typename: string;

  title: string;

  description: string;

  buttonLink: string;

  buttonLabel: string;

  mobileBackground: Image;

  desktopBackground: Image;
}
