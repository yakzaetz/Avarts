import React from "react";
import { createActivity } from "../../actions/activity_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


class CreateActivityForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user_id: this.props.currentUserId, 
            activity_type: 'Run',
            date: Date.new,
            hours: 0,
            minutes: 0,
            seconds: 0,
            distance: 0,
            title: "",
            description: "",
            time: ""
        }

        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createActivity(this.state).then(response => {
            const id = response.activity.id; 
            this.props.history.push(`/activities/${id}`)
        })
    }

    render(){
        // debugger
        return(
            <div className="new-activity-container">
                <div className="new-activity-form">
                    <form onSubmit={this.handleSubmit}>
                        <div><h1>Manual Entry</h1></div>
                        <div className="top-of-create-form">
                            <div id="create-distance">
                                <p>Distance</p>
                                <input type="number" onChange={this.update('distance')}/> miles
                            </div>
                            <div id="create-duration">
                                <p>Duration</p>
                                <input type="number" placeholder="hr" onChange={this.update('hours')}/>
                                <input type="number" placeholder="min" onChange={this.update('minutes')}/>
                                <input type="number" placeholder="s" onChange={this.update('seconds')}/>
                            </div>
                        </div>
                        <div className="middle-of-create-form">
                            <div id="sport">
                                <p>Sport</p>
                                <select onSelect={this.update('activity_type')}>
                                    <option value="">Run</option>
                                    <option value="">Bike</option>
                                    <option value="">Walk</option>
                                </select>
                            </div>
                            <div className="date-and-time">
                                <div id="date">
                                    <p>Date & Time</p>
                                    <input type="date" onChange={this.update('date')} />
                                </div>
                                <div id="time">
                                    <p>Time</p>
                                    <input type="time" onChange={this.update('time')}/>
                                </div>
                            </div>
                            <div id="title">
                                <input type="text" placeholder="Afternoon run" onChange={this.update('title')}/>
                            </div>
                        </div>
                        <button type="submit">Create Activity</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mSTP = state => ({
    currentUserId: state.session.id,
})

const mDTP = dispatch => ({
    createActivity: activity => dispatch(createActivity(activity))
})

export default withRouter(connect(mSTP, mDTP)(CreateActivityForm))