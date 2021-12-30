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
import {salesData} from '../../DummyData';

import CloseIcon from '@mui/icons-material/Close';
import Additems from '../../components/addItems/Additems';
import Addsales from '../../components/addSales/Addsales';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import imgEdit from '../../assets/images/edit.svg';
import imgDelete from '../../assets/images/delete.svg';
import imgKey from '../../assets/images/fxemoji_key.svg';
import viewIcon from '../../assets/images/view.svg';
import pdfIcon from '../../assets/images/pdf.svg';


import $ from 'jquery';
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

    const componentDidMount = () => {

        $(document).ready(function () {
          $('#example').DataTable();
        });
      }
      componentDidMount();
    
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
                            {/* <div className="table-responsive">
                                <table id="example" class="table table-sm">
                                    <thead>
                                        <tr>
                                            <th data-orderable="false" style={{width:"150px"}}>Date</th>
                                            <th>Closing Date</th>
                                            <th>Agent</th>
                                            <th>MLS</th>
                                            <th style={{width:"150px"}}>Property Address</th>
                                            <th className="text-center" >Sale Price</th>
                                            <th className="text-center" style={{width:"150px"}} >Other Agent Comm Value</th>
                                            <th className="text-center" >Rebate Buye Seller</th>
                                            <th className="text-center" >Transaction Fee</th>
                                            <th className="text-center" >Agent Net Commission</th>
                                            <th className="text-center" data-orderable="false">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {salesData.map((row) => (
                                            <tr key={row.Date}>
                                                <td className="align-middle">{row.Date}</td>
                                                <td className="align-middle">{row.ClosingDate}</td>
                                                <td className="align-middle">{row.agent}</td>
                                                <td className="align-middle">{row.mls}</td>
                                                <td className="align-middle">  {row.propertyAddress}</td>
                                                <td className="align-middle" align="center">{row.salePrice}</td>
                                                <td className="align-middle" align="center">{row.otherAgentCommValue}</td>
                                                <td className="align-middle" align="center">{row.rebateBuyeSeller}</td>
                                                <td className="align-middle" align="center">{row.transactionFee}</td>
                                                <td className="align-middle" align="center">{row.agentNetCommission}</td>
                                                <td className="align-middle" align="center">
                                                    <div className="d-flex justify-content-center">
                                                        <button className="bg-transprent">
                                                            <img src={viewIcon} alt=""/>
                                                        </button>
                                                        <button className="bg-transprent">
                                                            <img src={imgEdit} alt=""/>
                                                        </button>
                                                        <button className="bg-transprent" onClick={handleClickOpen}>
                                                            <img src={imgDelete} alt=""/>
                                                        </button>
                                                        <button className="bg-transprent">
                                                            <img src={pdfIcon}  alt=""/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-sm-12">
                            <div className="tableConatiner">
                                <Additems />

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
