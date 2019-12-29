import { forward, sample, guard, combine } from "effector";

import {
  $starterGoal,
  $starterStage,
  $starterTitle,
  $starterSubtitle,
  $starterProgress,
  $starterUsers,
  $starter,
  $percentProgress,
  $starterEmotes
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
import { messageReceived, $emotesList } from "../../core/tmi";
import { socketOn, socketClientConnected } from "../../core/socket";

$starterStage
  .on(runStarter.done, () => "started")
  .on(pauseStarter.done, () => "paused")
  .on(stopStarter.done, () => "idle");

$starterTitle.on(runStarter.done, (state, { result }) => result.title);

$starterSubtitle.on(runStarter.done, (state, { result }) => result.subtitle);

$starterGoal.on(runStarter.done, (state, { result }) => result.goal);

$starterEmotes.on(runStarter.done, (state, { result }) => result.emotes);

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
    combine({
      stage: $starterStage,
      users: $starterUsers,
      allowedEmotes: $starterEmotes
    }),
    messageReceived,
    ({ stage, users, allowedEmotes }, { nickname, emotes, text }) => ({
      stage,
      users,
      nickname,
      emotes,
      text,
      allowedEmotes
    })
  ),
  // Run only if:
  // - has current starter
  // - user has not already counted
  // - has one of no1alex emotes
  filter: ({ stage, users, nickname, emotes, text, allowedEmotes }) => {
    if (stage !== "started") {
      return false;
    }
    if (users.includes(nickname)) {
      return false;
    }
    if (!allowedEmotes.length) {
      return true;
    }
    const coords = [...Object.values(emotes)].map(matches => matches[0]);
    if (
      coords.some(coords =>
        allowedEmotes.includes(text.slice(...coords.split("-")))
      )
    ) {
      return false;
    }
    return true;
  },
  target: incStarterProgress
});

guard({
  source: $percentProgress,
  filter: progress => progress >= 100,
  target: sendStarterEnded.prepend(progress => ({ options: { progress } }))
});
