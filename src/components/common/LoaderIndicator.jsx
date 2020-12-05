import React from "react";
import MyLoader from "../../components/myLoader";
import { usePromiseTracker } from "react-promise-tracker";

const LoaderIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker({ area: props.area });

  return (
    promiseInProgress && (
      <React.Fragment>
        <MyLoader
          bgColor={props.bgColor}
          position={props.position}
          name={props.name}
          text={props.text}
          width={props.width}
          height={props.height}
        />
      </React.Fragment>
    )
  );
};

export default LoaderIndicator;
