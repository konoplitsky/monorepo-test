import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./style.css";
import hostRouter from "./router/Router";

const container = document.getElementById("app")!;
createRoot(container).render(<RouterProvider router={hostRouter} />);
