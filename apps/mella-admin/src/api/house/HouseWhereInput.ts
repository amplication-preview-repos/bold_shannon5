import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HouseWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  typeField?: "Option1";
  forSaleOrRent?: "Option1";
  location?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
