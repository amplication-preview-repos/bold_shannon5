import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  typeField?: SortOrder;
  content?: SortOrder;
  media?: SortOrder;
  userId?: SortOrder;
};
