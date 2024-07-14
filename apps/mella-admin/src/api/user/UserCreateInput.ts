import { InputJsonValue } from "../../types";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { ProductCreateNestedManyWithoutUsersInput } from "./ProductCreateNestedManyWithoutUsersInput";
import { HouseCreateNestedManyWithoutUsersInput } from "./HouseCreateNestedManyWithoutUsersInput";
import { JobCreateNestedManyWithoutUsersInput } from "./JobCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  profilePicture?: InputJsonValue;
  posts?: PostCreateNestedManyWithoutUsersInput;
  products?: ProductCreateNestedManyWithoutUsersInput;
  houses?: HouseCreateNestedManyWithoutUsersInput;
  jobs?: JobCreateNestedManyWithoutUsersInput;
};
