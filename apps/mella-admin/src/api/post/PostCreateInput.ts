import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  title?: string | null;
  description?: string | null;
  typeField?: "Option1" | null;
  content?: string | null;
  media?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
