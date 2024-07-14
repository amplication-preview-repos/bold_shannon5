import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HouseUpdateInput = {
  address?: string | null;
  description?: string | null;
  price?: number | null;
  typeField?: "Option1" | null;
  forSaleOrRent?: "Option1" | null;
  location?: string | null;
  user?: UserWhereUniqueInput | null;
};
