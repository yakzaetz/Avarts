import {RECEIVE_ACTIVITY, RECEIVE_ACTIVITIES, REMOVE_ACTIVITY} from "../actions/activity_actions"

const activitiesReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    // debugger
    switch (action.type) {
        case RECEIVE_ACTIVITIES:
            return action.activities;
        case RECEIVE_ACTIVITY:
            nextState[action.activity.id] = action.activity;
            return nextState;
        case REMOVE_ACTIVITY:
            delete nextState[action.activityId]
            return nextState;
        default:
            return oldState;
    }
}

export default activitiesReducer