import React from "react";
import styled from "styled-components";
import Icon from "./common/icon";
import RoundButton from "../styled-components/roundButton";

const DirectionWrapper = styled.span`
  margin-left: 0.18rem;
  color: var(--tx-primary);
  font-size: 14px;
`;

const CompusWrapper = styled(RoundButton)`
  width: 4vh;
  height: 4vh;
  margin-right: 0.18rem;
  padding: 8px;
`;

const WindowDirectionIndicator = () => {
  return (
    <div className="direction-container">
      <CompusWrapper>
        <Icon name="navigation" size="md-18" />
      </CompusWrapper>
      <DirectionWrapper>WSW</DirectionWrapper>
    </div>
  );
};

export default WindowDirectionIndicator;
