import { createBrowserRouter } from "react-router-dom";

import Wrapper from "./components/navigation/Wrapper";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import VizPage from "./pages/viz/VizPage";

import GenderLineCountsPage from "./pages/viz/gender/GenderLineCountsPage";
import GenderCharCountsPage from "./pages/viz/gender/GenderCharCountsPage";
import TransitionsGamePage from "./pages/viz/gender/TransitionsGamePage";
import SupportNetworksPage from "./pages/viz/relationships/SupportNetworksPage";
import PairingsNetworksPage from "./pages/viz/relationships/PairingsNetworksPage";
import SentimentGamePage from "./pages/viz/sentiment/SentimentGamePage";
import SentimentAcrossGamesPage from "./pages/viz/sentiment/SentimentAcrossGamesPage";
import MostCommonWordsPage from "./pages/viz/script/MostCommonWordsPage";
import WordCountsPage from "./pages/viz/script/WordCountsPage";

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
        path: "/viz/gender-transitions-game",
        element: <TransitionsGamePage />,
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
        path: "/viz/sentiment-across-games",
        element: <SentimentAcrossGamesPage />,
      },
      {
        path: "/viz/most-common-words",
        element: <MostCommonWordsPage />,
      },
      {
        path: "/viz/word-counts",
        element: <WordCountsPage />,
      },
    ],
  },
]);

export default router;
