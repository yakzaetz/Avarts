// create function to return only specific user activities sorted by date 
// sort fetchActivities (all users activities) 
import React from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../../actions/activity_actions";
import { Link } from 'react-router-dom'
import DashIndexItem from "./dashboard_index_item";

class UserIndex extends React.Component {
    componentDidMount() {
        this.props.fetchActivities();
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.activities.map(activity => <DashIndexItem activity={activity} deleteActivity={this.props.deleteActivity} key={activity.id} />)
                    }
                    {/* <Link to={"/activities/new"}>New Activity</Link> */}
                </ul>
            </div>
        )
    }
}

const mSTP = state => ({
    activities: Object.values(state.entities.activities)
})

const mDTP = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities()),
    deleteActivity: id => dispatch(deleteActivity(id))
})

export default connect(mSTP, mDTP)(UserIndex)