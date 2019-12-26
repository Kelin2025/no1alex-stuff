import * as React from "react";
import { forward } from "effector";

import { createButton } from "~ui/logic/form";

import { stopStarter } from "~api/starter";

export const StopButton = createButton({
  type: "save",
  text: "Stop Now"
});

forward({
  from: StopButton.pressed.map(() => ({})),
  to: stopStarter
});
