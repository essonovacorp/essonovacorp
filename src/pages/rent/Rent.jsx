
import React, { useState } from "react";
import { Breadcrumbs, Typography, Link, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import RentTable from "../../components/rentTable/RentTable";
import { Button } from "rsuite";

import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import Addrent from "../../components/addRent/Addrent";

export default function Rent() {
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
            Rent
        </Typography>,
    ];
    const [open, setOpen] = React.useState(false);
    const [second, setSecond] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('lg');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div>
             <div className="allAgentsContatiner">
     <div className="container-fluid">
          <div className="row align-items-center">
             <div className="col-md-6">
                 <span className="pageHeading">Agent's Contract for Rent</span><br/>
                 <Stack spacing={1} className="bg-transprent mt-2">
                     <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                         {breadcrumbs}
                     </Breadcrumbs>
                 </Stack>
             </div>
             <div className="col-md-6 text-right">
                <Button appearance="primary" onClick={handleClickOpen}>Add</Button>
                <Dialog
                                fullWidth={fullWidth}
                                maxWidth={maxWidth}
                                open={open}
                                onClose={handleClose}
                            >
                                <DialogTitle>
                                    <div className="row">
                                        <div className="col">Create Agent's Contract for Rent</div>
                                        <div className="col text-right"><Button onClick={handleClose}><CloseIcon /></Button></div>
                                    </div>
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                       <Addrent/>
                                    </DialogContentText>
                                </DialogContent>
                            </Dialog>
             </div>
         </div>
         <div className="row">
             <div className="col-md-12">
                <RentTable/>
             </div>
         </div>
        
     </div>
 </div>

            
        </div>
    )
}
