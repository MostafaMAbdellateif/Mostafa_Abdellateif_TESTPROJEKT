//General
export type ActionTypes =
    "REQUEST_ACTION" |
    "ENABLE_LOADER" | 
    "DISABLE_LOADER" |
    "LOGIN_REQUEST" |
    "SAVE_GENERAL_REDUCER" |
    "SAVE_PRESIST_REDUCER" |
    "CLEAR_PRESIST_REDUCER"
   

    

//request General Saga
export const REQUEST_ACTION = "REQUEST_ACTION"

//Save General Reducer
export const SAVE_GENERAL_REDUCER = 'SAVE_GENERAL_REDUCER';

//Save Presist Reducer
export const SAVE_PRESIST_REDUCER = 'SAVE_PRESIST_REDUCER';
//Clear Presist Reducer
export const CLEAR_PRESIST_REDUCER ="CLEAR_PRESIST_REDUCER";

//loaders
export const ENABLE_LOADER = 'ENABLE_LOADER';
export const DISABLE_LOADER = 'DISABLE_LOADER';

//login
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
