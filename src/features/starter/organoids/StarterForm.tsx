import * as React from "react";
import { useStore } from "effector-react";

import { $starterStage } from "~api/starter";

import { Box } from "~ui";
import { RunButton } from "../atoms/RunButton";
import { GoalField } from "../atoms/GoalField";
import { TitleField } from "../atoms/TitleField";
import { StopButton } from "../atoms/StopButton";
import { PauseButton } from "../atoms/PauseButton";
import { SubtitleField } from "../atoms/SubtitleField";

const Buttons = () => {
  const starterStage = useStore($starterStage);

  switch (starterStage) {
    case "started":
    case "stopped": {
      return (
        <>
          <PauseButton />
          <StopButton />
        </>
      );
    }
    case "paused": {
      return (
        <>
          <RunButton />
          <StopButton />
        </>
      );
    }
    case "idle": {
      return (
        <>
          <RunButton />
        </>
      );
    }
  }
};

export const StarterForm = () => {
  return (
    <Box flow="column" cols={2} align="start">
      <Box flow="row" cols={["1fr"]}>
        <Box flow="row" cols={["500px"]}>
          <TitleField />
          <SubtitleField />
          <GoalField />
        </Box>
      </Box>
      <Box flow="row" cols={["1fr"]}>
        <Box flow="row" cols={["300px"]}>
          <Buttons />
        </Box>
      </Box>
    </Box>
  );
};
