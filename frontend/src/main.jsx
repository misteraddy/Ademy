import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./pages/DarkMode/ThemeProvider";
import { AppContextProvider } from "./context/AppContextProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
