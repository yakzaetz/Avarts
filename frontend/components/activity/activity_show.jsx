import React from "react";
import { connect } from "react-redux";
import { deleteActivity, fetchActivity } from "../../actions/activity_actions";
import { withRouter } from "react-router-dom";

class ActivityShow extends React.Component {

    componentDidMount(){
        this.props.fetchActivity(this.props.match.params.activityId)
    }
    

    render(){
        if (!this.props.activity) return null;

        const calcPace = (h, m, d) => {
            m = (h * 60) + m;
            const pace = m / d;
            return pace.toFixed(2);
        }

        return (
            <div className="page">
                <div className="item-show">
                    <div className="header-of-show">
                        {this.props.users[this.props.activity.user_id].name}-{this.props.activity.activity_type}
                    </div>
                    <div className="body-of-show">
                        <div className="left-side-show">
                            <div id="top-left-show">
                                <div id="show-img">
                                    <div></div>
                                </div>
                                <div id="top-left-info">
                                    <div>{this.props.activity.date}</div>
                                    <div>{this.props.activity.title}</div>
                                </div>
                            </div>
                            <div id="bottom-left-show"></div> 
                        </div>
                        <div className="right-side-show">
                            <div id="top-right-show">
                                <div>{this.props.activity.distance}
                                <p>Distance</p>
                                </div>
                                <div>{`${this.props.activity.hours}:${this.props.activity.minutes}`}
                                <p>Duration</p>
                                </div>
                                <div>{`${calcPace(this.props.activity.hours, this.props.activity.minutes, this.props.activity.distance)}/mi`}
                                <p>Pace</p>
                                </div>
                            </div>
                            <div id="bottom-right-show"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    activity: state.entities.activities[ownProps.match.params.activityId],
    users: state.entities.users
})

const mDTP = dispatch => ({
    fetchActivity: id => dispatch(fetchActivity(id)),
    deleteActivity: activityId => dispatch(deleteActivity(activityId))
})

export default withRouter(connect(mSTP, mDTP)(ActivityShow))