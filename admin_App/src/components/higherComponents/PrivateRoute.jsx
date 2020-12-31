import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) => {
        const loggedInuser = JSON.parse(window.localStorage.getItem("user"));
        if (loggedInuser !== null && loggedInuser.isLoggedIn === true) {
          return <Component {...props} />;
        } else {
          return <Redirect to={`/signin`} />;
        }
      }}
    />
  );
}

export default PrivateRoute;
