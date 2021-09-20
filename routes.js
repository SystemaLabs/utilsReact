// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Cookies.get("auth") ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !Cookies.get("auth") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/dashboard", state: { from: props.location } }}
        />
      )
    }
  />
);
