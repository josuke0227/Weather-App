import React from "react";
import Icon from "./common/icon";
import styled from "styled-components";
import ButtonStyle from "../styled-components/buttonStyle";
import FlexItem from "../styled-components/flexItem";
import FlexContainer from "../styled-components/flexContainer";

const ButtonsContainer = styled(FlexContainer)`
  flex: 2.81vh;
  padding: 0 2.875rem;
`;

const SquareButton = styled(ButtonStyle)`
  width: 10.0625rem;

  padding: 0.6875rem 1.125rem 0.625rem;
`;

const RoundButton = styled(ButtonStyle)`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  padding: 0.625rem;
`;

const MainButtons = () => {
  return (
    <ButtonsContainer direction="row" xAlign>
      <FlexItem style={{ textAlign: "start" }}>
        <SquareButton>Search for places</SquareButton>
      </FlexItem>
      <FlexItem style={{ textAlign: "end" }}>
        <RoundButton>
          <Icon name="gps_fixed" size="md-18" />
        </RoundButton>
      </FlexItem>
    </ButtonsContainer>
  );
};

export default MainButtons;
