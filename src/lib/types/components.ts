import { ComponentRecords, Image } from "./pages";

export interface IPaddings {
  mobilePadding: string;

  tabletPadding: string;

  desktopPadding: string;
}

export interface ITranslation {
  en: string;

  es: string;
}

export interface HeroComponentData extends IPaddings {
  __typename: ComponentRecords;

  buttonLabel: ITranslation;

  buttonLink: string;

  mainText: ITranslation;

  secondaryText: ITranslation;

  mobileImage: Image;

  desktopImage: Image;

  index?: number;
}

export interface Card {
  title: ITranslation;

  description: ITranslation;

  image: Image;
}

export interface CardComponentData extends IPaddings {
  __typename: ComponentRecords;

  header: ITranslation;

  description: ITranslation;

  cards: Card[];
}

export interface Feature {
  title: ITranslation;

  headline: ITranslation;

  description: ITranslation;

  image: Image;

  points: {
    description: ITranslation;
  }[];
}

export interface FeatureSectionData extends IPaddings {
  __typename: ComponentRecords;

  title: ITranslation;

  features: Feature[];
}

export interface Smallcard {
  title: ITranslation;

  description: ITranslation;

  link: string;
}

export interface SmallCardContent extends IPaddings {
  __typename: "SmallCardContentRecord";

  title: ITranslation;

  description: ITranslation;

  smallCards: Smallcard[];
}

export interface BigCard {
  title: ITranslation;

  description: ITranslation;

  image: Image;
}

export interface BigCardContent extends IPaddings {
  __typename: "BigCardContentRecord";

  title: ITranslation;

  description: ITranslation;

  bigCard: BigCard[];
}

export interface Partner {
  image: Image;
}

export interface PartnersContent extends IPaddings {
  __typename: "PartnersContentRecord";

  title: ITranslation;

  flex: boolean;

  partner: Partner[];
}

export interface InfiniteCarouselContent {
  __typename: "InfiniteCarouselRecord";

  title: ITranslation;

  partner: Partner[];
}

export interface CarouselItem {
  mainText: ITranslation;

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

  title: ITranslation;

  description: ITranslation;

  buttonLink: string;

  buttonLabel: ITranslation;

  mobileBackground: Image;

  desktopBackground: Image;
}
