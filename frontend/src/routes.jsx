import { createBrowserRouter } from "react-router-dom";

import Wrapper from "./components/navigation/Wrapper";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import CreditsPage from "./pages/about/CreditsPage";
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
import WordPrevalencePage from "./pages/viz/script/WordPrevalencePage";
import EmotionGamePage from "./pages/viz/sentiment/EmotionGamePage";
import EmotionIntensityPage from "./pages/viz/sentiment/EmotionIntensityPage";
import ComplexityPage from "./pages/viz/script/ComplexityPage";
import SimilarityPage from "./pages/viz/script/SimilarityPage";
import EmotionChapterPage from "./pages/viz/sentiment/EmotionChapterPage";
import CharacterBarPage from "./pages/viz/characters/CharacterBarPage";
import StoryProgressionPage from "./pages/viz/sentiment/StoryProgressionPage";
import DevelopmentArticle from "./pages/articles/development/DevelopmentArticle";
import GenderArticle from "./pages/articles/gender/GenderArticle";
import RelationshipsArticle from "./pages/articles/relationships/RelationshipsArticle";
import StorytellingArticle from "./pages/articles/storytelling/StorytellingArticle";
import ClassesPage from "./pages/viz/gender/ClassesPage";
import WhatIsFEPage from "./pages/about/WhatIsFEPage";
import TransitionsFullPage from "./pages/viz/gender/TransitionsFullPage";

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
        path: "/what-is-fe",
        element: <WhatIsFEPage />,
      },
      {
        path: "/credits",
        element: <CreditsPage />,
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
      {
        path: "/viz/word-prevalence",
        element: <WordPrevalencePage />,
      },
      {
        path: "/viz/emotion-game",
        element: <EmotionGamePage />,
      },
      {
        path: "/viz/emotion-intensity",
        element: <EmotionIntensityPage />,
      },
      {
        path: "/viz/word-complexity",
        element: <ComplexityPage />,
      },
      {
        path: "/viz/similarity-across-media",
        element: <SimilarityPage />,
      },
      {
        path: "/viz/emotion-chapter",
        element: <EmotionChapterPage />,
      },
      {
        path: "/viz/character-bar",
        element: <CharacterBarPage />,
      },
      {
        path: "/viz/story-progression",
        element: <StoryProgressionPage />,
      },
      {
        path: "/viz/classes-timeline",
        element: <ClassesPage />,
      },
      {
        path: "/article/development",
        element: <DevelopmentArticle />,
      },
      {
        path: "/article/gender",
        element: <GenderArticle />,
      },
      {
        path: "/article/relationships",
        element: <RelationshipsArticle />,
      },
      {
        path: "/article/storytelling",
        element: <StorytellingArticle />,
      },
      {
        path: "/viz/transitions",
        element: <TransitionsFullPage />,
      },
    ],
  },
]);

export default router;
