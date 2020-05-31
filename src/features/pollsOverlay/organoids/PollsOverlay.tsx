import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";

import { $hasLivePoll } from "~api/polls";

import AttentionIcon from "~ui/assets/icons/attention.svg";
import { Box, OverlayCard } from "~ui";
import { Answers } from "./Answers";
import { PollTimer } from "../atoms/PollTimer";
import { PollQuestion } from "../atoms/PollQuestion";

const Wrapper = styled(Box)`
  right: 50px;
  padding: 25px;
  position: absolute;
  top: 40px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-out;
  width: 600px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-weight: 300;
`;

const JustText = styled(Box)`
  color: #bcbcbc;
  border-top: 1px solid #353535;
  margin: 10px -10px -10px;
  padding: 10px;
`;

export const PollsOverlay = () => {
  const isVisible = useStore($hasLivePoll);

  return (
    <Wrapper cols={["1fr"]} active={isVisible}>
      <OverlayCard
        title={
          <Box cols="1fr max-content">
            <div>Poll</div>
            <PollTimer />
          </Box>
        }
      >
        <Title>
          <PollQuestion />
        </Title>
        <Answers />
        <JustText flow="column">
          <AttentionIcon />
          <div>Just write one of the options in the chat</div>
        </JustText>
      </OverlayCard>
    </Wrapper>
  );
};
