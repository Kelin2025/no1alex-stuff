import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";

import { $starterTitle } from "~api/starter";

export const Title = () => {
  const starterTitle = useStore($starterTitle);

  return <div>{starterTitle}</div>;
};
