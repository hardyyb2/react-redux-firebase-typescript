import { ComponentType, FC } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

import { Spinner } from "../../common";
import { Layout as ProtectedLayout } from "../../layout";

interface ProtectedRouteProps extends RouteProps {
  component: ComponentType<any>;
  isAuthenticated: boolean | null;
  isVerifying: boolean | null;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      /** If the user is being verified, show a Spinner/Loader */
      isVerifying ? (
        <Spinner />
      ) : /** If succesfully authed render the component inside the layout */
      isAuthenticated ? (
        <ProtectedLayout>
          <Component {...props} />
        </ProtectedLayout>
      ) : (
        /** else if not authed, redirect to login page */
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
