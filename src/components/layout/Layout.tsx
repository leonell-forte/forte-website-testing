import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { fetchData } from "@/api/data-fetcher";
import { layoutQuery } from "@/lib/queries/layout";
import { ILayout, LayoutType } from "@/lib/types/layout";

import { ScrollArea } from "../ui/scroll-area/ScrollArea";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: ILayout) => {
  const { data, isLoading } = useQuery<LayoutType>({
    queryKey: ["layout"],

    queryFn: () => fetchData(layoutQuery),
  });
  const header = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (header.current) header.current.scrollIntoView({ behavior: "smooth" });
  }, [header, pathname]);

  return (
    <ScrollArea>
      <div className="relative" ref={header}>
        {!isLoading && <Header {...data!.header!} />}

        {children}
      </div>

      {!isLoading && <Footer {...data!.footer!} />}
    </ScrollArea>
  );
};

export default Layout;
