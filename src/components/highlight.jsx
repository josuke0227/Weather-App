import React from "react";
import styled from "styled-components";
import HighlightPanels from "./hightlightPanels";

const HeadderWrapper = styled.h2`
  color: var(--tx-primary);
`;

const HighLightContainer = styled.div`
  display: grid;
  grid-template-columns: 22.7vw 22.7vw;
  grid-template-rows: auto auto;
  color: var(--tx-primary);
  grid-gap: 3rem;

  @media (max-width: 1100px) {
    grid-template-columns: 27.2vw 27.2vw;
    grid-gap: 1rem;
  }

  @media (max-width: 960px) {
    grid-template-columns: 30.7vw 30.7vw;
    grid-gap: 1rem;
  }

  @media (max-width: 860px) {
    grid-template-columns: 43.35vw 43.35vw;
    grid-gap: 1rem;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    grid-gap: 0;
  }
`;

const Highlight = ({ weatherToday }) => {
  return (
    <div id="highlight">
      <HeadderWrapper className="mb-1">Today's Highlights</HeadderWrapper>
      <HighLightContainer>
        <HighlightPanels weather={weatherToday} />
      </HighLightContainer>
    </div>
  );
};

export default Highlight;
