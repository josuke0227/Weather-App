import React from "react";
import styled from "styled-components";
import FlexItem from "../styled-components/flexItem";
import bgPicture from "../img/Cloud-background.png";

const ImageWindow = styled(FlexItem)`
  background: url(${(props) => props.bgPicture}) no-repeat center center/145%;
  opacity: 0.1;
`;

const MainDisplay = () => {
  return <ImageWindow bgPicture={bgPicture} flex="41.234vh"></ImageWindow>;
};

export default MainDisplay;
