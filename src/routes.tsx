import * as React from "react";
import { initDomRouter } from "~lib/routing/dom";

import { StarterPage } from "~pages/starter";

const routes = {
  home: {
    view: () => <StarterPage />,
    meta: {
      path: "/"
    }
  },
  auth: {
    view: () => null,
    meta: {
      path: "/auth/:token"
    }
  }
};

let initialRoute = { name: "home" };

initDomRouter({
  routes,
  initialRoute
});
