import React from "react";

// Router
import { Route, Switch } from "react-router-dom";

// Dashboard components
import Dashboard from "../dashboard/Dashboard";

// Layout components
import Alert from "../layout/Alert";
import NotFound from "../layout/NotFound";

// Auth components
import Login from "../auth/Login";
import Register from "../auth/Register";

// Routing
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
