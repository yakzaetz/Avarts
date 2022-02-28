import { applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "../reducers/root_reducer";
import thunk from 'redux-thunk'
import { createStore } from "redux";


const configureStore = (preloadedState = {}) => (
    createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
)

export default configureStore;