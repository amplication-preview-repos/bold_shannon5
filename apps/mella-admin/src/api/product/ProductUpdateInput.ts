import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  category?: string | null;
  location?: string | null;
  user?: UserWhereUniqueInput | null;
};
