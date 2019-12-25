import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";

import { $starterTitle } from "~api/starter";

const StyledTitle = styled.div`
  font-size: 34px;
`;

export const Title = () => {
  const starterTitle = useStore($starterTitle);

  return (
    <StyledTitle>
      <b>{starterTitle}</b>
    </StyledTitle>
  );
};
