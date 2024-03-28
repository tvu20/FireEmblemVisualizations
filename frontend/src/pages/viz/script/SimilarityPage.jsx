import React from "react";

import VizWrapper from "../../../components/visualizations/VizWrapper";
import Similarity from "../../../visualizations/script/Similarity";

import getColor from "../../../utils/colors";

import "./script.css";

function SimilarityPage() {
  return (
    <VizWrapper color={getColor("script")} navColor={"#3b2708"}>
      <div className="article script-page similarity-media">
        <h1>Similarity Across Media</h1>
        <p>
          See how Fire Emblem compares semantically to other pieces of media.
        </p>
        <Similarity />
        <p>
          When comparing two pieces of text, a small distance corresponds with a
          high degree of similarity and vice-versa. Generally, similarity is
          measured in the range 0-1, with a higher score meaning the texts are
          more similar.
          <br />
          <br />
          Since similarity is highly subjective and dependent on the use case,
          there are a few commonly used metrics in Natural Language Processing
          for calculating similarity between words and language in two pieces of
          text. First, we need to determine how to represent the text in order
          to calculate distance: either as is or by converting it into vectors.
          Next, we can compute the similarity score using one of the many
          similarity measures,
          <br />
          <br />
          One such method is the Jaccard index, which determines the size of the
          intersection of the two sets of words. Think of this as a Venn diagram
          - we are calculating how many unique words are shared across the two
          texts, compared with the overall sets of unique words for each text.
          This similarity metric is limited to only accessing the lexical
          similarity of text.
          <br />
          <br />
          A second method is Term Frequency-Inverse Document Frequency (TD-IDF),
          which measures the relationship between how many times a given word
          appears in a text and how rare the word is in the corpus. I compiled
          TD-IDF vectors for each pair of texts and used the Cosine Similarity
          formula to determine the similarity score.
          <br />
          <br />
          This series of graphs displays the similarity scores of various
          examples of media across a variety of different categories compared
          with the newest game in the Fire Emblem series, Three Houses. The
          similarity scores of other Fire Emblem games are always represented as
          blue lines. Lines closer to the right of the graph achieved higher
          similarity scores; we can see that TD-IDF similarity scores are
          generally much higher than Jaccard similarity scores. Hover over a
          particular vertical bar in a graph to learn about the specific piece
          of media associated with it.
        </p>
      </div>
    </VizWrapper>
  );
}

export default SimilarityPage;
