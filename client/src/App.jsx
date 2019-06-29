import React, { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";

// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./store/actions/auth";

// Layout components
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

// Auth components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};
export default App;
