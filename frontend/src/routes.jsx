import { createBrowserRouter } from "react-router-dom";

import Wrapper from "./components/navigation/Wrapper";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";

import GenderLineCountsPage from "./pages/viz/GenderLineCountsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/viz",
        element: <AboutPage />,
      },
      {
        path: "/viz/gender-line-counts",
        element: <GenderLineCountsPage />,
      },
    ],
  },
]);

export default router;
