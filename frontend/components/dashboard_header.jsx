import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/session_actions";


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
        return (
            <div className="header">
                <h3>AVARTS</h3>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mDTP)(DashHeader);