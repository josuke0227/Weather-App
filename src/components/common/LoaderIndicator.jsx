import React from "react";
import MyLoader from "../../components/myLoader";
import { usePromiseTracker } from "react-promise-tracker";

const LoaderIndicator = ({
  area,
  bgColor,
  position,
  name,
  text,
  width,
  height,
}) => {
  const { promiseInProgress } = usePromiseTracker({ area });

  return (
    promiseInProgress && (
      <React.Fragment>
        <MyLoader
          bgColor={bgColor}
          position={position}
          name={name}
          text={text}
          width={width}
          height={height}
        />
      </React.Fragment>
    )
  );
};

export default LoaderIndicator;
