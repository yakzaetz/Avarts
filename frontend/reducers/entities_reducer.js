import { combineReducers } from "redux";
import activitiesReducer from "./activities_reducer";
import UsersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    activities: activitiesReducer
})

export default EntitiesReducer;