import * as React from "react";
import { forward, sample } from "effector";

import { createButton } from "~ui/logic/form";

import { runStarter } from "~api/starter";
import { $starterData } from "../logic/form";

export const RunButton = createButton({
  type: "save",
  text: "Run Now"
});

forward({
  from: sample($starterData, RunButton.pressed),
  to: runStarter
});
