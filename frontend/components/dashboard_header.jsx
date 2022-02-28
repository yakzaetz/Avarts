import React from "react";


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
                <Link to='/login' className="login">Login</Link>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

export default DashHeader;