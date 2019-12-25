import * as React from "react";
import { initDomRouter } from "~lib/routing/dom";

import { StarterPage } from "~pages/starter";

const routes = {
  home: {
    view: () => <StarterPage />,
    meta: {
      path: "/"
    }
  }
};

let initialRoute = { name: "home" };

initDomRouter({
  routes,
  initialRoute
});
