import "./App.css";
import QueryClientProvider from "./components/QueryClientProvider";
import RouteProvider from "./components/home/RouteProvider";

const App = () => {
  return (
    <QueryClientProvider>
      <RouteProvider />
    </QueryClientProvider>
  );
};

export default App;
