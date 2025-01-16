import { useQuery } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AllPages } from "@/lib/types/pages";

import { fetchData } from "../api/data-fetcher";
import { pageQuery } from "../lib/queries/pages";
import PageComponents from "./PageComponents";
import Layout from "./layout/Layout";
import Loader from "./ui/loader/Loader";

const RouteProvider = () => {
  const { data } = useQuery<AllPages>({
    queryKey: ["pages"],

    queryFn: () => fetchData(pageQuery),
    refetchOnWindowFocus: false,
  });

  return (
    <Router>
      <Layout>
        <div>
          <AnimatePresence mode="wait">
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
          </AnimatePresence>
        </div>
      </Layout>
    </Router>
  );
};

export default RouteProvider;
