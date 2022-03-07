// create function to return only specific user activities sorted by date 
// sort fetchActivities (all users activities) 
import React from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../../actions/activity_actions";
import { Link } from 'react-router-dom'
import ActivityIndexItem from "./activity_index_item";

class UserIndex extends React.Component{
    componentDidMount() {
        this.props.fetchActivities({currentId: this.props.currentUserId});
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.activities.map(activity => <ActivityIndexItem activity={activity} deleteActivity={this.props.deleteActivity} key={activity.id}/>)
                    }
                </ul>
                <Link to={"/activities/new"}>New Activity</Link>
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