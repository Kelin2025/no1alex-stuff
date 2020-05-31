import * as React from "react";
import styled from "styled-components";
import { combine } from "effector";
import { useList } from "effector-react";

import { $livePoll } from "~api/polls";

import UserIcon from "~ui/assets/icons/user.svg";
import { Box } from "~ui";

const $answers = $livePoll.map((poll) => (poll && poll.answers) || []);
const $votes = $livePoll.map(
  (poll) =>
    poll &&
    poll.answers.map(
      (cur, idx) => poll.votes.filter((val) => val === idx).length
    )
);
const $obj = combine($answers, $votes, (answers, votes) =>
  answers.map((answer, idx) => ({ answer, votes: votes[idx] }))
);

const Wrapper = styled(Box)`
  background: #383a41;
  border-radius: 10px;
  color: #bcbcbc;
  font-size: 24px;
  padding: 20px;

  & + & {
    margin-top: 10px;
  }
`;

const Votes = styled(Box)`
  border-left: 1px solid #424449;
  margin: -20px -20px -20px 0;
  padding: 20px;
`;

export const Answers = () => {
  return useList($obj, ({ answer, votes }) => (
    <Wrapper cols="1fr 100px">
      <div>{answer}</div>
      <Votes cols="max-content max-content">
        <UserIcon />
        {votes}
      </Votes>
    </Wrapper>
  ));
};
