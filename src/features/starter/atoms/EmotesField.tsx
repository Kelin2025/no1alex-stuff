import * as React from "react";

import { createInput } from "~ui/logic/form";

import { Input } from "~ui";

export const EmotesField = createInput({
  label: "Allowed Emotes",
  initialValue: "",
  view: Input
});
