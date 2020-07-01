import * as React from "react";
import { Box, SubnavRouteLink } from "~ui";

export const Sidebar = () => {
  return (
    <Box flow="row" cols={["1fr"]}>
      <h2>Goals</h2>
      <SubnavRouteLink name="home">Goal Starter</SubnavRouteLink>
      <h2>TTS</h2>
      <SubnavRouteLink name="tts">Chat and TTS</SubnavRouteLink>
    </Box>
  );
};
