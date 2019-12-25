import * as React from "react";

import { createInput } from "~ui/logic/form";

import { Input } from "~ui";

export const SubtitleField = createInput({
  label: "Second line",
  initialValue: "Spam any of my emotes",
  view: Input
});
