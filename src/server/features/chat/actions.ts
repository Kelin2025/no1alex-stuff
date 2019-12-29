import { createSocketSender } from "../../core/socket";

export const sendMessageEvent = createSocketSender("chat:message");
export const sendEmotesEvent = createSocketSender("chat:emotes");
