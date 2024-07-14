import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  category?: string | null;
  location?: string | null;
  user?: UserWhereUniqueInput | null;
};
