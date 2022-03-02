import React from "react";
import { login } from "../../actions/session_actions";
import { connect } from "react-redux";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {email: '', password: ''}
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loginDemoUser = this.loginDemoUser.bind(this)
    }

    update(field){
        return(e) => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state)
    }

    loginDemoUser(e){
        e.preventDefault();
        this.props.login({
            'email': 'eric@eric.com',
            'password': '123123'
        })
    }

    render(){
        return(
            <div className="container">
                <div className="background-img">
                    <img src={window.login_componentURL}/>
                </div>
                <div className="form-and-stuff">
                    <div id="top-of-form">
                        <h1>Log In</h1>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="bottom-of-form">
                            <div id="demo-user">
                                <button type="submit" onClick={this.loginDemoUser}>Demo</button>
                            </div>
                            <div id="p-tag">
                                <p>or log in with email</p>
                            </div>
                            <div id="email-input">
                                <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email"/>
                            </div>
                            <div id="password-input">
                                <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password"/>
                            </div>
                            <div id="submit-button">
                                <button type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(null, mDTP)(Login);