import { ReactNode } from "react";

export interface ILayout {
  children?: ReactNode | string;
}

export type Menus = { label: string; link: string };

export type HeaderType = {
  logo: {
    url: string;
  };

  menu: Menus[];
};
