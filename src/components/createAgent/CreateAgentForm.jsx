import React, { useState } from "react";

import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import Uploadpicture from "../uploadPicture/Uploadpicture";


export default function CreateAgentForm() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
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
                        <div className="col">Create an agent</div>
                        <div className="col text-right"><Button onClick={handleClose}><CloseIcon /></Button></div>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <form>
                            <div className="agentForm">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div class="mb-4">
                                            <label for="agentName" class="form-label">Agent Name<sup className='text-danger'>*</sup></label>
                                            <input type="text" id="agentName" class="form-control" />
                                        </div>
                                        <div class="mb-4">
                                            <label for="phoneNumber" class="form-label">Phone Number<sup className='text-danger'>*</sup></label>
                                            <input type="text" id="phoneNumber" class="form-control" />

                                            <input type="text" class="form-control mt-2" disabled="true" />
                                        </div>
                                        <div class="mb-4">
                                            <label for="fax" class="form-label">Fax</label>
                                            <input type="text" id="fax" class="form-control" />
                                        </div>

                                        <Uploadpicture />

                                        <div class="mb-4">
                                            <label for="country" class="form-label">Country</label>
                                            <select class="form-control" name="" id="country">
                                                <option> United States</option>
                                                <option></option>
                                                <option></option>
                                            </select>
                                        </div>
                                        <div class="mb-4">
                                            <label for="streetName" class="form-label">Street Name</label>
                                            <input type="text" id="streetName" class="form-control" disabled />
                                        </div>
                                        <div class="mb-4">
                                            <label for="city" class="form-label">City $ State</label>
                                            <input type="text" id="city" class="form-control" disabled />
                                        </div>
                                        <div class="mb-4">
                                            <label for="zipcode" class="form-label">Zipcode</label>
                                            <input type="text" id="zipcode" class="form-control w-25" disabled />
                                        </div>
                                        <div class="mb-4">
                                            <label for="email" class="form-label">Email<sup className='text-danger'>*</sup></label>
                                            <input type="email" id="email" class="form-control" />
                                        </div>
                                        <div class="mb-4">
                                            <label for="username" class="form-label">Username<sup className='text-danger'>*</sup></label>
                                            <input type="text" id="username" class="form-control" />
                                        </div>
                                        <div class="mb-4">
                                            <label for="password" class="form-label">Password<sup className='text-danger'>*</sup></label>
                                            <input type="password" id="password" class="form-control" />
                                        </div>
                                        <div class="mb-4">
                                            <label for="isActive" class="form-label">Is Active<sup className='text-danger'>*</sup></label>
                                            <select class="form-control" name="" id="isActive">
                                                <option> United States</option>
                                                <option></option>
                                                <option></option>
                                            </select>
                                        </div>
                                        <div class="mb-4">
                                            <label for="feeType" class="form-label">Monthly Fee Type<sup className='text-danger'>*</sup></label>
                                            <select class="form-control" name="" id="feeType" disabled>
                                                <option>Select Type</option>
                                                <option></option>
                                                <option></option>
                                            </select>
                                        </div>
                                        <div className="monthFeeType">
                                            <div class="mb-4">
                                                <label for="flatSaleFee" class="form-label">Flat SaleTransaction Fee<sup className='text-danger'>*</sup></label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text border-right-0 bg-white">$</span>
                                                    </div>
                                                    <input type="text" id="flatSaleFee" class="form-control border-left-0" />
                                                </div>
                                            </div>
                                            <div class="mb-4">
                                                <label for="flatRentFee" class="form-label">Flat Rent Transaction Fee<sup className='text-danger'>*</sup></label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text border-right-0 bg-white">$</span>
                                                    </div>
                                                    <input type="text" id="flatRentFee" class="form-control border-left-0" />
                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <label for="monthlyOfficeFee" class="form-label">Monthly Office Fee<sup className='text-danger'>*</sup></label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text border-right-0">$</span>
                                                    </div>
                                                    <input type="text" id="monthlyOfficeFee" class="form-control border-left-0" disabled />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                            <div className="text-right d-flex align-items-center justify-content-end mb-5">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                    <label class="form-check-label" for="defaultCheck1">
                                        Create another
                                    </label>
                                </div>
                                <button className="btn-submit">Greate</button>
                                <div className="btn-cancel" onClick={handleClose}>Cancel</div>
                            </div>
                               
                        </form>
                    </DialogContentText>

                </DialogContent>

            </Dialog>
        </>

    )

}


