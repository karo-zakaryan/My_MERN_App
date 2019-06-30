import React, { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";

// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";

// Redux
import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./store/actions/auth";

// Layout components
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

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
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
