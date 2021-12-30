import React, { useState } from "react";

import { agentTable } from "../../DummyData";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Table, Pagination } from 'rsuite';
import { Input, InputGroup } from 'rsuite';
import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import imgEdit from '../../assets/images/edit.svg';
import imgDelete from '../../assets/images/delete.svg';
import imgKey from '../../assets/images/fxemoji_key.svg';




const { Column, HeaderCell, Cell } = Table;



export default function AgentsTableList({ agentTable, title }) {
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

    // DataTable
    const ActionCell = ({ rowData, dataKey, ...props }) => {
        function handleAction() {
            alert(`id:${rowData[dataKey]}`);
        }
        return (
            <Cell {...props} className="action-btn link-group">
                
                <button className="bg-transprent">
                    <img src={imgEdit} />
                </button>
                <button className="bg-transprent" onClick={handleClickOpen}>
    
                    <img src={imgDelete} />
                </button>
                <button className="bg-transprent" onClick={handleClickSecond}>
                    <img src={imgKey} />
                </button>
            </Cell>
        );
    };
    
    const ToActionCell = ({ rowData, dataKey, ...props }) => {
        return (
            <Cell {...props} className="action-btn link-group">
                
                { (rowData.status == 'active') ? <CheckCircleIcon className="text-success" /> : <CancelIcon className="text-danger"/>}
            </Cell>
        );
    };

    const AgentNameEmail = ({ rowData, dataKey, ...props }) => {
        return (
            <Cell {...props} className="action-btn link-group">
                { rowData.agentName },<br/>{ rowData.email}
            </Cell>
        );
    };
    const Address = ({ rowData, dataKey, ...props }) => {
        return (
            <Cell {...props} className="action-btn link-group">
                {rowData.StreetName},{rowData.state} , {rowData.city}, {rowData.country}
            </Cell>
        );
    };
    

    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);

    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const data = agentTable.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return i >= start && i < end;
    });


    const getData = () => {
        if (sortColumn && sortType) {
            return data.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }
                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }
        return data;
    };

    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };
    const styles = {
        width: 300,
        marginBottom: 10
    };
    const CustomInputGroupWidthButton = ({ placeholder, ...props }) => (
        <InputGroup {...props} inside style={styles}>
            <Input placeholder={placeholder} />
            <InputGroup.Button>
                <SearchIcon />
            </InputGroup.Button>
        </InputGroup>
    );

    // Code Render
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

            <div className="reactTable my-4">
                <CustomInputGroupWidthButton size="md" placeholder="Search" />
                <hr className='mb-0' />
                <Table
                   wordWrap
                    data={getData()}
                    loading={loading}
                    height={400}
                    headerHeight={80}
                    sortColumn={sortColumn}
                    sortType={sortType}
                    onSortColumn={handleSortColumn}
                    loading={loading}
                    onRowClick={data => {
                        console.log(data);
                    }}
                   
                    
                    >
                   

                    <Column width={140} fixed sortable>
                        <HeaderCell>Username</HeaderCell>
                        <Cell dataKey="Username" />
                    </Column>

                    <Column width={200} sortable>
                        <HeaderCell>Agent Name</HeaderCell>
                        <AgentNameEmail/>
                    </Column>

                    <Column width={150} sortable>
                        <HeaderCell>Phone</HeaderCell>
                        <Cell dataKey={"phone"} />
                    </Column>
                    <Column width={190} sortable >
                        <HeaderCell>Address</HeaderCell>
                        <Address/>
                    </Column>
                    <Column width={150} sortable>
                        <HeaderCell>Monthly Fee<br/> User</HeaderCell>
                        <Cell dataKey="monthlyFeeUser" />
                    </Column>
                    <Column width={150} sortable>
                        <HeaderCell>Fax</HeaderCell>
                        <Cell dataKey='fax' />
                    </Column>
                    <Column width={110} sortable>
                        <HeaderCell>Is Active</HeaderCell>
                        <ToActionCell />
                    </Column>
                    <Column width={150} >
                        <HeaderCell>Action</HeaderCell>
                        <ActionCell dataKey="Date" />

                    </Column>
                </Table>
                <div style={{ padding: 20 }}>
                    <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        maxButtons={5}
                        size="xs"
                        layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                        total={agentTable.length}
                        limitOptions={[5, 10, 15, 20]}
                        limit={limit}
                        activePage={page}
                        onChangePage={setPage}
                        onChangeLimit={handleChangeLimit}
                    />
                </div>
            </div>
        </>
    )
}
