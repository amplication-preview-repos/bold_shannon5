import { SortOrder } from "../../util/SortOrder";

export type HouseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  typeField?: SortOrder;
  forSaleOrRent?: SortOrder;
  location?: SortOrder;
  userId?: SortOrder;
};
