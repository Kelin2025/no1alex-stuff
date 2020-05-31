import * as React from "react";
import styled from "styled-components";
import { combine } from "effector";
import { useStore } from "effector-react";
import { intervalToSeconds } from "~lib/time-fns";

import { $livePoll } from "~api/polls";

import ClockIcon from "~ui/assets/icons/clock.svg";
import { Box, Countdown } from "~ui";

const Time = styled.span``;

const $duration = $livePoll.map((poll) => (poll && poll.duration) || 0);
const $expiresAt = $livePoll.map((poll) => (poll && poll.expiresAt) || 0);
const $createdAt = combine(
  $duration,
  $expiresAt,
  (duration, expiresAt) => expiresAt - intervalToSeconds(duration) * 1000
);

export const PollTimer = () => {
  const duration = useStore($duration);
  const createdAt = useStore($createdAt);

  return (
    <Box flow="column">
      <ClockIcon />
      <Time>
        <Countdown format="{M}:{S}" startDate={createdAt} duration={duration} />
      </Time>
    </Box>
  );
};
