import barndLogo from "../../assets/images/sidenavicon/brand-logo.svg";
import { Link, NavLink  } from "react-router-dom";
export default function Sidenav() {
    return (
        <div className="sidenav">
           <div className="barndLogo">
                <Link to="/">
                   <img src={barndLogo}/>
                   <h3 className="text-uppercase fs-15 font-weight-bold">Grandark <br/>realty</h3>
                </Link>
           </div>
           <div className="sidenaveLinks">
               <ul className="list-unstyled">
                   <li>
                       <NavLink activeClassName={"active"} exact={true} to="/" className="nav_icon nav_dashboard">
                           Dashboard
                       </NavLink>
                   </li>
                   <li >
                       <NavLink   activeClassName={"active"} to="/agents" className="nav_icon nav_agents">
                           Agents
                       </NavLink>
                   </li>
                   <li>
                       <NavLink   activeClassName={"active"} to="/sales" className="nav_icon nav_sales">
                           Sales
                       </NavLink>
                   </li>
                   <li>
                   <NavLink   activeClassName={"active"} to="/rent"  className="nav_icon nav_sales">
                           Rent
                           </NavLink>
                   </li>
                   <li>
                       <NavLink   activeClassName={"active"} to="/commission" className="nav_icon nav_commission">
                        Commission
                       </NavLink>
                   </li>
                   <li>
                   <NavLink   activeClassName={"active"} to="/sale-summary" className="nav_icon nav_sales_summary">
                       SALE SUMMARY
                       </NavLink>
                   </li>
                   <li>
                        <NavLink activeClassName={"active"} to="/rent-summary" className="nav_icon nav_sales_summary">
                       RENT SUMMARY
                       </NavLink>
                   </li>
                   <li>
                         <NavLink activeClassName={"active"} to="/plan"  className="nav_icon nav_your_plan">
                       YOUR PLAN
                       </NavLink>
                   </li>
               </ul>
           </div>
        </div>
    )
}
