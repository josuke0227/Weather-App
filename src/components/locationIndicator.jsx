import React from "react";
import Icon from "./common/icon";
import FlexItem from "../styled-components/flexItem";
import DateWrapper from "../styled-components/dateWrapper";

const LocationIndicator = ({ location }) => {
  return (
    <FlexItem flex="4.21vh">
      <DateWrapper fontSize="18px" fontWeight="600">
        <Icon name="location_on" color="var(--tx-tirtary)" />
        {location}
      </DateWrapper>
    </FlexItem>
  );
};

export default LocationIndicator;
