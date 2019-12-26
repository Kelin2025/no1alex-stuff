import { createStoreObject } from "effector";

import { GoalField } from "../atoms/GoalField";
import { TitleField } from "../atoms/TitleField";
import { SubtitleField } from "../atoms/SubtitleField";

export const $starterData = createStoreObject({
  title: TitleField.$value,
  subtitle: SubtitleField.$value,
  goal: GoalField.$value.map(Number)
});
