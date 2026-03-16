import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";
// @ts-ignore
const AboutPage = lazy(() => import("docs/About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/docs",
    element: (
      <Suspense fallback={<div>Loading docs...</div>}>
        <AboutPage />
      </Suspense>
    ),
  },
]);

export default router;
