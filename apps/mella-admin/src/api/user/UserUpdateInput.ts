import { InputJsonValue } from "../../types";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { ProductUpdateManyWithoutUsersInput } from "./ProductUpdateManyWithoutUsersInput";
import { HouseUpdateManyWithoutUsersInput } from "./HouseUpdateManyWithoutUsersInput";
import { JobUpdateManyWithoutUsersInput } from "./JobUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  profilePicture?: InputJsonValue;
  posts?: PostUpdateManyWithoutUsersInput;
  products?: ProductUpdateManyWithoutUsersInput;
  houses?: HouseUpdateManyWithoutUsersInput;
  jobs?: JobUpdateManyWithoutUsersInput;
};
