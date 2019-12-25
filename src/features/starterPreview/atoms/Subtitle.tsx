import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";

import { $starterSubtitle } from "~api/starter";

const StyledTitle = styled.div`
  font-size: 24px;
`;

export const Subtitle = () => {
  const starterSubtitle = useStore($starterSubtitle);

  return <StyledTitle>{starterSubtitle}</StyledTitle>;
};
