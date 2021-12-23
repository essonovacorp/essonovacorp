import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import imgEdit from '../../assets/images/edit.svg';
import imgDelete from '../../assets/images/delete.svg';
import imgKey from '../../assets/images/fxemoji_key.svg';

import $ from 'jquery';


export default function AllagentTableList({ agentTable, title }) {
  const [open, setOpen] = React.useState(false);
  const [second, setSecond] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

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

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <div className="row justify-content-center align-items-center my-4">
            <div className="col text-center">
              <img src={imgDelete} className="me-2" />
              Delete <strong>John Doe(john99)</strong>?</div>

          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="p-4">
              <p>You're about to permanently delete this agent, its entry and all the data associated to it.</p>
              <p>If you're not sure, you can cancel.</p>
            </div>
            <div className="text-right mb-3">
              <Button onClick={handleClose} className="btn btn-danger mr-3" variant="contained">Delete</Button>
              <Button onClick={handleClose} className="btn"  >Cancel</Button>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>


      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={second}
        onClose={handleCloseSecond}
      >
        <DialogTitle>
          <div className="row justify-content-center align-items-center my-4">
            <div className="col text-center">
              <img src={imgKey} className="me-2" />
              Change password for<strong>John Doe(john99)</strong>?</div>

          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="px-4">
              <div class="mb-3">
                <label for="NewPassword" class="form-label">New Password<sup className="text-danger">*</sup></label>
                <input type="text" class="form-control" id="NewPassword" />
              </div>
              <div class="mb-3">
                <label for="repeatPassword" class="form-label">Repeat Password<sup className="text-danger">*</sup></label>
                <input type="password" class="form-control" id="repeatPassword" disabled />
              </div>
            </div>
            <div className="row">
              <div className="col-11">
                <div className="text-right d-flex align-items-center justify-content-end my-5">
                  <button className="btn-submit">Confirm</button>
                  <div className="btn-cancel" onClick={handleCloseSecond}>Cancel</div>
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <div className="deleteNotification mt-4">
      You can’t delete a user if a Sale or Rent entry exist of that user. If you want to remove them make sure no entry exists.
      </div>
      <div className="table-responsive">
        <table id="example" class="table table-hover">
          <thead>
            <tr>
              <th data-orderable="false">#ID</th>
              <th>Username</th>
              <th>Agent Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th className="text-center" >Monthly Fee User</th>
              <th className="text-center" >Fax</th>
              <th className="text-center" data-orderable="false">Is Active</th>
              <th className="text-center" data-orderable="false">Action</th>
            </tr>
          </thead>
          <tbody>
            {agentTable.map((row) => (
              <tr key={row.agentName}>
                <td>{row.id}</td>
                <td>{row.Username}</td>
                <td>  {row.agentName}<br/> {row.email}</td>
                <td>{row.phone}</td>
                <td>{row.StreetName},{row.state} , {row.city}, {row.country}</td>
                <td align="center">{row.monthlyFeeUser}</td>
                <td align="center">{row.fax}</td>
                <td align="center">
                { (row.status == 'active') ? <CheckCircleIcon className="text-success" /> : <CancelIcon className="text-danger"/>}

                 
                </td>
                <td align="center">
                  <div className="d-flex justify-content-center">
                    <button className="bg-transprent">
                      <img src={imgEdit} />
                    </button>
                    <button className="bg-transprent" onClick={handleClickOpen}>

                      <img src={imgDelete} />
                    </button>
                    <button className="bg-transprent" onClick={handleClickSecond}>
                      <img src={imgKey} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  )
}
