import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";

import { $ttsNickname } from "../logic";

const Nickname = styled.b`
  color: #5960ff;
`;

const Wrapper = styled.div`
  margin-bottom: 5px;
`;

export const TtsNickname = () => {
  const ttsNickname = useStore($ttsNickname);

  return (
    <Wrapper>
      <Nickname>{ttsNickname}</Nickname> said:
    </Wrapper>
  );
};
