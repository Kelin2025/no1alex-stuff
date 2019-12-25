import * as React from "react";

import { createInput } from "~ui/logic/form";

import { Input } from "~ui";

export const TitleField = createInput({
  label: "First line",
  initialValue: "Let's start this stream",
  view: Input
});
