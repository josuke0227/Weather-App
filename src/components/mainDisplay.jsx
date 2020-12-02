import React from "react";
import styled from "styled-components";
import FlexItem from "../styled-components/flexItem";
import bgPicture from "../img/Cloud-background2.png";
import ImageGenerator from "./imageGenerator";

const ImageWindow = styled(FlexItem)`
  background: url(${(props) => props.bgPicture}) no-repeat center center/145%;
`;

const MainDisplay = ({ code }) => {
  return (
    <ImageWindow bgPicture={bgPicture} flex="41.234vh">
      <ImageGenerator code={code} padding="10vh 0 0 0" />
    </ImageWindow>
  );
};

export default MainDisplay;
