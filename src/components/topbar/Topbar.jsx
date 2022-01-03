import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from 'react-router-dom';
import agent from "../../assets/images/topbar-agent/agent.svg";

export default function Topbar() {
   
    return (
        <div className="topbar">
           <div className="row align-items-center">
               <div className="col-md-6">
                   <div className="page-title text-center text-md-start">
                    <span>Agent Name</span>
                   </div>
               </div>
               <div className="col-md-6">
                   <div className="topbarUserLogin d-flex justify-content-end">
                   <div className="media userProfileTop">
                    <img src={agent} className="align-self-center mr-3" alt="..."/>
                    <div className="media-body">
                        <div className="userProfile">
                            <div className="profileTop d-flex align-items-center">
                                <div className="profileDetails">
                                    <h5 className="my-0">Rowena Ravenclaw</h5>
                                    <small>Super Administrator</small>
                                </div>
                                <div className="profileDropdown">
                                    <KeyboardArrowDownIcon />
                                </div>
                            </div>
                            <div className="userProfileAction">
                                <ul className="list-unstyled">
                                    <li>
                                        <NavLink   activeClassName={"active"} to="/profile" className="profileLink">
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li >
                                        <a href="#" className="changePasswordLink">
                                        Change Password
                                        </a>
                                    </li>
                                    <li >
                                        <a href="#" className="logoutLink">
                                        Logout
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    </div>
                   </div>
               </div>
           </div>
        </div>
    )
}
