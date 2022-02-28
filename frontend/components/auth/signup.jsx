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
            <div className="outer-div">
                <div className="form-div">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Join Strava today, it's Free.</h1>
                        <label>
                            Email
                            <input type="text" value={this.state.email} onChange={this.update('email')} />
                        </label>
                        <label>
                            Password
                            <input type="password" value={this.state.password} onChange={this.update('password')} />
                        </label>
                        <label>
                            Name
                            <input type="text" value={this.state.name} onChange={this.update('name')} />
                        </label>
                        <label>
                            Gender
                            <select id="gender">
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                        </label>
                        <label>
                            Location
                            <input type="text" value={this.state.location} onChange={this.update('location')} />
                        </label>
                        <label>
                            Birthday
                            <input type="date" value={this.state.date} onChange={this.update('date')} />
                        </label>
                        <label>
                            Weight
                            <input type="number" value={this.state.weight} onChange={this.update('weight')} />
                        </label>
                        <button type="submit">Signup</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(null, mDTP)(Signup);