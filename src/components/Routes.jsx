import React from "react";
import { Switch, Route } from "react-router-dom";
import Agents from "../pages/agents/Agents";
import Dashboard from '../pages/dashboard/Dashboard';
import Sales from "../pages/sales/Sales";
import Addsales from "./addSales/Addsales";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/agents">
                <Agents />
            </Route>
            <Route path="/sales">
                <Sales />
            </Route>
            <Route path="/add-sales">
                <Addsales />
            </Route>
        </Switch>
    )
}

export default Routes
