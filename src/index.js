import React from "react";
import { createRoot } from "react-dom/client"; // Correct for React 18+
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);