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
