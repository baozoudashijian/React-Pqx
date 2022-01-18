import React, {Component} from "react"
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import asyncComponent from "@/utils/asyncComponent";

import home from "@/pages/home/home";

const production = asyncComponent(() => import("@/pages/production/production"));
const balance = asyncComponent(() => import("@/pages/balance/balance"));
const helpcenter = asyncComponent(() => import("@/pages/helpcenter/helpcenter"));

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/production" component={production} />
          <Route path="/balance" component={balance} />
          <Route path="/helpcenter" component={helpcenter} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}