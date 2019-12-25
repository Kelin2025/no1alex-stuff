import { createStore, combine } from "effector";
import { createSocketSender, socketOn } from "~lib/api";

export const starterReceived = socketOn("starter:received");
export const starterStarted = socketOn("starter:started");
export const starterPaused = socketOn("starter:paused");
export const starterEnded = socketOn("starter:ended");
export const starterStopped = socketOn("starter:stopped");
export const starterProgressUpdated = socketOn("starter:progress-updated");

export const runStarter = createSocketSender("starter:run");
export const pauseStarter = createSocketSender("starter:pause");
export const stopStarter = createSocketSender("starter:stop");

export const $starterStage = createStore("not_running");
export const $starterTitle = createStore("Let's start this stream");
export const $starterSubtitle = createStore("Spam any of my emotes");
export const $starterGoal = createStore(1000);
export const $starterProgress = createStore(0);

export const $percentProgress = combine(
  $starterProgress,
  $starterGoal,
  (progress, goal) => (progress / goal) * 100
);

$starterStage.on(starterReceived, (state, { stage }) => stage);

$starterTitle.on(starterStarted, (state, { title }) => title);

$starterSubtitle.on(starterStarted, (state, { subtitle }) => subtitle);

$starterGoal.on(starterStarted, (state, { goal }) => goal);

$starterProgress
  .on(starterStarted, () => 0)
  .on(starterProgressUpdated, (state, { current }) => current);
