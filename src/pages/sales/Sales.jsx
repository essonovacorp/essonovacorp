import React, { useState } from "react";

import { Breadcrumbs, Typography, Link, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import Addsales from '../../components/addSales/Addsales';

import SalesTable from "../../components/salesTable/SalesTable";



export default function Sales() {
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
            All Sales
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
    

  const handleClickSecond = () => {
    setSecond(true);
  };

  const handleCloseSecond = () => {
    setSecond(false);
  };

    
    return (
        <>
            <div className="allAgentsContatiner">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-9">
                        <span className="pageHeading">Sales</span>
                            <Stack spacing={1}>
                                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                                    {breadcrumbs}
                                </Breadcrumbs>
                            </Stack>
                        </div>
                        <div className="col-sm-3 text-right">
                            <span className="btn btn-primary" onClick={handleClickOpen}>
                                Add
                            </span>
                            <Dialog
                                fullWidth={fullWidth}
                                maxWidth={maxWidth}
                                open={open}
                                onClose={handleClose}
                            >
                                <DialogTitle>
                                    <div className="row">
                                        <div className="col">Create Agent's Contract for Sale</div>
                                        <div className="col text-right"><Button onClick={handleClose}><CloseIcon /></Button></div>
                                    </div>
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        <Addsales />
                                    </DialogContentText>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-12">
                            <SalesTable/>
                           
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}
