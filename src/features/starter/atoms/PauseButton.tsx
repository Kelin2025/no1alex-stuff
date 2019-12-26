import * as React from "react";
import { forward } from "effector";

import { createButton } from "~ui/logic/form";
import { pauseStarter } from "~api/starter";

export const PauseButton = createButton({
  type: "save",
  text: "Pause"
});

forward({
  from: PauseButton.pressed.map(() => ({})),
  to: pauseStarter
});
