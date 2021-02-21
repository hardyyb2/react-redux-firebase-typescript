export const Codes = {
  INVALID_TOKEN: "auth/invalid-user-token",
  NETWORK_ERROR: "auth/network-request-failed",
  TOKEN_EXPIRED: "auth/user-token-expired",
  POPUP_CANCELLED: "auth/cancelled-popup-request",
  POPUP_CLOSED: "auth/popup-closed-by-user",
  NO_USER_FOUND: "auth/no-user-found",
};

export const Messages = {
  INVALID_TOKEN_MSG: "Session timed out. Please login again",
  NETWORK_ERROR_MSG: "Network timed out. Please try again",
  TOKEN_EXPIRED_MSG: "Session timed out. Please login again",
  POPUP_CANCELLED_MSG: "Another popup was opened",
  POPUP_CLOSED_MSG: "Login popup was closed",
  NO_USER_FOUND_MSG: "No User found",
  DEFAULT_MSG: "Some error occurred. Please try again",
};

export const LOCALSTORAGE_USER_KEY = "user";
