import * as React from "react";
import { initDomRouter } from "~lib/routing/dom";

import { TtsPage } from "~pages/tts";
import { PollsPage } from "~pages/polls";
import { StarterPage } from "~pages/starter";
import { PollsTemplatesPage } from "~pages/pollsTemplates";

const routes = {
  home: {
    view: () => <StarterPage />,
    meta: {
      path: "/",
    },
  },
  polls: {
    view: () => <PollsPage />,
    meta: {
      path: "/polls",
    },
  },
  pollsTemplates: {
    view: () => <PollsTemplatesPage />,
    meta: {
      path: "/polls/templates",
    },
  },
  tts: {
    view: () => <TtsPage />,
    meta: {
      path: "/tts",
    },
  },
  auth: {
    view: () => null,
    meta: {
      path: "/auth/:token",
    },
  },
};

let initialRoute = { name: "home" };

initDomRouter({
  routes,
  initialRoute,
});
