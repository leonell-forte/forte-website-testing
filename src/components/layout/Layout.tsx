import { ILayout } from "@/lib/types/layout";
import Header from "./Header";

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <div className="bg-body-gradient w-screen h-screen fixed top-0 left-0 z-[-1]" />

      <Header />

      <div>{children}</div>
    </div>
  );
};

export default Layout;
