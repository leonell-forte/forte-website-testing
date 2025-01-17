import { Link } from "react-router-dom";

import { useTranslation } from "@/lib/hooks";
import { IFooter } from "@/lib/types/layout";

const Footer = (props: IFooter) => {
  const { logo, description, links, socials, credits } = props;

  console.log(props);

  const { translation } = useTranslation();

  return (
    <div className="space-y-[60px] bg-dark-green px-[40px] py-[60px] sm:px-[80px] sm:py-[100px] md:space-y-[100px] md:px-[120px] md:py-[120px]">
      <div className="grid grid-cols-1 items-start gap-y-[60px] lg:flex lg:gap-[244px]">
        <div className="flex w-full flex-col gap-[30px] md:gap-[60px] lg:max-w-[426px]">
          <img
            src={logo.url}
            alt="logo"
            className="h-[33px] w-[97px] md:h-[46px] md:w-[139px]"
          />

          <p className="text-[12px] font-light leading-[14.4px] md:text-[18px] md:leading-[21.6px]">
            {description[translation]}
          </p>
        </div>

        <div className="grid w-full grid-cols-2">
          <ul className="flex flex-col gap-5 md:gap-[20px]">
            {links.map((item, index) => {
              const { label, link } = item;
              return (
                <Link
                  key={index}
                  to={link}
                  className="w-fit text-[15px] font-medium transition duration-300 hover:text-mint md:text-[18px]"
                >
                  {label[translation]}
                </Link>
              );
            })}
          </ul>

          <ul className="flex flex-col gap-5 md:gap-[20px]">
            {socials.map((item, index) => {
              const { label, link } = item;
              console.log(item);
              return (
                <Link
                  key={index}
                  to={link}
                  className="w-fit text-[15px] font-medium transition duration-300 hover:text-mint md:text-[18px]"
                >
                  {label[translation]}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="text-[15px] text-[#FFFFFFB2] md:text-[18px]">
        {credits[translation]}
      </p>
    </div>
  );
};

export default Footer;
