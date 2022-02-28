import React from "react";
import AuthHeader from "./auth/auth_header";
import Login from "./auth/login";
import { AuthRoute } from "../util/route_util"; 

const App = () => (
    <div>
        <header>
            <AuthHeader/>
        </header>
        <AuthRoute exact path="/login" component={Login} />
        {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        {/* <Login/> */}
    </div>
)

export default App;