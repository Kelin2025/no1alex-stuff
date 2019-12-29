import nanoid from "nanoid";
import { forward } from "effector";

import { messageReceived, getEmotesList } from "../../core/tmi";
import { sendMessageEvent, sendEmotesEvent } from "./actions";

forward({
  from: messageReceived.map(options => ({
    options: { ...options, _id: nanoid() }
  })),
  to: sendMessageEvent
});

forward({
  from: getEmotesList.done.map(({ result }) => ({ options: result })),
  to: sendEmotesEvent
});
