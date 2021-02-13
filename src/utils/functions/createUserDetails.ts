export interface userDetailsProps {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  refreshToken: string;
  uid: string;
}

const createUserDetails = (user: any): userDetailsProps => {
  const userDetails: userDetailsProps = {
    displayName: user?.displayName ?? "",
    email: user?.email ?? "",
    phoneNumber: user?.phoneNumber ?? "",
    photoURL: user?.photoURL ?? "",
    refreshToken: user?.refreshToken ?? "",
    uid: user?.uid ?? "",
  };
  return userDetails;
};

export default createUserDetails;
