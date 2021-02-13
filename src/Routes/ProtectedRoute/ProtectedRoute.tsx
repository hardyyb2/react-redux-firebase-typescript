import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

import { Spinner } from "../../common";
import { Layout as ProtectedLayout } from "../../layout";

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  isAuthenticated: boolean | null;
  isVerifying: boolean | null;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isVerifying ? (
        <Spinner />
      ) : isAuthenticated ? (
        <ProtectedLayout>
          <Component {...props} />
        </ProtectedLayout>
      ) : (
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
