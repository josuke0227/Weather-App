import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import UnitToggler from "./unitToggler";
import FiveDaysForecast from "./fiveDaysForecast";
import Highlight from "./highlight";
import InnerContainers from "../styled-components/innerContainers";

const SubContainer = styled(InnerContainers)`
  background-color: var(--bg-seconday);
  flex-direction: column;
  margin: auto;
  padding: 0 9.625rem 0 7.6875rem;
  flex: 68.125vw;
`;

const SubWindow = ({ weather, weatherToday }) => {
  return (
    <SubContainer>
      <UnitToggler />
      <FiveDaysForecast weather={weather} />
      <Highlight weatherToday={weatherToday} />
      <Footer />
    </SubContainer>
  );
};

export default SubWindow;