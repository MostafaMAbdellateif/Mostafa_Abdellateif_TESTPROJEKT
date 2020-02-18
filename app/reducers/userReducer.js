/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    profile: {
        "picture": "https://www.winchcombe.co.uk/wp-content/uploads/2017/04/male-silhouette.png",
        "Name": "Mostafa",
        "Location": "Egypt",
        "E-mail": "mostafaamohammeddd@gmail.com",
        "contactDetails": false,
        "enableLocation": true
    }
};

export const userReducer = createReducer(initialState, {
    // update profile data
    [types.UPDATE_PROFILE](state, action) {
        return {
            ...state,
            profile: { ...state.profile, ...action.newData }
        };
    }
});
