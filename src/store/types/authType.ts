import { userDetailsProps } from "../../utils/functions";

export interface IAuth {
  isAuthenticated: boolean;
  isVerifying: boolean;
  loading: boolean;
  error: string | null;
  user: userDetailsProps | null;
}
