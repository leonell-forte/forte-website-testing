import world from "../../assets/images/icons/world.svg";
import chevron from "../../assets/images/icons/chevron.svg";
import MobileMenu from "./MobileMenu";
import menu from "../../assets/images/icons/menu.svg";
import closedMenu from "../../assets/images/icons/closedMenu.svg";
import { useState } from "react";
import Button from "../ui/button/button";
import classNames from "classnames";
import { HeaderType } from "../../lib/types/layout";
import { Link, useLocation } from "react-router-dom";

const Header = (props: HeaderType) => {
  const [isOpen, setIsOpen] = useState(false);

  const { logo, menu: menus } = props;

  const { pathname } = useLocation();

  return (
    <div className="h-[66px] w-full flex items-center justify-between px-10">
      <div className="md:w-[200px]">
        <img
          src={logo?.url}
          alt="logo"
          className="w-[60px] h-5 md:w-[75px] md:h-[25px] z-50"
        />
      </div>

      <ul className="h-10 px-6 bg-[#30F1FF1A] md:flex items-center justify-center rounded-[50px] hidden z-20">
        {menus?.map((item, index) => {
          const { label, link } = item;

          const isSelected = pathname === link;

          return (
            <Link
              to={link}
              key={index}
            >
              <li
                className={classNames(
                  "h-[27px] flex items-center justify-center px-5 rounded-[50px] font-medium",

                  isSelected && "bg-[#FFFFFF33]",
                )}
              >
                {label}
              </li>
            </Link>
          );
        })}
      </ul>

      <div className="flex items-center gap-[15px] z-50 md:w-[200px] justify-end">
        <div className="flex items-center gap-2">
          <img
            src={world}
            alt="world"
          />

          <div className="flex items-center gap-1">
            <p>ENG</p>

            <img
              src={chevron}
              alt="arrow"
            />
          </div>
        </div>

        <Button small>Contact</Button>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden w-[39px] h-[25px] md:w-[63px] md:h-10 rounded-[30px] bg-[#30F1FF1A] flex items-center justify-center"
        >
          {isOpen ? (
            <img
              src={closedMenu}
              alt="menu"
            />
          ) : (
            <img
              src={menu}
              alt="menu"
            />
          )}
        </button>
      </div>

      <MobileMenu
        isOpen={isOpen}
        menus={menus}
        handleClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Header;
