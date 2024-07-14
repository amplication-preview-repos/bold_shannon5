import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  requiredSkills?: SortOrder;
  salary?: SortOrder;
  location?: SortOrder;
  userId?: SortOrder;
};
