import { Image } from "./pages";

export interface HeroSectionProps {
  id: string;

  mainText: string;

  secondaryText: string;

  buttonLabel: string;

  mobileImage: Image;

  desktopImage: Image;
}
