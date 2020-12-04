import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: ${(props) => props.bgColor};
`;

const MyLoader = ({ bgColor }) => {
  return (
    <LoaderWrapper bgColor={bgColor}>
      <Loader
        type="Grid"
        color="var(--tx-secondary)"
        height="100"
        width="100"
        style={{ paddingLeft: "46vw", paddingTop: "45vh" }}
      />
    </LoaderWrapper>
  );
};

export default MyLoader;
