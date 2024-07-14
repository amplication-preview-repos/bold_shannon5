import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "sentTo";

export const MessageTitle = (record: TMessage): string => {
  return record.sentTo?.toString() || String(record.id);
};
