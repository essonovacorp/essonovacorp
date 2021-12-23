import React from 'react';
import { AreaChart, Legend, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function Dashboardchart({ data, title, dataKey }) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <h3 className="chartTitle mb-0">
                        $855.8K </h3>
                    <h6>
                        <samll>{title}</samll>
                    </h6>
                </div>
                <div className="col-6">
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

            <div className="row">
                <div className="col">
                    <div className="chartContainer">
                        <ResponsiveContainer width="100%">
                            <AreaChart width="100%" height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3A57E8" stopOpacity={0.6} />
                                        <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#369BFF" stopOpacity={0.6} />
                                        <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid stroke="#e1e1e1" strokeDasharray="5 5" />
                                <Tooltip />
                                <Legend verticalAlign="top" height={50} iconType="circle" iconSize="10" align="right" />
                                <Area type="monotone" dataKey="Sales" stroke="#3A57E8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="Rent" stroke="#369BFF" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                            {/* <AreaChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
                        <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" height={40} align="center" iconSize="10" iconType="circle" />
                        <Line type="monotone" dataKey="Sales" stroke="#3A57E8" activeDot={{ r: 6 }} />
                        <Line type="monotone" dataKey="Rent" stroke="#85F4FA" activeDot={{ r: 6 }} />
                    </AreaChart> */}
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Dashboardchart
