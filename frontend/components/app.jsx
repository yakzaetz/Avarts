import { Switch } from "react-router-dom";
import React from "react";
import AuthHeader from "./auth/auth_header";
import Login from "./auth/login";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import DashHeader from "./dashboard/dashboard_header"
import Dashboard from "./dashboard/dashboard_index";
import Signup from "./auth/signup";
import Splash from "./auth/splash";
import UserIndex from "./activity/user_activity_index"
import ActivityShow from "./activity/activity_show";
import CreateActivityForm from "./activity/create_activity_form"


const App = () => (
    <div>
        <header>
            <AuthHeader/>
            <DashHeader/>
        </header>
        <Switch>
            <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
            <ProtectedRoute exact path='/activities/new' component={CreateActivityForm}/>
            <ProtectedRoute exact path='/activities/:activityId' component={ActivityShow}/>
            <ProtectedRoute exact path='/activities' component={UserIndex}/>
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/signup" component={Signup} />
            <AuthRoute exact path="/" component={Splash} />
        </Switch>
        {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        {/* <Login/> */}
    </div>
)

export default App;