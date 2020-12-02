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
  /* grid-template-rows: 20vh 16vh; */
  color: var(--tx-primary);
  grid-gap: 3rem;
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
