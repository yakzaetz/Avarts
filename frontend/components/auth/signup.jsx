import React from "react";
import { signup } from "../../actions/session_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { email: '', password: '', name: '', gender: '', location: '', bithday: '', weight: '' }
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
    }

    render() {
        return (
            <div className="signup-container">
                <div className="background-img">
                    <img src={window.signup_componentURL} />
                <div/>
                <div className="signup-form-and-stuff">
                    <div id="signup-top-of-form">
                        <h1>Join Avarts today, it's Free.</h1>
                    </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="singup-bottom-of-form">
                                <div id="email-input">
                                        <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email"/>
                                </div>
                                <div id="password-input">
                                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password"/>
                                </div>
                                <div id="name-input">
                                        <input type="text" value={this.state.name} onChange={this.update('name')} placeholder="Name"/>
                                </div>
                                <div id="gender-input">
                                    <label id="gender-label">Gender
                                        <select id="gender">
                                            <option value='Male'>Male</option>
                                            <option value='Female'>Female</option>
                                        </select>
                                    </label>
                                </div>
                                <div id="location-input">
                                        <input type="text" value={this.state.location} onChange={this.update('location')} placeholder="Location"/>
                                </div>
                                <div id="birthday-input">
                                    <input type="date" value={this.state.date} onChange={this.update('date')} />
                                </div>
                                <div id="weight-input">
                                        <input type="number" value={this.state.weight} onChange={this.update('weight')} placeholder="weight"/>
                                </div>
                                <div id="submit-button">
                                    <button type="submit">Signup</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(null, mDTP)(Signup);