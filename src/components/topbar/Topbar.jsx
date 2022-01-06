import React, { useState } from "react";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link, NavLink } from 'react-router-dom';
import agent from "../../assets/images/topbar-agent/agent.svg";
import changePasswordIcon from '../../assets/images/key.svg';
import logoutIcon from '../../assets/images/logout.svg';
import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { Input } from "rsuite";

export default function Topbar() {
    const [open, setOpen] = React.useState(false);
    const [second, setSecond] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const [smallWidth, setSmallWidth] = React.useState('sm');

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
        <div className="topbar">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="page-title text-center text-md-start">
                        <span>Agent Name</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="topbarUserLogin d-flex justify-content-end">
                        <div className="media userProfileTop">
                            <img src={agent} className="align-self-center mr-3" alt="..." />
                            <div className="media-body">
                                <div className="userProfile">
                                    <div className="profileTop d-flex align-items-center">
                                        <div className="profileDetails">
                                            <h5 className="my-0">Rowena Ravenclaw</h5>
                                            <small>Super Administrator</small>
                                        </div>
                                        <div className="profileDropdown">
                                            <KeyboardArrowDownIcon />
                                        </div>
                                    </div>
                                    <div className="userProfileAction">
                                        <ul className="list-unstyled">
                                            <li>
                                                <NavLink activeClassName={"active"} to="/profile" className="profileLink">
                                                    Profile
                                                </NavLink>
                                            </li>
                                            <li>
                                                <span className="changePasswordLink" role="button" onClick={handleClickOpen}>
                                                    Change Password
                                                </span>

                                            </li>
                                            <li >
                                                <span role="button" className="logoutLink" onClick={handleClickSecond}>
                                                    Logout
                                                </span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <Dialog
                                    fullWidth={fullWidth}
                                    maxWidth={maxWidth}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <DialogTitle>
                                        <div className="row">
                                            <div className="col-11">
                                                <img src={changePasswordIcon} alt="" className="me-2" /> Change password for <strong>Rowena Ravenclaw(Super Admin)</strong>?</div>
                                            <div className="col-1 text-right"><Button onClick={handleClose}><CloseIcon /></Button></div>
                                        </div>
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            <form className="py-4">
                                                <div className="row">
                                                    <div className="col-md-9">
                                                        <div className="mb-3 pe-3">
                                                            <label for="oldPassword" className="form-label fw-bold">Old Password<sup className='text-danger'>*</sup></label>
                                                            <Input size="lg" type="text" id="oldPassword" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="mb-3 pe-3">
                                                            <label for="newPassword" className="form-label fw-bold">New Password<sup className='text-danger'>*</sup></label>
                                                            <Input size="lg" type="text" id="newPassword" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="mb-3 pe-3">
                                                            <label for="repeatPassword" className="form-label fw-bold">Repeat Password<sup className='text-danger'>*</sup></label>
                                                            <Input size="lg" type="text" id="repeatPassword" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="text-right my-4">
                                                            <Button onClick={handleClose} className="btn btn-danger mr-3" variant="contained">Confirm</Button>
                                                            <Button onClick={handleClose} className="btn"  >Cancel</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </DialogContentText>
                                    </DialogContent>
                                </Dialog>



                                <Dialog
                                    fullWidth={fullWidth}
                                    smallWidth={smallWidth}
                                    open={second}
                                    onClose={handleCloseSecond}
                                >

                                    <DialogContent>
                                        <DialogContentText>
                                            <div className="p-4 text-center">
                                                <img src={logoutIcon} className="me-2" />
                                                Are you sure you want to <strong>logout?</strong>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="text-center d-flex align-items-center justify-content-center my-4">
                                                        <button className="btn-submit" onClick={handleCloseSecond}>Confirm</button>
                                                        <div className="btn-cancel" onClick={handleCloseSecond}>Cancel</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogContentText>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
