import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
