import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { HouseListRelationFilter } from "../house/HouseListRelationFilter";
import { JobListRelationFilter } from "../job/JobListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  profilePicture?: JsonFilter;
  posts?: PostListRelationFilter;
  products?: ProductListRelationFilter;
  houses?: HouseListRelationFilter;
  jobs?: JobListRelationFilter;
};
