import { createStoreObject } from "effector";

import { GoalField } from "../atoms/GoalField";
import { TitleField } from "../atoms/TitleField";
import { SubtitleField } from "../atoms/SubtitleField";
import { EmotesField } from "../atoms/EmotesField";

export const $starterData = createStoreObject({
  title: TitleField.$value,
  subtitle: SubtitleField.$value,
  goal: GoalField.$value.map(Number),
  emotes: EmotesField.$value.map(emotes =>
    emotes.split(",").map(emote => emote.trim())
  )
});
