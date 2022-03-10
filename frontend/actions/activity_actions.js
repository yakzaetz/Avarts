import * as ActivityAPIUtil from '../util/activity_util'

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES"
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY"
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY"

const receiveActivities = (activities, users) => ({
    type: RECEIVE_ACTIVITIES,
    activities, 
    users
})

const receiveActivity = (activity, user) => ({
    type: RECEIVE_ACTIVITY,
    activity,
    user
})

const removeActivity = activityId => ({
    type: REMOVE_ACTIVITY,
    activityId
})

export const fetchActivities = data => dispatch => (
    ActivityAPIUtil.fetchActivities(data)
        .then(({activities, users}) => dispatch(receiveActivities(activities, users)))
)

export const fetchActivity = (activityId) => dispatch => (
    ActivityAPIUtil.fetchActivity(activityId)
        .then(({activity, user}) => dispatch(receiveActivity(activity, user)))
)

export const createActivity = activity => dispatch => (
    ActivityAPIUtil.createActivity(activity)
        .then(({activity, user}) => dispatch(receiveActivity(activity, user)))
)

export const updateActivity = activity => dispatch => (
    ActivityAPIUtil.updateActivity(activity)
        .then(({activity, user}) => dispatch(receiveActivity(activity, user)))
)

export const deleteActivity = (activityId) => dispatch => (
    ActivityAPIUtil.deleteActivity(activityId)
        .then(() => dispatch(removeActivity(activityId)))
)