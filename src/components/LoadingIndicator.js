import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import styled from 'styled-components';

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress &&
    <LoadingWrap>
      Loading ...
    </LoadingWrap>
  );
}

//Styled components
const loadingBg = '#000000bd';
const loadingColor = "#fff";

const LoadingWrap = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: ${loadingBg};
  color: ${loadingColor};
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default LoadingIndicator;
