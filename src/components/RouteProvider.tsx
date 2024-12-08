import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/data-fetcher";
import { pageQuery } from "../lib/queries/pages";
import { AllPages } from "@/lib/types/pages";
import PageComponents from "./PageComponents";

const RouteProvider = () => {
  const { data } = useQuery<AllPages>({
    queryKey: ["pages"],

    queryFn: () => fetchData(pageQuery),
  });

  return (
    <Router>
      <Layout>
        <div>
          <Suspense fallback={<p>loading...</p>}>
            <Routes>
              {data?.allPages.map((item, index) => {
                const { slug, id } = item;
                return (
                  <Route
                    key={index}
                    path={slug}
                    element={<PageComponents id={id} />}
                  />
                );
              })}
            </Routes>
          </Suspense>
        </div>
      </Layout>
    </Router>
  );
};

export default RouteProvider;
