/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    Apartments: [],
};

export const homeReducer = createReducer(initialState, {
    //Loaders
    [types.ENABLE_LOADER](state,action) {
        return { 
            ...state, 
            Loading:{...state.Loading,[action.apiType]:true} 
        };
    },
});
