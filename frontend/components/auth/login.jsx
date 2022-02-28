import React from "react";
import { login } from "../../actions/session_actions";
import { connect } from "react-redux";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {email: '', password: ''}
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return(e) => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <label>
                        Password
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(null, mDTP)(Login);