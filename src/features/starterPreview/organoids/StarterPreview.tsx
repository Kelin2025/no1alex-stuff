import * as React from "react";
import styled from "styled-components";

import titleEmoteSrc from "~ui/assets/images/titleEmote.png";

import { Box } from "~ui";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import { Progress } from "../atoms/Progress";

const StyledBox = styled(Box)`
  text-align: center;
`;

export const StarterPreview = () => {
  return (
    <StyledBox flow="row" justify="center">
      <div>
        <img src={titleEmoteSrc} />
      </div>
      <Title />
      <Subtitle />
      <Progress />
    </StyledBox>
  );
};
