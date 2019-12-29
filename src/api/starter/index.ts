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

export const $starterStage = createStore("idle");
export const $starterTitle = createStore("Let's start this stream");
export const $starterSubtitle = createStore("Spam any of my emotes");
export const $starterEmotes = createStore([]);
export const $starterGoal = createStore(1000);
export const $starterProgress = createStore(0);

export const $percentProgress = combine(
  $starterProgress,
  $starterGoal,
  (progress, goal) => (progress / goal) * 100
);

$starterStage
  .on(starterReceived, (state, { stage }) => stage)
  .on(starterStarted, () => "started")
  .on(starterPaused, () => "paused")
  .on(starterStopped, () => "stopped")
  .on(starterEnded, () => "stopped");

$starterTitle
  .on(starterReceived, (state, { title }) => title)
  .on(starterStarted, (state, { title }) => title);

$starterSubtitle
  .on(starterReceived, (state, { subtitle }) => subtitle)
  .on(starterStarted, (state, { subtitle }) => subtitle);

$starterEmotes
  .on(starterReceived, (state, { emotes }) => emotes)
  .on(starterStarted, (state, { emotes }) => emotes);

$starterGoal
  .on(starterReceived, (state, { goal }) => goal)
  .on(starterStarted, (state, { goal }) => goal);

$starterProgress
  .on(starterStarted, () => 0)
  .on(starterReceived, (state, { progress }) => progress)
  .on(starterProgressUpdated, (state, { current }) => current);
