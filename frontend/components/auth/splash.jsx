import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";
import { connect } from "react-redux";

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: '', password: '' }
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loginDemoUser = this.loginDemoUser.bind(this)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
    }

    loginDemoUser(e) {
        e.preventDefault();
        this.props.login({
            'email': 'eric@eric.com',
            'password': '123123'
        })
    }

    render() {
        return (
            <div className="splash-container">
                <div className="splash-form-and-stuff">
                    <div className="top-of-form-and-stuff">
                        <h1>The Best App!!</h1>
                    </div>
                    <div className="img-and-form">
                        <div className="splash-background-img">
                            <img src={window.splash_componentURL} />
                        </div>
                        <div className="bottom-right">
                            <div className="buttons">
                                <div id="demo-user">
                                    <button type="submit" onClick={this.loginDemoUser}>Demo</button>
                                </div>
                                <div id="splash-signup">
                                    <button><Link to='/signup' className="signup">Signup</Link></button>
                                </div>
                                <div id="splash-login">
                                    <button><Link to='/login' className="login">Login</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(null, mDTP)(Splash);