import classNames from "classnames";
import { motion, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { InfiniteCarouselContent as Type } from "@/lib/types/components";

interface CarouselItem {
  id: number;
  content: string;
}

const items: CarouselItem[] = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
  { id: 3, content: "Item 3" },
  { id: 4, content: "Item 4" },
  { id: 5, content: "Item 5" },
  { id: 6, content: "Item 6" },
  { id: 7, content: "Item 7" },
  { id: 8, content: "Item 8" },
];

const ITEM_WIDTH = 150;
const GAP = 150;

export default function InfiniteCarouselSection({ title, partner }: Type) {
  const [loopItems, setLoopItems] = useState<Type["partner"]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const xPos = useRef(0);

  useEffect(() => {
    if (partner.length === 0) return;
    const totalWidth = partner.length * (ITEM_WIDTH + GAP);
    const minItems = Math.ceil(window.innerWidth / totalWidth) + 1;
    const itemsToAdd = items.length * minItems;
    setLoopItems(
      Array(itemsToAdd)
        .fill(null)
        .flatMap(() => partner)
    );
    setWidth(totalWidth);
  }, [partner]);

  useAnimationFrame(() => {
    if (isHovered || !containerRef.current) return;

    xPos.current -= 1;
    if (xPos.current <= -width) {
      xPos.current += width;
    }
    containerRef.current.style.transform = `translateX(${xPos.current}px)`;
  });

  return (
    <div className="space-y-[60px] py-[60px] sm:py-[100px] md:space-y-[60px] md:py-[150px]">
      <p className="text-center font-lyon text-[32px] leading-[38.4px] md:text-[50px] md:leading-[60px]">
        {title}
      </p>
      <div className="w-full overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex items-center gap-[150px]"
          style={{ width: `${loopItems.length * (ITEM_WIDTH + GAP)}px` }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {loopItems.map((item, index) => (
            <img
              key={index}
              src={item.image.url}
              alt="partner"
              className={classNames(
                "h-full max-h-[50px] max-w-[150px] object-contain md:max-h-[80px]"
              )}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
