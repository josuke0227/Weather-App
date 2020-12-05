import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: ${(props) => props.position};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${(props) => props.bgColor};
`;

const MyLoader = ({ bgColor, position, name, text, width, height }) => {
  return (
    <LoaderWrapper bgColor={bgColor} position={position}>
      <h1 style={{ color: "var(--tx-secondary)", marginBottom: "1rem" }}>
        {text}
      </h1>
      <Loader
        type={name}
        color="var(--tx-secondary)"
        height={width}
        width={height}
        // style={{ paddingLeft: "46vw", paddingTop: "45vh" }}
      />
    </LoaderWrapper>
  );
};

export default MyLoader;
