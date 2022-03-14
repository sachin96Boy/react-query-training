import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

const rootElement = document.getElementById("root");
const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>,
  rootElement
);
