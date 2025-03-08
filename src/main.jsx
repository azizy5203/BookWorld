import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import "@/assets/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById("root")).render(
  <App />
);
