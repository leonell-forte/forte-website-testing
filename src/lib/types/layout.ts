import { ReactNode } from "react";

import { Image } from "./pages";

export interface ILayout {
  children?: ReactNode | string;
}

export type Menus = { label: string; link: string };

export interface IHeader {
  logo: Image;

  menu: Menus[];

  buttonLabel: string;

  buttonLink: string;
}

export interface Link {
  label: string;

  link: string;
}

export interface IFooter {
  logo: Image;

  description: string;

  links: Link[];

  socials: Link[];

  credits: string;
}

export type LayoutType = {
  header: IHeader;

  footer: IFooter;
};
