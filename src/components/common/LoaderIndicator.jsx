import React from "react";
import MyLoader from "../../components/myLoader";
import { usePromiseTracker } from "react-promise-tracker";

const LoaderIndicator = ({ bgColor }) => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress && <MyLoader bgColor={bgColor} />;
};

export default LoaderIndicator;
