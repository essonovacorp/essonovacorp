import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function AgentActivity({agentData, title}) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            
                <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <h3 className="mb-0">{title}</h3>
                        <p><CheckIcon className="text-success"/> Last Activity: <strong>Agent1</strong> added new sale entry</p>
                    </div>
                    <div className="col-sm-6 pr-0">
                    <div className="text-right">
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
                </div>
                <div className="table-responsive">
                    <table class="table">
                        <thead className="bg-light">
                            <tr>
                                <th width="200">Agent Name</th>
                                <th className="text-center">Type</th>
                                <th className="text-center">Amount(in $)</th>
                                <th className="text-center">Commission(in $)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agentData.map((row) => (
                                <tr
                                    key={row.name}
                                >
                                    <td component="th" scope="row" className="d-flex align-items-center" >
                                        <img src={row.agentImage} alt={row.name} className="agentImage"/>
                                        {row.name}
                                    </td>
                                    <td align="center">{row.type}</td>
                                    <td align="center">${row.amount}</td>
                                    <td align="center">${row.commission}</td>
                                </tr>
                            ))}
                            

                        </tbody>
                    </table>

                </div>
            
        </>
    )
}

export default AgentActivity
