import { Link } from "react-router-dom";

import { IFooter } from "@/lib/types/layout";

const Footer = (props: IFooter) => {
  const { logo, description, links, socials, credits } = props;

  return (
    <div className="space-y-[60px] bg-dark-green px-[40px] py-[60px] sm:px-[80px] sm:py-[100px] md:px-[120px] md:py-[120px]">
      <div className="grid grid-cols-1 items-start gap-y-[60px] lg:flex lg:gap-[244px]">
        <div className="flex w-full flex-col gap-[30px] lg:max-w-[426px]">
          <img
            src={logo.url}
            alt="logo"
            className="h-[33px] w-[97px] md:h-[46px] md:w-[139px]"
          />

          <p className="text-[12px] font-light md:text-[18px]">{description}</p>
        </div>

        <div className="grid w-full grid-cols-2">
          <ul className="flex flex-col gap-5 md:gap-[30px]">
            {links.map((item, index) => {
              const { label, link } = item;
              return (
                <Link
                  key={index}
                  to={link}
                  className="text-[15px] font-medium md:text-[18px]"
                >
                  {label}
                </Link>
              );
            })}
          </ul>

          <ul className="flex flex-col gap-5 md:gap-[30px]">
            {socials.map((item, index) => {
              const { label, link } = item;
              return (
                <Link
                  key={index}
                  to={link}
                  className="text-[15px] font-medium md:text-[18px]"
                >
                  {label}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="text-[15px] text-[#FFFFFFB2] md:text-[18px]">{credits}</p>
    </div>
  );
};

export default Footer;
