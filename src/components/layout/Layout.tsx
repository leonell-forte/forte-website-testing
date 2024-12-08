import { useQuery } from "@tanstack/react-query";
import { HeaderType, ILayout } from "../../lib/types/layout";
import Header from "./Header";
import { fetchData } from "../../api/data-fetcher";
import { layoutQuery } from "../../lib/queries/layout";

const Layout = ({ children }: ILayout) => {
  const { data, isLoading } = useQuery<{ header: HeaderType }>({
    queryKey: ["layout"],

    queryFn: () => fetchData(layoutQuery),
  });

  return (
    <div>
      <div className="bg-body-gradient w-screen h-screen fixed top-0 left-0 z-[-1]" />

      {!isLoading && <Header {...data!.header!} />}

      <div>{children}</div>
    </div>
  );
};

export default Layout;
