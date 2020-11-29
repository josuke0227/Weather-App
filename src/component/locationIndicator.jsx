import React from "react";
import Icon from "./common/icon";
import styled from "styled-components";
import FlexItem from "../styled-components/flexItem";
import DateWrapper from "../styled-components/dateWrapper";

const LocationWindow = styled(FlexItem)``;
// padding-top: 2rem;

const LocationWrapper = styled(DateWrapper)`
  font-weight: 600;
`;

const LocationIndicator = () => {
  return (
    <LocationWindow flex="4.21vh">
      <LocationWrapper>
        <Icon name="location_on" color="var(--tx-tirtary)" />
        Sydney
      </LocationWrapper>
    </LocationWindow>
  );
};

export default LocationIndicator;
