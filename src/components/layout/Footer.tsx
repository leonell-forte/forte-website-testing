import { Link } from "react-router-dom";
import { IFooter } from "../../lib/types/layout";

const Footer = (props: IFooter) => {
  const { logo, description, links, socials, credits } = props;

  return (
    <div className="space-y-[60px] py-[60px] md:px-20 px-10 bg-dark-green">
      <div className="gap-y-[60px] grid grid-cols-1 lg:flex lg:gap-[244px] items-start">
        <div className="flex flex-col gap-[30px] lg:max-w-[426px] w-full">
          <img
            src={logo.url}
            alt="logo"
            className="w-[97px] h-[33px] md:w-[139px] md:h-[46px]"
          />

          <p className="text-[12px] md:text-[18px] font-light">{description}</p>
        </div>

        <div className="grid grid-cols-2 w-full">
          <ul className="flex flex-col gap-5 md:gap-[30px]">
            {links.map((item, index) => {
              const { label, link } = item;
              return (
                <Link
                  key={index}
                  to={link}
                  className="text-[15px] md:text-[18px] font-medium"
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
                  className="text-[15px] md:text-[18px] font-medium"
                >
                  {label}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="text-[15px] md:text-[18px] text-[#FFFFFFB2]">{credits}</p>
    </div>
  );
};

export default Footer;
