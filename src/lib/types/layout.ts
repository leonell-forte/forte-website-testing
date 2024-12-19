import { ReactNode } from "react";

import { ITranslation } from "./components";
import { Image } from "./pages";

export interface ILayout {
  children?: ReactNode | string;
}

export type Menus = { label: ITranslation; link: string };

export interface IHeader {
  logo: Image;

  menu: Menus[];

  buttonLabel: ITranslation;

  buttonLink: string;
}

export interface Link {
  label: ITranslation;

  link: string;
}

export interface IFooter {
  logo: Image;

  description: ITranslation;

  links: Link[];

  socials: Link[];

  credits: ITranslation;
}

export type LayoutType = {
  header: IHeader;

  footer: IFooter;
};
