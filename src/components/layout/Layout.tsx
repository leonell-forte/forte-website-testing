import { useQuery } from "@tanstack/react-query";
import { LayoutType, ILayout } from "../../lib/types/layout";
import Header from "./Header";
import { fetchData } from "../../api/data-fetcher";
import { layoutQuery } from "../../lib/queries/layout";
import Footer from "./Footer";

const Layout = ({ children }: ILayout) => {
  const { data, isLoading } = useQuery<LayoutType>({
    queryKey: ["layout"],

    queryFn: () => fetchData(layoutQuery),
  });

  console.log(data, "123");

  return (
    <div>
      <div className="bg-body-gradient w-screen h-screen fixed top-0 left-0 z-[-1]" />

      {!isLoading && <Header {...data!.header!} />}

      <div>{children}</div>

      {!isLoading && <Footer {...data!.footer!} />}
    </div>
  );
};

export default Layout;
