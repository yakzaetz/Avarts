// create function to return only specific user activities sorted by date 
// sort fetchActivities (all users activities) 
import React from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../../actions/activity_actions";
import { fetchUsers } from "../../actions/user_actions"
// import { Link } from 'react-router-dom'
import DashIndexItem from "./dashboard_index_item";

class Dashboard extends React.Component {
    
    componentDidMount() {
        this.props.fetchActivities();
        this.props.fetchUsers();
    }

    render() {
        return (
            <div className="whole-dashboard">
                <div className="three-columns">
                    <div className="left-column">

                    </div>
                    <div className="dash-index-items">
                        <ul>
                            {
                                this.props.activities.map(activity => 
                                <DashIndexItem activity={activity} 
                                    deleteActivity={this.props.deleteActivity}
                                    users={this.props.users} 
                                    key={activity.id} />)
                            }
                        </ul>
                    </div>
                    <div className="right-column">

                    </div>
                </div>
            </div>
        )
    }
}

const mSTP = state => ({
    activities: Object.values(state.entities.activities),
    users: state.entities.users
})

const mDTP = dispatch => ({
    fetchActivities: () => dispatch(fetchActivities()),
    fetchUsers: () => dispatch(fetchUsers()),
    deleteActivity: id => dispatch(deleteActivity(id))
})

export default connect(mSTP, mDTP)(Dashboard)