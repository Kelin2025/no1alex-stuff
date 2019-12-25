import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";

import { $percentProgress, $starterGoal, $starterProgress } from "~api/starter";

import progressEmoteSrc from "~ui/assets/images/progressEmote.png";

const Root = styled.div`
  background: #606060;
  height: 26px;
  position: relative;
  width: 820px;
  margin-top: 50px;
`;

const LeftBorder = styled.div`
  background: #6235c1;
  border-radius: 7px;
  height: 46px;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 13px;
  z-index: 2;
`;

const RightBorder = styled.div`
  background: #ffb017;
  border-radius: 7px;
  height: 46px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 13px;
  z-index: 2;
`;

const StyledProgress = styled.div`
  background: #8c56ff;
  height: 26px;
  position: relative;
  width: ${props => props.width}%;

  > img {
    transform: translateY(-50%) translateX(50%);
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 3;
  }

  > div {
    font-size: 24px;
    position: absolute;
    right: 0;
    text-align: center;
    top: calc(100% + 30px);
    transform: translateX(50%);
    width: 67px;
    z-index: 3;
  }
`;

const StyledProgressWrapper = styled.div`
  font-size: 24px;
  position: absolute;
  right: 0;
  top: calc(-100% - 20px);
  transform: translateX(50%);
`;

const ProgressBar = () => {
  const starterProgress = useStore($starterProgress);
  const percentProgress = useStore($percentProgress);

  return (
    <StyledProgress width={percentProgress}>
      <img src={progressEmoteSrc} />
      <div>{starterProgress}</div>
    </StyledProgress>
  );
};

const Goal = () => {
  const starterGoal = useStore($starterGoal);

  return (
    <StyledProgressWrapper>
      Goal: <b>{starterGoal}</b>
    </StyledProgressWrapper>
  );
};

export const Progress = () => {
  return (
    <Root>
      <LeftBorder />
      <ProgressBar />
      <Goal />
      <RightBorder />
    </Root>
  );
};
