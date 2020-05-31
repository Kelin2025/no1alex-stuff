import * as React from "react";
import styled, { css } from "styled-components";
import { useStore } from "effector-react";

import { $isTtsPlaying } from "~api/tts";

import HeadphonesIcon from "~ui/assets/icons/headphones.svg";
import { TtsMessage } from "../atoms/TtsMessage";
import { TtsNickname } from "../atoms/TtsNickname";
import { Box, OverlayCard } from "~ui";

const Wrapper = styled(Box)`
  top: 40px;
  left: 50px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  position: absolute;
  transition: opacity 0.5s ease-out;
  width: 400px;
`;

export const TtsOverlay = () => {
  const isVisible = useStore($isTtsPlaying);

  return (
    <Wrapper cols={["1fr"]} active={isVisible}>
      <OverlayCard
        title={
          <Box cols="1fr max-content">
            <div>Message</div>
            <div>
              <HeadphonesIcon />
            </div>
          </Box>
        }
      >
        <TtsNickname />
        <TtsMessage />
      </OverlayCard>
    </Wrapper>
  );
};
