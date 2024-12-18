import { useRef, useState } from "react";

import chevron from "@/assets/images/icons/chevron.svg";
import world from "@/assets/images/icons/world.svg";
import { useOutsideClick } from "@/lib/hooks";

const TranslateDropdown = () => {
  const languages = ["ENG", "ESP"];

  const [selected, setSelected] = useState(languages[0]);

  const [show, setShow] = useState(false);

  const ref = useRef(null);

  useOutsideClick(ref, () => {
    setShow(false);
  });

  return (
    <button
      ref={ref}
      className="relative flex w-[57px] justify-between gap-2"
      onClick={() => setShow((prev) => !prev)}
    >
      <img src={world} alt="world" />

      <div className="flex min-w-[35px] items-center justify-between gap-1">
        <p className="text-[11px]">{selected}</p>

        <img src={chevron} alt="arrow" />
      </div>

      {show && (
        <ul className="absolute right-0 top-6 w-[70px] rounded-[4px] bg-white p-2">
          {languages.map((item, index) => {
            return (
              <button
                onClick={() => setSelected(item)}
                key={index}
                className="w-full p-1 text-right transition-all hover:bg-gray-100"
              >
                <li className="text-[12px] text-forest-green">{item}</li>
              </button>
            );
          })}
        </ul>
      )}
    </button>
  );
};

export default TranslateDropdown;
