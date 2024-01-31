import { createBrowserRouter } from "react-router-dom";

import Wrapper from "./components/navigation/Wrapper";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";

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
      //   {
      //     path: "/les-mis",
      //     element: <LesMis />,
      //   },
      //   {
      //     path: "/social-graphs",
      //     element: <SocialGraphs />,
      //   },
      //   {
      //     path: "/inputs",
      //     element: <InputsPage />,
      //   },
      //   {
      //     path: "/outputs",
      //     element: <OutputsPage />,
      //   },
    ],
  },
]);

export default router;
