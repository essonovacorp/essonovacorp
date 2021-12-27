import AgentActivity from "../../components/dashboardAgentActivity/AgentActivity"
import Dashboardchart from "../../components/dashboardChart/Dashboardchart"
import Feacherinfo from "../../components/feacherInfo/Feacherinfo";
import dashboardIcon from '../../assets/images/sidenavicon/dashboard_blue.svg';
import { saleData , agentData} from "../../DummyData"
const Dashboard = () => {
    return (
        <>
                      
                <div className="pageTitle">
                    <span className="pageHeading">Dashboard</span>
                </div>
                <div className="freacherInfoConterner">
                    <Feacherinfo/>                
                </div>
                <div className="dashboardCantainer" >
                    <Dashboardchart data={saleData} title="Gross Sales" dataKey={'Sales','Rent'}/>
                </div>
                <div className="agentActivity">
                    <AgentActivity agentData={agentData} title="Agents Activity"/>
                </div>
            

        </>
    )
}

export default Dashboard
