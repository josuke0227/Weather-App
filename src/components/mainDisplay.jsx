import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FlexItem from "../styled-components/flexItem";
import bgPicture from "../img/Cloud-background2.png";
import ImageGenerator from "./imageGenerator";

const ImageWindow = styled(FlexItem)`
  background: url(${(props) => props.bgPicture}) no-repeat center center/145%;
`;

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function useCurrentWidth() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth());
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
}

function styleGenerator(width) {
  if (width > 860 && width <= 960) {
    return {
      marginTop: "4vh !important",
      width: "20vw !important",
      height: "35vh !important",
    };
  }

  if (width <= 860) {
    return {
      marginTop: "1vh !important",
      width: "45vw !important",
      height: "25vh !important",
    };
  }

  if (width <= 600) {
    return {
      marginTop: "3vh !important",
      width: "45vw !important",
      height: "25vh !important",
    };
  }
  return {
    marginTop: "6vh",
    width: "18vw",
    height: "25vh",
  };
}

const MainDisplay = ({ code }) => {
  const currentWidth = useCurrentWidth();
  const style = styleGenerator(currentWidth);

  return (
    <ImageWindow bgPicture={bgPicture} flex="41.234vh">
      <ImageGenerator
        code={code}
        marginTop={style.marginTop}
        width={style.width}
        height={style.height}
      />
    </ImageWindow>
  );
};

export default MainDisplay;
