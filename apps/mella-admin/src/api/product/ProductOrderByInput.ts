import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  category?: SortOrder;
  location?: SortOrder;
  userId?: SortOrder;
};
