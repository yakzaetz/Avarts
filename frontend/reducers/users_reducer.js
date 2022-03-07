import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ACTIVITIES } from "../actions/activity_actions";

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_USERS:
        case RECEIVE_ACTIVITIES:
            return action.users
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser
        return nextState
        default:
            return oldState;
    }
}

export default UsersReducer