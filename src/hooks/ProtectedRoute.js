import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useDataLayerValue } from "../hooks/DataLayer";

function ProtectedRoute({ component: Component, ...rest }) {
   const [{ user, userIsLoading }] = useDataLayerValue();
   return (
      <Route
         {...rest}
         render={(props) => {
            if (user === null && userIsLoading === false) {
               return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
            } else {
               return <Component {...props} />;
            }
         }}
      />
   );
}

export default ProtectedRoute;
