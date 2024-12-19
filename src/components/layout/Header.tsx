import classNames from "classnames";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import closedMenu from "@/assets/images/icons/closedMenu.svg";
import menu from "@/assets/images/icons/menu.svg";
import { useTranslation } from "@/lib/hooks";
import { IHeader } from "@/lib/types/layout";

import Button from "../ui/button/button";
import MobileMenu from "./MobileMenu";
import TranslateDropdown from "./TranslateDropdown";

const Header = (props: IHeader) => {
  const [isOpen, setIsOpen] = useState(false);

  const { logo, menu: menus, buttonLabel, buttonLink } = props;

  const { pathname } = useLocation();

  const { translation } = useTranslation();

  return (
    <div className="absolute z-50 w-full">
      <div className="mx-auto flex h-[66px] max-w-[1320px] items-end px-5 md:h-[100px]">
        <div className="flex w-full items-center justify-between px-[20px]">
          <div className="md:w-[200px]">
            <img
              src={logo?.url}
              alt="logo"
              className="z-50 h-5 w-[60px] md:h-[25px] md:w-[75px]"
            />
          </div>

          <ul className="z-20 hidden h-10 items-center justify-center rounded-[50px] bg-[#30F1FF1A] px-4 md:flex">
            {menus?.map((item, index) => {
              const { label, link } = item;

              const isSelected = pathname === link;

              return (
                <Link to={link} key={index}>
                  <li
                    className={classNames(
                      "flex h-[27px] items-center justify-center rounded-[50px] px-5 font-medium",

                      isSelected && "bg-[#FFFFFF33]"
                    )}
                  >
                    {label[translation]}
                  </li>
                </Link>
              );
            })}
          </ul>

          <div className="z-50 flex items-center justify-end gap-[15px] md:w-[200px]">
            <TranslateDropdown />

            <Button className="px-6" href={buttonLink} small>
              {buttonLabel[translation]}
            </Button>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-[25px] w-[39px] items-center justify-center rounded-[30px] bg-[#30F1FF1A] md:hidden md:h-10 md:w-[63px]"
            >
              {isOpen ? (
                <img src={closedMenu} alt="menu" />
              ) : (
                <img src={menu} alt="menu" />
              )}
            </button>
          </div>

          <MobileMenu
            isOpen={isOpen}
            menus={menus}
            handleClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
