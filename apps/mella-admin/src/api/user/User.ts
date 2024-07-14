import { JsonValue } from "type-fest";
import { Post } from "../post/Post";
import { Product } from "../product/Product";
import { House } from "../house/House";
import { Job } from "../job/Job";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  profilePicture: JsonValue;
  posts?: Array<Post>;
  products?: Array<Product>;
  houses?: Array<House>;
  jobs?: Array<Job>;
};
