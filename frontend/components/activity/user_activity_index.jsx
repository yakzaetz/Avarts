// create function to return only specific user activities sorted by date 
// sort fetchActivities (all users activities) 
import React from "react";
import { connect } from "react-redux";
import { fetchActivities, deleteActivity } from "../../actions/activity_actions";
import { Link } from 'react-router-dom'
import UserActivityIndexItem from "./user_activity_index_item";

class UserIndex extends React.Component{
    componentDidMount() {
        this.props.fetchActivities({currentId: this.props.currentUserId});
    }

    render() {
        return (
            <div className="UIndex">
                <div className="h1-table">
                    <h1 className="UIHeader">My Activities</h1>
                    <p className="activity-count">{`${this.props.activities.length} Activities`}</p>
                    <table className="index-table">
                        <thead>
                            <tr>
                                <th>Sport</th>
                                <th>Date</th>
                                <th>Title</th>
                                <th>Time</th>
                                <th>Distance</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.activities.map(activity => <UserActivityIndexItem activity={activity} deleteActivity={this.props.deleteActivity} key={activity.id}/>)
                            }
                        </tbody>
                    {/* <Link to={"/activities/new"}>New Activity</Link> */}
                    </table>
                </div>
            </div>
        )
    }
}

const mSTP = state => ({
    currentUserId: state.session.id,
    activities: Object.values(state.entities.activities)
})

const mDTP = dispatch => ({
    fetchActivities: id => dispatch(fetchActivities(id)),
    deleteActivity: id => dispatch(deleteActivity(id))
})

export default connect(mSTP, mDTP)(UserIndex)