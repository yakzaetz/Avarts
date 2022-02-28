import * as UserAPIUtil from '../util/user_util'
import { receiveCurrentUser } from './session_actions'

export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'
export const RESET_USER_ERRORS = 'RESET_USER_ERRORS'

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const resetUserErrors = () => ({
    type: RESET_USER_ERRORS
})

export const updateUser = user => dispatch => (
    UserAPIUtil.updateUser(user)
        .then(updatedUser => dispatch(receiveCurrentUser(updatedUser)), (errors => dispatch(receiveUserErrors(errors.responseJSON))))
)

export const fetchUser = userId => dispatch => (
    UserAPIUtil.fetchUser(userId)
        .then(fetchedUser => dispatch(receiveUser(fetchedUser)), (errors => dispatch(receiveUserErrors(errors.responseJSON))))
)

export const fetchUsers = () => dispatch => (
    UserAPIUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
)