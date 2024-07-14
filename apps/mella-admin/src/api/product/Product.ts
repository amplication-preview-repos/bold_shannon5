import { User } from "../user/User";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  category: string | null;
  location: string | null;
  user?: User | null;
};
