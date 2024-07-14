import { User } from "../user/User";

export type House = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  description: string | null;
  price: number | null;
  typeField?: "Option1" | null;
  forSaleOrRent?: "Option1" | null;
  location: string | null;
  user?: User | null;
};
