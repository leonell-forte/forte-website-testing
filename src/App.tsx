import "./App.css";
import QueryClientProvider from "./components/QueryClientProvider";
import RouteProvider from "./components/RouteProvider";
import TranslationProvider from "./components/TranslationProvider";

const App = () => {
  return (
    <QueryClientProvider>
      <TranslationProvider>
        <RouteProvider />
      </TranslationProvider>
    </QueryClientProvider>
  );
};

export default App;
