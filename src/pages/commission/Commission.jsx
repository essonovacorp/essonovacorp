import React, { useState } from "react";
import { Breadcrumbs, Typography, Link, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CommissionTable from "../../components/commissionTable/CommissionTable";

export default function Commission() {
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
            Commission
        </Typography>,
    ];
    return (
        <div>
                   
             <div className="allAgentsContatiner">
                <div className="container-fluid">
                     <div className="row">
                        <div className="col">
                            <span className="pageHeading">Commission</span>
                            <Stack spacing={1} className="bg-transprent">
                                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                                    {breadcrumbs}
                                </Breadcrumbs>
                            </Stack>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <CommissionTable/>
                        </div>
                    </div>
                   
                </div>
            </div>
         
        </div>
    )
}
