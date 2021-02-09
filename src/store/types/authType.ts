import { userDetailsProps } from "../utility";

export interface IAuth {
  isAuthenticated: boolean;
  isVerifying: boolean;
  loading: boolean;
  error: string | null;
  user: userDetailsProps | null;
}
