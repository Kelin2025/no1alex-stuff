import * as React from "react";

import { createInput } from "~ui/logic/form";

import { Input } from "~ui";

export const GoalField = createInput({
  label: "Goal",
  initialValue: "1000",
  view: Input
});
