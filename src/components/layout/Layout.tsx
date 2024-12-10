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
      {!isLoading && <Header {...data!.header!} />}

      <div>{children}</div>

      {!isLoading && <Footer {...data!.footer!} />}
    </div>
  );
};

export default Layout;
