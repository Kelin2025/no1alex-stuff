import { forward, sample, guard, combine } from "effector";

import {
  $starterGoal,
  $starterStage,
  $starterTitle,
  $starterSubtitle,
  $starterProgress,
  $starterUsers,
  $starter,
  $percentProgress
} from "./store";

import {
  runStarter,
  pauseStarter,
  stopStarter,
  sendStarterReceived,
  sendStarterStarted,
  sendStarterPaused,
  sendStarterStopped,
  sendStarterProgress,
  sendStarterEnded,
  incStarterProgress
} from "./actions";
import { messageReceived } from "../../core/tmi";
import { socketOn, socketClientConnected } from "../../core/socket";

$starterStage
  .on(runStarter, () => "started")
  .on(pauseStarter, () => "paused")
  .on(stopStarter, () => "idle");

$starterTitle.on(runStarter.done, (state, { result }) => result.title);

$starterSubtitle.on(runStarter.done, (state, { result }) => result.subtitle);

$starterGoal.on(runStarter.done, (state, { result }) => result.goal);

$starterUsers
  .on(runStarter.done, () => [])
  .on(incStarterProgress.done, (state, { params }) => [
    ...state,
    params.nickname
  ]);

$starterProgress
  .on(runStarter.done, () => 0)
  .on(incStarterProgress.done, state => state + 1);

forward({
  from: sample($starter, socketClientConnected, (starter, { client }) => ({
    options: starter,
    client
  })),
  to: sendStarterReceived
});

forward({
  from: $starterGoal.map(current => ({ options: { current } })),
  to: sendStarterProgress
});

forward({
  from: socketOn("starter:run"),
  to: runStarter
});

forward({
  from: runStarter.done.map(({ result }) => ({ options: result })),
  to: sendStarterStarted
});

forward({
  from: socketOn("starter:pause"),
  to: pauseStarter
});

forward({
  from: pauseStarter.done.map(({ result }) => ({ options: result })),
  to: sendStarterPaused
});

forward({
  from: socketOn("starter:stop"),
  to: stopStarter
});

forward({
  from: stopStarter.done.map(({ result }) => ({ options: result })),
  to: sendStarterStopped
});

guard({
  source: sample(
    combine({ stage: $starterStage, users: $starterUsers }),
    messageReceived,
    ({ stage, users }, { nickname }) => ({
      stage,
      users,
      nickname
    })
  ),
  filter: ({ stage, users, nickname }) =>
    stage === "started" && !users.includes(nickname),
  target: incStarterProgress
});

guard({
  source: $percentProgress,
  filter: progress => progress >= 100,
  target: sendStarterEnded.prepend(progress => ({ options: { progress } }))
});
