import { createStore, createEvent, guard } from "effector";

import { $starterStage } from "~api/starter";

export const visibilityChanged = createEvent();

export const widgetShown = createEvent();
export const widgetHidden = createEvent();

export const $isVisible = createStore(false);

$isVisible.on(visibilityChanged, (state, value) => value);

guard({
  source: $starterStage,
  filter: stage => ["started", "paused"].includes(stage),
  target: visibilityChanged.prepend(() => true)
});

guard({
  source: $starterStage,
  filter: stage => ["stopped", "idle"].includes(stage),
  target: visibilityChanged.prepend(() => false)
});
