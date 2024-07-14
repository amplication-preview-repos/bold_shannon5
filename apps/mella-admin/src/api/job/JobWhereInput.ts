import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  requiredSkills?: StringNullableFilter;
  salary?: FloatNullableFilter;
  location?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
