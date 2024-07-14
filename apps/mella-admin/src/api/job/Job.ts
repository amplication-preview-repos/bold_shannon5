import { User } from "../user/User";

export type Job = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  requiredSkills: string | null;
  salary: number | null;
  location: string | null;
  user?: User | null;
};
