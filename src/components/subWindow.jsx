import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import UnitToggler from "./unitToggler";
import FiveDaysForecast from "./fiveDaysForecast";
import Highlight from "./highlight";
import InnerContainers from "../styled-components/innerContainers";

const SubContainer = styled(InnerContainers)`
  background-color: var(--bg-secondary);
  flex-direction: column;
  flex: 68.125vw;

  @media (max-width: 600px) {
    height: 100%;
    flex: 210vh;
  }
`;

const SubWindow = ({
  weather,
  weatherToday,
  onUnitButtonClick,
  currentUnit,
}) => {
  return (
    <SubContainer id="subcontainer">
      <div className="contents" style={{ margin: "auto" }}>
        <UnitToggler onUnitButtonClick={onUnitButtonClick} unit={currentUnit} />
        <FiveDaysForecast weather={weather} unit={currentUnit} />
        <Highlight weatherToday={weatherToday} />
        <Footer />
      </div>
    </SubContainer>
  );
};

export default SubWindow;
