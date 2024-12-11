import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AllPages } from "@/lib/types/pages";

import { fetchData } from "../api/data-fetcher";
import { pageQuery } from "../lib/queries/pages";
import PageComponents from "./PageComponents";
import Layout from "./layout/Layout";

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
                    element={<PageComponents id={id} slug={slug} />}
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
