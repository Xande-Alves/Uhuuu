import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CidadeProvider } from "./contexts/CidadeContext.jsx"; // importe o provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CidadeProvider> 
      <App />
    </CidadeProvider>
  </StrictMode>
);
