import { ComponentRecords, Image } from "./pages";

export interface HeroComponentData {
  __typename: ComponentRecords;

  buttonLabel: string;

  mainText: string;

  secondaryText: string;

  mobileImage: Image;

  desktopImage: Image;
}

export interface Card {
  title: string;

  description: string;

  image: Image;
}

export interface CardComponentData {
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

export interface FeatureSectionData {
  __typename: ComponentRecords;

  title: string;

  features: Feature[];
}

export interface Smallcard {
  title: string;

  description: string;

  link: string;
}

export interface SmallCardContent {
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

export interface BigCardContent {
  __typename: "BigCardContentRecord";

  title: string;

  description: string;

  bigCard: BigCard[];
}

export interface Partner {
  image: Image;
}

export interface PartnersContent {
  __typename: "PartnersContentRecord";

  title: string;

  partner: Partner[];
}

export interface ContentSectionData {
  __typename: string;

  backgroundImage: Image;

  content: SmallCardContent[] | BigCardContent[] | PartnersContent[];
}
