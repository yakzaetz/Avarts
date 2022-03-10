import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import {Link, withRouter} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"



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
                    <div className="left-side-of-header">
                        <Link to={`/dashboard`}><h2>AVARTS</h2></Link>
                        <div className="header-links">
                            <Link to={`/dashboard`} id="left-side-of-header-items">Dashboard</Link>
                            <Link to={`/activities`} id="left-side-of-header-items">My Activities</Link>
                        </div>
                    </div>
                    <div className="right-side-of-header">
                        <button onClick={this.handleLogout}>Logout</button>
                        <Link to={`/activities/new`}><div><FontAwesomeIcon id="icon" icon={faCirclePlus}/></div></Link>
                    </div>
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