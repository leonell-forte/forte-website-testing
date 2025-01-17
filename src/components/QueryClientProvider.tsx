import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * (60 * 1000), // 15 mins
      gcTime: 60 * (60 * 1000), // 1 hour
    },
  },
});

const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  });
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      {children}
    </PersistQueryClientProvider>
  );
};

export default QueryClientProvider;
