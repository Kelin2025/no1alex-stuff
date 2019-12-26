import { combine, createStore, createStoreObject } from "effector";

export const $starterStage = createStore("idle");
export const $starterTitle = createStore("Let's start this stream");
export const $starterSubtitle = createStore("Spam any of my emotes");
export const $starterGoal = createStore(1000);
export const $starterProgress = createStore(0);
export const $starterUsers = createStore([]);

export const $percentProgress = combine(
  $starterProgress,
  $starterGoal,
  (progress, goal) => (progress / goal) * 100
);

export const $starter = createStoreObject({
  stage: $starterStage,
  title: $starterTitle,
  subtitle: $starterSubtitle,
  goal: $starterGoal,
  progress: $starterProgress
});
