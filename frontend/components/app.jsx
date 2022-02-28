import React from "react";
import AuthHeader from "./auth/auth_header";
import Login from "./auth/login";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import DashHeader from "./dashboard_header";
import Signup from "./auth/signup";


const App = () => (
    <div>
        <header>
            <AuthHeader/>
        </header>
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/signup" component={Signup} />
        <ProtectedRoute exact path='/dashboard' component={DashHeader}/>
        {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        {/* <Login/> */}
    </div>
)

export default App;