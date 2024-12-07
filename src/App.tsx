import "./App.css";
import QueryClientProvider from "./components/QueryClientProvider";
import RouteProvider from "./components/RouteProvider";

const App = () => {
  return (
    <QueryClientProvider>
      <RouteProvider />
    </QueryClientProvider>
  );
};

export default App;
