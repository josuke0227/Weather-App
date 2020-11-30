import React from "react";
import Footer from "./footer";

import styled from "styled-components";
import FlexItem from "../styled-components/flexItem";
import RoundButton from "../styled-components/roundButton";

const SubContainer = styled(FlexItem)`
  background-color: var(--bg-seconday);
  padding: var(--ct-padding-top) 9.625rem var(--ct-padding-bottom) 7.6875rem;
  height: 100vh;
`;

const TogglerContainer = styled.div`
  text-align: end;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: 17.3vh;
  grid-column-gap: 1.625rem;
`;

const HeaderWrapper = styled.h2`
  color: var(--tx-primary);
`;

const HighLightContainer = styled(GridContainer)`
  grid-template-columns: auto auto;
  grid-template-rows: 19.9vh 15.5vh;
  color: var(--tx-primary);
  grid-gap: 3rem;
`;

const PanelWrapper = styled.div`
  background-color: var(--bg-primary);
  color: var(--tx-primary);
  text-align: center;
`;

const SubWindow = () => {
  return (
    <SubContainer flex="68.125vw">
      {/* <UnitToggler /> */}
      <TogglerContainer>
        <RoundButton>&#8451;</RoundButton>
        <RoundButton>&#8457;</RoundButton>
      </TogglerContainer>
      {/* FiveDaysForecast */}
      <GridContainer>
        {["a", "b", "c", "d", "e"].map((c, index) => (
          <PanelWrapper key={index}>{c}</PanelWrapper>
        ))}
      </GridContainer>
      {/* HighLight */}
      <div id="highlight">
        <HeaderWrapper>Today's Highlights</HeaderWrapper>
        <HighLightContainer>
          <PanelWrapper>Wind Status</PanelWrapper>
          <PanelWrapper>Humidity</PanelWrapper>
          <PanelWrapper>Visibility</PanelWrapper>
          <PanelWrapper>Air Pressure</PanelWrapper>
        </HighLightContainer>
      </div>
      <Footer />
    </SubContainer>
  );
};

export default SubWindow;
