import React, { useState } from 'react';
import {Input, SelectPicker, InputGroup, MaskedInput, DatePicker } from 'rsuite';
import {selectData } from '../../DummyData';

export default function AgentDetails() {
    const styles = { width: '100%', display: 'block', marginBottom: 10 };
    const [value, setValue] = React.useState(null);

    return (
        <div>
            <form class="form-group">
                <div className="row">
                    <div className="col-md-7">
                        <div className="mb-4 pe-3">
                            <label for="agentDetailsName" className="form-label">Name<sup className='text-danger'>*</sup></label>
                            <SelectPicker size="lg" value={value} onChange={setValue}  placement="autoVerticalStart"  data={selectData} style={styles} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="mb-4 pe-3">
                            <label for="phone" className="form-label">Phone<sup className='text-danger'>*</sup></label>
                            <Input size="lg" placeholder="XXX XXX XXX" id="phone" />

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="mb-4 pe-3">
                            <label for="fax" className="form-label">Fax<sup className='text-danger'>*</sup></label>
                            <Input size="lg" placeholder="XXX XXX XXX" id="fax" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="mb-4 pe-3">
                            <label for="streetName" className="form-label">Street Name</label>
                            <Input size="lg" placeholder="" id="streetName" disabled />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="mb-4 pe-3">
                            <label for="city" className="form-label">City {'&'} State</label>
                            <Input size="lg" placeholder="" id="city" disabled />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <div className="mb-4 pe-3">
                            <label for="Zipcode" className="form-label">Zipcode</label>
                            <Input size="lg" placeholder="" id="Zipcode" disabled />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
