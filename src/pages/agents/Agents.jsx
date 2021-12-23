import * as React from 'react';
import {Breadcrumbs, Typography, Link, Stack} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CreateAgentForm from '../../components/createAgent/CreateAgentForm';
import AllagentTableList from '../../components/allAgentTableList/AllagentTableList';
import { agentTable } from "../../DummyData"


const Agents = () => {
    
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
          All Agents
        </Typography>,
      ];
          
    return (
        <>
            <div className="allAgentsContatiner">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-9">
                            <Stack spacing={1}>
                                <Breadcrumbs  separator={<NavigateNextIcon fontSize="small" />}  aria-label="breadcrumb">
                                    {breadcrumbs}
                                </Breadcrumbs>
                            </Stack>
                        </div>
                        <div className="col-sm-3 text-right">
                            <CreateAgentForm/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                       
                        <AllagentTableList agentTable={agentTable} title="Agents Activity"/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Agents
