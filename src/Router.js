import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoggedInLayout from "./layouts/LoggedInLayout";
import Home from "./pages/Home";
import Buttons from "./pages/Buttons";
import LogIn from "./pages/LogIn";
import ProtectedRoute from "./hooks/ProtectedRoute";

function Router() {
   return (
      <BrowserRouter>
         <Switch>
            {/* Simple Routes */}
            <Route exact path="/login" component={LogIn} />
            {/* End Simple Routes */}

            {/* Protected Routes */}
            <LoggedInLayout>
               <ProtectedRoute exact path="/" component={Home} />
               <ProtectedRoute exact path="/buttons" component={Buttons} />
            </LoggedInLayout>
            {/* End Protected Routes */}
         </Switch>
      </BrowserRouter>
   );
}

export default Router;
