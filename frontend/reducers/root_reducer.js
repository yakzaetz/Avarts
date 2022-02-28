import { combineReducers } from "redux";
import EntitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import sessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    // ui: uiReducer,
    session: sessionReducer,
    errors: errorsReducer
})

export default RootReducer;