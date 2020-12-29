import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  if (props.isUserLoggedIn) {
    return <Route component={props.component} />;
  } else {
    return <Redirect to={`/signin`} />;
  }
}

export default PrivateRoute;
