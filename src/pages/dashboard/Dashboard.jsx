import AgentActivity from "../../components/dashboardAgentActivity/AgentActivity"
import Dashboardchart from "../../components/DashboardChart/Dashboardchart"
import Feacherinfo from "../../components/feacherinfo/Feacherinfo"
import { saleData , agentData} from "../../DummyData"
const Dashboard = () => {
    return (
        <>
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
