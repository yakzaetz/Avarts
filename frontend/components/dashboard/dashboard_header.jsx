import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import {Link, withRouter} from "react-router-dom"



class DashHeader extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const wantedPaths = ['/', '/signup', '/login']
        if (!wantedPaths.includes(this.props.location.pathname)){
            return (
                <div className="header">
                    <h3>AVARTS</h3>
                    <Link to={`/dashboard`}>Dashboard</Link>
                    <Link to={`/activities`}>My Activities</Link>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            )
        }else{
            return null;
        }
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(null, mDTP)(DashHeader));