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
    flex: 200vh;
  }
`;

// const FivedaysWrapper = styled.div`
//   margin: auto;
// `;
// @media (max-width: 600px) {
//   margin: 0;
//   height: 100vh;
// }

// const HighlightFooterWrapper = styled.div`
//   margin: auto;
// `;

// @media (max-width: 600px) {
//   margin: 2rem 0 0 0;
// }

const SubWindow = ({
  weather,
  weatherToday,
  onUnitButtonClick,
  currentUnit,
}) => {
  return (
    <SubContainer id="subcontainer">
      {/* <FivedaysWrapper> */}
      <UnitToggler onUnitButtonClick={onUnitButtonClick} unit={currentUnit} />
      <FiveDaysForecast weather={weather} unit={currentUnit} />
      {/* </FivedaysWrapper> */}
      {/* <HighlightFooterWrapper> */}
      <Highlight weatherToday={weatherToday} />
      <Footer />
      {/* </HighlightFooterWrapper> */}
    </SubContainer>
  );
};

export default SubWindow;
