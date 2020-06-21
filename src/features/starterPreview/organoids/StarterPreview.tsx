import * as React from "react";
import styled from "styled-components";

import { OverlayCard } from "~ui";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { Progress } from "../atoms/Progress";

const Wrapper = styled.div`
  padding: 25px;
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
