import { Codes, Messages } from "../constants";

export interface ErrorProps {
  a?: any | null;
  code: string;
  message: string;
}

const createErrorMessage = (error: ErrorProps) => {
  const { code } = error;

  console.log(error);

  switch (code) {
    case Codes.INVALID_TOKEN:
      return Messages.INVALID_TOKEN_MSG;
    case Codes.NETWORK_ERROR:
      return Messages.NETWORK_ERROR_MSG;
    case Codes.TOKEN_EXPIRED:
      return Messages.TOKEN_EXPIRED_MSG;
    case Codes.POPUP_CANCELLED:
      return Messages.POPUP_CANCELLED_MSG;
    case Codes.POPUP_CLOSED:
      return Messages.POPUP_CLOSED_MSG;
    case Codes.NO_USER_FOUND:
      return Messages.NO_USER_FOUND_MSG;
    default:
      return Messages.DEFAULT_MSG;
  }
};

export default createErrorMessage;
