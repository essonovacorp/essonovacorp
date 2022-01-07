import React, { useState } from "react";
import { Breadcrumbs, Typography, Link, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import checkIcon from '../../assets/images/check.svg';
import { Button, SelectPicker } from 'rsuite';
import { upgradePlan } from '../../DummyData';

export default function Plan() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/">
            Dashboard
        </Link>,
        // <Link
        //   underline="hover"
        //   key="2"
        //   color="inherit"
        //   href="/getting-started/installation/"
        //   onClick={handleClick}
        // >
        //   Core
        // </Link>,
        <Typography key="2" color="text.primary">
            Your plan
        </Typography>,
    ];
    return (
        <div>
            <div className="allAgentsContatiner planContainer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <span className="pageHeading">Your plan</span><br />
                            <Stack spacing={1} className="bg-transprent mt-2">
                                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                                    {breadcrumbs}
                                </Breadcrumbs>
                            </Stack>
                        </div>
                    </div>
                    <div className="row align-items-center mt-4 mb-3">
                        <div className="col-md-5">
                            <label className="upgradePlan">Upgrade plan: </label>
                            <SelectPicker data={upgradePlan} defaultValue={'Upto 5 agents($20/mo)'} searchable={false} size="lg" style={{ width: 280 }} />
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex align-itmes-center planAmount">
                            <span>200</span> <small><strong>$</strong><br/>Per Month</small>
                            <Button className="btn btn-primary btn-lg ml-3" style={{height:54}}>Upgrade Now</Button>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <p>Your current plan: <b><u>USD$ 20/month</u> (upto 50 agents)</b> <small>(Renews on 20th February, 2020)</small></p>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <ul className="list-unstyled d-md-flex flex-wrap planList">
                                    <li className="d-flex align-items-center">
                                        <img src={checkIcon} className="me-2 text-success" /> Buy & Sale Trackin
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <img src={checkIcon} className="me-2 text-success" />Tracking all your agents
                                        activities
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <img src={checkIcon} className="me-2 text-success" /> Agent management
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <img src={checkIcon} className="me-2 text-success" /> Email and community
                                        support
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <img src={checkIcon} className="me-2 text-success" />Commission collection
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-5 border-left">
                                <ul className="list-unstyled d-md-flex flex-wrap planTwo">
                                    <li className="d-flex align-items-center">
                                        <img src={checkIcon} className="me-2 text-success" /> Manage Sale and Rent activities(for Agents)
                                    </li>

                                    <li className="d-flex align-items-center">
                                        <img src={checkIcon} className="me-2 text-success" />Commission collection
                                        (for Agents)
                                        activities
                                    </li>

                                    <li className="d-flex align-items-center">
                                        <img src={checkIcon} className="me-2 text-success" /> Track all the activities
                                        (for Agents)
                                    </li>





                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
