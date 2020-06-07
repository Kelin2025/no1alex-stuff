import * as React from "react";
import styled from "styled-components";
import { useList } from "effector-react";

import { $starterEmotesUrls } from "~api/starter";

const StyledTitle = styled.div`
  color: #fff;
  font-size: 28px;
  text-align: center;
  padding: 15px 15px 30px;
  margin: 0 -25px 30px;
  border-bottom: 1px solid #353535;

  img {
    vertical-align: middle;
    margin: 0 10px;
  }
`;

const Emotes = () => {
  return useList($starterEmotesUrls, (url) => {
    return <img src={url} />;
  });
};

export const Subtitle = () => {
  return (
    <StyledTitle>
      Spam <Emotes />
    </StyledTitle>
  );
};
