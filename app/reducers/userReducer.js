/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    profile:{}
};

export const userReducer = createReducer(initialState, {
    //Save data
    // [types.SAVE_PRESIST_REDUCER](state,action) {
    //     return { 
    //         ...state, 
    //         data:{
    //             ...state.data,
    //             [action.payload.reducerVariable]:action.response} 
    //         };
    // },
});
