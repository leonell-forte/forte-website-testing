import { Link } from "react-router-dom";
import { IFooter } from "../../lib/types/layout";

const Footer = (props: IFooter) => {
  const { logo, description, links, socials, credits } = props;

  return (
    <div className="space-y-[60px] py-[60px] md:py-[100px] md:px-20 px-10 lg:p-[120px] bg-dark-green">
      <div className="space-y-[60px] grid grid-cols-1 lg:grid-cols-2 lg:gap-[244px] items-start">
        <div className="space-y-[30px] max-w-[426px]">
          <img
            src={logo.url}
            alt="logo"
            className="w-[97px] h-[33px] md:w-[139px] md:h-[46px]"
          />

          <p className="text-[12px] md:text-[18px] font-light">{description}</p>
        </div>

        <div className="grid grid-cols-2">
          <ul className="flex flex-col gap-5">
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
                  className="text-[15px] font-medium"
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
