import React, {Component} from "react"
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import asyncComponent from "@/utils/asyncComponent";

import home from "@/pages/home/home";

const production = asyncComponent(() => import("@/pages/production/production"));
console.log(production)
export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/production" component={production} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}