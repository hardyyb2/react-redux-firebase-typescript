export interface ErrorProps {
  a?: any | null;
  code: string;
  message: string;
}

enum Codes {
  INVALID_TOKEN = "auth/invalid-user-token",
  NETWORK_ERROR = "auth/network-request-failed",
  TOKEN_EXPIRED = "auth/user-token-expired",
  POPUP_CANCELLED = "auth/cancelled-popup-request",
  POPUP_CLOSED = "auth/popup-closed-by-user",
  NO_USER_FOUND = "auth/no-user-found",
}

enum Messages {
  INVALID_TOKEN_MSG = "Session timed out. Please login again",
  NETWORK_ERROR_MSG = "Network timed out. Please try again",
  TOKEN_EXPIRED_MSG = "Session timed out. Please login again",
  POPUP_CANCELLED_MSG = "Another popup was opened",
  POPUP_CLOSED_MSG = "Login popup was closed",
  NO_USER_FOUND_MSG = "No User found",
  DEFAULT_MSG = "Some error occurred. Please try again",
}

export const createErrorMessage = (error: ErrorProps): Messages => {
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
