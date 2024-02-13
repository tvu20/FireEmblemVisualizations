import { createBrowserRouter } from "react-router-dom";

import Wrapper from "./components/navigation/Wrapper";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import VizPage from "./pages/viz/VizPage";

import GenderLineCountsPage from "./pages/viz/gender/GenderLineCountsPage";
import GenderCharCountsPage from "./pages/viz/gender/GenderCharCountsPage";
import SupportNetworksPage from "./pages/viz/relationships/SupportNetworksPage";
import PairingsNetworksPage from "./pages/viz/relationships/PairingsNetworksPage";
import SentimentGamePage from "./pages/viz/sentiment/SentimentGamePage";
import MostCommonWordsPage from "./pages/viz/script/MostCommonWordsPage";

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
        element: <VizPage />,
      },
      {
        path: "/viz/gender-line-counts",
        element: <GenderLineCountsPage />,
      },
      {
        path: "/viz/gender-char-counts",
        element: <GenderCharCountsPage />,
      },
      {
        path: "/viz/support-networks",
        element: <SupportNetworksPage />,
      },
      {
        path: "/viz/pairings-networks",
        element: <PairingsNetworksPage />,
      },
      {
        path: "/viz/sentiment-game",
        element: <SentimentGamePage />,
      },
      {
        path: "/viz/most-common-words",
        element: <MostCommonWordsPage />,
      },
    ],
  },
]);

export default router;
