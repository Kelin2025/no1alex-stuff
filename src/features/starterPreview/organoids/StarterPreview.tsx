import * as React from "react";
import styled from "styled-components";

import titleEmoteSrc from "~ui/assets/images/titleEmote.png";

import { OverlayCard } from "~ui";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { Progress } from "../atoms/Progress";

const Wrapper = styled.div`
  top: 50px;
  padding: 25px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.5s ease-out;
  width: 700px;
`;

export const StarterPreview = () => {
  return (
    <Wrapper>
      <OverlayCard title={<Title />}>
        <Subtitle />
        <Progress />
      </OverlayCard>
    </Wrapper>
  );
};
