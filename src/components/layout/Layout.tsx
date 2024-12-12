import { useQuery } from "@tanstack/react-query";

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

  console.log(data, "123");

  return (
    <ScrollArea>
      <div className="relative">
        {!isLoading && <Header {...data!.header!} />}

        {children}
      </div>

      {!isLoading && <Footer {...data!.footer!} />}
    </ScrollArea>
  );
};

export default Layout;
