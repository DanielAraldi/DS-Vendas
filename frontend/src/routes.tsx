import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import Home from "pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
