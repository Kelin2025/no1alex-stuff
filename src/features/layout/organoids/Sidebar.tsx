import * as React from "react";
import { Box, SubnavRouteLink } from "~ui";

export const Sidebar = () => {
  return (
    <Box flow="row" cols={["1fr"]}>
      <SubnavRouteLink name="home">Edit</SubnavRouteLink>
    </Box>
  );
};
