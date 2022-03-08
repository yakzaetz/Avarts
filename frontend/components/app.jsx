import React from "react";
import AuthHeader from "./auth/auth_header";
import Login from "./auth/login";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import DashHeader from "./dashboard/dashboard_header"
import Dashboard from "./dashboard/dashboard_index";
import Signup from "./auth/signup";
import Splash from "./auth/splash";
import UserIndex from "./activity/user_activity_index"
// import 


const App = () => (
    <div>
        <header>
            <AuthHeader/>
            <DashHeader/>
        </header>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/signup" component={Signup} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
        <ProtectedRoute exact path='/activities' component={UserIndex}/>
        {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        {/* <Login/> */}
    </div>
)

export default App;