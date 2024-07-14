import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobCreateInput = {
  title?: string | null;
  description?: string | null;
  requiredSkills?: string | null;
  salary?: number | null;
  location?: string | null;
  user?: UserWhereUniqueInput | null;
};
