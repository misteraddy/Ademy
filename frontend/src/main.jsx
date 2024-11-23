import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/authcontext";
import { ThemeProvider } from "./pages/DarkMode/ThemeProvider";
import InstructorProvider from "./context/instructorcontext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <InstructorProvider>
          <App />
        </InstructorProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
