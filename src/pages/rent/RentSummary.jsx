
import React, { useState } from "react";
import { Breadcrumbs, Typography, Link, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import RentSummaryTable from "../../components/rentSummaryTable/RentSummaryTable";


export default function RentSummary() {
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
            Rent Summary
        </Typography>,
    ];
    return (
        <div>
                   
        <div className="allAgentsContatiner">
     <div className="container-fluid">
          <div className="row">
             <div className="col">
                 <span className="pageHeading">Rent Summary</span><br/>
                 <Stack spacing={1} className="bg-transprent mt-2">
                     <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                         {breadcrumbs}
                     </Breadcrumbs>
                 </Stack>
             </div>
         </div>
         <div className="row">
             <div className="col-md-12">
                <RentSummaryTable/>
             </div>
         </div>
        
     </div>
 </div>

 
</div>
    )
}
