import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  typeField?: "Option1" | null;
  content: string | null;
  media: JsonValue;
  user?: User | null;
};
