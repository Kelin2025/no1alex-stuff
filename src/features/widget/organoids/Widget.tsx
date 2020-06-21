import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";
import { animated, useSpring } from "react-spring";

import { $isVisible } from "~api/widget";

import { StarterPreview } from "~features/starterPreview";

const Wrapper = styled(animated.div)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Preview = styled.div`
  top: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Widget = () => {
  const isVisible = useStore($isVisible);
  const style = useSpring({ opacity: isVisible ? 1 : 0 });

  return (
    <Wrapper style={style}>
      <Preview>
        <StarterPreview />
      </Preview>
    </Wrapper>
  );
};
