import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions"
import { connect } from "react-redux"


class AuthHeader extends React.Component{
    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render(){
        return(
            <div className="header">
                <Link to='/' className="logo"><h3>AVARTS</h3></Link>
                <Link to='/login' className="login">Login</Link>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )}
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mDTP)(AuthHeader);