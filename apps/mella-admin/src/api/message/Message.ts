export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  sentTo: string | null;
  timestamp: Date | null;
  sentBy: string | null;
};
