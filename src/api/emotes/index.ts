import { createStore, createEffect } from "effector";

type Emote = {
  code: string;
  emoticon_set: number;
  id: number;
};

export const getEmotes = createEffect({
  handler: () =>
    fetch("https://api.twitchemotes.com/api/v4/channels/83435622").then((r) =>
      r.json()
    ),
});

export const $emotesList = createStore<Emote[]>([]);

$emotesList.on(getEmotes.doneData, (state, r) => r.emotes);

getEmotes();
