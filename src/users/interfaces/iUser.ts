import { ID } from '../../interfaces/id';

interface IUser {
  _id: ID;
  email: string;
  passwordHash: string;
  name: string;
  contactPhone?: string;
  role: string;
}

export type { IUser };
