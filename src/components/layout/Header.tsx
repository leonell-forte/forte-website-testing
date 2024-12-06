import world from "../../assets/images/icons/world.svg";
import chevron from "../../assets/images/icons/chevron.svg";
import MobileMenu from "./MobileMenu";
import menu from "../../assets/images/icons/menu.svg";
import closedMenu from "../../assets/images/icons/closedMenu.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[66px] w-full flex items-center justify-between px-10">
      <img
        src="/logo.png"
        alt="logo"
        className="w-[60px] h-5 md:w-[75px] md:h-[25px] z-50"
      />

      <div className="flex items-center gap-[15px] z-50">
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

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-[39px] h-[25px] md:w-[63px] md:h-10 rounded-[30px] bg-[#30F1FF1A] flex items-center justify-center"
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
      <MobileMenu isOpen={isOpen} />
    </div>
  );
};

export default Header;
