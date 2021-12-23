import React from 'react';
import Sidenav from '../sidenav/Sidenav';
import Topbar from '../topbar/Topbar';

import Routes from '../Routes';
import { BrowserRouter, Route } from 'react-router-dom';

export default function Layout() {
   
    return (
        <BrowserRouter>
            <Route render = {(props) => (
                <div className = "d-flex appWarpper" id="wrapper">
                    <Sidenav {...props}/>
                    <div className="rightSideContent">
                        <Topbar />
                        <main>
                            <Routes/>
                        </main>
                    </div>
                </div>
            )}/>
        
        </BrowserRouter>
    )
}
