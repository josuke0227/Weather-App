import React from "react";
import styled from "styled-components";
import FlexContainer from "../styled-components/flexContainer";

const PanelWrapper = styled(FlexContainer)`
  background-color: var(--bg-primary);
  color: var(--tx-primary);
  text-align: center;
`;

const FiveDaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: 19.3vh;
  grid-column-gap: 1.625rem;
  padding-bottom: 2rem;
`;

const FiveDaysForecast = () => {
  return (
    <FiveDaysContainer>
      {["a", "b", "c", "d", "e"].map((c, index) => (
        <PanelWrapper key={index}>{c}</PanelWrapper>
      ))}
    </FiveDaysContainer>
  );
};

export default FiveDaysForecast;
