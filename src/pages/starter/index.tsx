import * as React from "react";

import { Box } from "~ui";
import { StarterForm } from "~features/starter";
import { StarterPreview } from "~features/starterPreview";

export const StarterPage = () => {
  return (
    <Box flow="row" cols={["1fr"]} gap={100}>
      <StarterPreview />
      <StarterForm />
    </Box>
  );
};
