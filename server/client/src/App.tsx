import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "./actions";

import { Header } from "./components";

const Dashboard = () => {
  return <h2>Dashboard</h2>;
};
const Detail = () => {
  return <h2>Detail</h2>;
};
const Landing = () => {
  return <h2>Landing</h2>;
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("-- APP --");
    dispatch(actions.fetchUser());
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header myProp="yo yo yor" />
          <Switch>
            <Route path="/habits/:id" component={Detail} />
            <Route path="/habits" component={Dashboard} exact />
            <Route path="/" component={Landing} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
