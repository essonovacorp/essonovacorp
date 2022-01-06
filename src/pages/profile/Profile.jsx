import React, { useState } from 'react';

import { Breadcrumbs, Typography, Link, Stack } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Uploader, Input, SelectPicker, InputGroup, Button, Divider, Tooltip, Whisper ,ButtonToolbar} from 'rsuite';
import profilePic from '../../assets/images/dummyImg.png';
import noticePic from '../../assets/images/notice.svg';
import { selectData } from '../../DummyData';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Profile() {
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
            Profile
        </Typography>,
    ];

    const styles = { width: '100%', display: 'block', marginBottom: 10 };

    const [value, setValue] = React.useState(null);
    const [valueCity, setValueCity] = React.useState(null);
    const [valueCountry, setValueCountry] = React.useState(null);

    const userName = "Shiv"
    const tooltip = (
        <Tooltip>
            This is a help <i>tooltip</i> .
        </Tooltip>
    );
    const tooltip2 = (
        <Tooltip>
            This is a help <i>tooltip 2</i> .
        </Tooltip>
    );
    const [visible, setVisible] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);



    const handleChange = () => {
        setVisible(!visible);
    };

    const handleChange2 = () => {
        setVisible2(!visible2);
    };
    return (
        <div>
            <div className="allAgentsContatiner adminProfile">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <span className="pageHeading">Supper Admin Profile : {userName}</span><br />
                            <Stack spacing={1} className="bg-transprent mt-2">
                                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                                    {breadcrumbs}
                                </Breadcrumbs>
                            </Stack>
                        </div>
                    </div>
                    <div className="row  mt-5">
                        <div className="col-md-6">
                            <h4 className='mb-3'>Profile Photo</h4>
                            <div className="uploadProfilePhoto text-center">
                                <Uploader multiple listType="picture" >
                                    <button>
                                        <img src={profilePic} alt="" className='img-fluid' />
                                    </button>
                                </Uploader>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4 className='mb-3'>COMPANY LOGO<sup className='text-danger'>*</sup></h4>
                            <div className="uploadProfilePhoto text-center">
                                <Uploader multiple listType="picture" >
                                    <button>
                                        <img src={profilePic} alt="" className='img-fluid' />
                                    </button>
                                </Uploader>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form class="form-group mt-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-4 pe-3">
                                            <Input type="text" size="lg" placeholder="First Name*" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-4 pe-3">
                                            <Input type="text" size="lg" placeholder="Last Name*" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <Input type="text" size="lg" placeholder="Company Name*" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <h4>Address  <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={tooltip}>
                                                <img src={noticePic} alt="" />
                                            </Whisper></h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <Input type="text" size="lg" placeholder="street name" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <SelectPicker size="lg" value={value} onChange={setValue} placement="autoVerticalStart" data={selectData} style={styles} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <SelectPicker size="lg" value={valueCity} onChange={setValueCity} placement="autoVerticalStart" data={selectData} style={styles} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <Input type="text" size="lg" placeholder="Zip Code" />

                                        </div>
                                    </div>
                                </div>
                                <Divider />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <h4>Type  <Whisper placement="top" controlId="control-id-hover" trigger="hover" speaker={tooltip2}>
                                                <img src={noticePic} alt="" />
                                            </Whisper></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <Input type="text" size="lg" placeholder="Super Administrator" disabled />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <Input type="email" size="lg" placeholder="email*" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <Input type="text" size="lg" placeholder="username*"  />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <InputGroup inside style={styles} size="lg">
                                                <Input type={visible ? 'text' : 'password'} placeholder='password*' />
                                                <InputGroup.Button onClick={handleChange} >
                                                    {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </InputGroup.Button>
                                            </InputGroup>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <InputGroup inside style={styles} size="lg">
                                                <Input type={visible2 ? 'text' : 'password'} placeholder='comfirm password*' />
                                                <InputGroup.Button onClick={handleChange2} >
                                                    {visible2 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </InputGroup.Button>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <SelectPicker size="lg" value={valueCountry} onChange={setValueCountry} placement="autoVerticalStart" data={selectData} style={styles} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <Input type="text" size="lg" placeholder="phone number" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-4 pe-3">
                                            <Input type="text" size="lg" placeholder="fax"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                <ButtonToolbar className='d-flex justify-content-center'>

                                <Button appearance="primary" size="lg" className='me-3'>Save Details</Button>

                                    <Button size='lg'>Cancel</Button>
                                    </ButtonToolbar>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
