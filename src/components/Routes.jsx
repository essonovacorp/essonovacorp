import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../pages/profile/Profile";
import Agents from "../pages/agents/Agents";
import Commission from "../pages/commission/Commission";
import Dashboard from '../pages/dashboard/Dashboard';
import Rent from "../pages/rent/Rent";
import RentSummary from "../pages/rent/RentSummary";
import Sales from "../pages/sales/Sales";
import SaleSummary from "../pages/sales/SaleSummary";
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
            <Route path="/rent">
                <Rent/>
            </Route>
            <Route path="/commission">
                <Commission/>
            </Route>
            <Route path="/sale-summary">
                <SaleSummary/>
            </Route>
            <Route path="/rent-summary">
                <RentSummary/>
            </Route>
            <Route path="/profile">
                <Profile/>
            </Route>
        </Switch>
    )
}

export default Routes
