import React from "react";
import Icon from "./common/icon";
import styled from "styled-components";
import RoundButton from "../styled-components/roundButton";
import SquareButton from "../styled-components/squareButton";
import FlexItem from "../styled-components/flexItem";
import FlexContainer from "../styled-components/flexContainer";

const ButtonsContainer = styled(FlexContainer)`
  flex: 2.81vh;
  padding: 0 2.875rem;
`;

const MainButtons = ({ onOpenButonClick, onGpsButtonClick }) => {
  return (
    <ButtonsContainer direction="row" xAlign>
      <FlexItem style={{ textAlign: "start" }} onClick={onOpenButonClick}>
        <SquareButton>Search for places</SquareButton>
      </FlexItem>
      <FlexItem style={{ textAlign: "end" }}>
        <RoundButton onClick={onGpsButtonClick}>
          <Icon name="gps_fixed" size="md-18" />
        </RoundButton>
      </FlexItem>
    </ButtonsContainer>
  );
};

export default MainButtons;
