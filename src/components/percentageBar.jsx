import React from "react";
import styled from "styled-components";
import FlexContainer from "../styled-components/flexContainer";

const BarContainer = styled.div`
  margin: 0 3.125rem;
`;

const Gage = styled.div`
  width: 100%;
  height: 10px;
  background-color: var(--tx-primary);
  border-radius: 80px;
  margin-bottom: 2.56rem;
`;

const Ratio = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 80px;
  background-color: #ffec65;
`;

const PercentageBar = () => {
  return (
    <BarContainer>
      <FlexContainer style={{ width: "100%" }}>
        <div style={{ flex: "1", textAlign: "start" }}>0</div>
        <div style={{ flex: "1", textAlign: "center" }}>50</div>
        <div style={{ flex: "1", textAlign: "end" }}>100</div>
      </FlexContainer>
      <Gage>
        <Ratio></Ratio>
      </Gage>
    </BarContainer>
  );
};

export default PercentageBar;
