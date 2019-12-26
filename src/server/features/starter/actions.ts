import { createSocketSender } from "../../core/socket";
import { createEffect } from "effector";

export const sendStarterReceived = createSocketSender("starter:received");
export const sendStarterStarted = createSocketSender("starter:started");
export const sendStarterPaused = createSocketSender("starter:paused");
export const sendStarterEnded = createSocketSender("starter:ended");
export const sendStarterStopped = createSocketSender("starter:stopped");
export const sendStarterProgress = createSocketSender(
  "starter:progress-updated"
);

export const runStarter = createEffect({
  handler: params => params
});

export const pauseStarter = createEffect({
  handler: params => params
});

export const stopStarter = createEffect({
  handler: params => params
});

export const incStarterProgress = createEffect({
  handler: params => params
});
