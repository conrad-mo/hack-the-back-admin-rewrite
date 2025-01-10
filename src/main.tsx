import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>,
);
