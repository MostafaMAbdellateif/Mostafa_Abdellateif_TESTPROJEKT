/*
 * Reducer actions related with App
 */
import * as types from './types';

export function requestAction(payload) {
    
    return {
        type: types.REQUEST_ACTION,
        payload
    };
}


export function saveResponseGeneral(payload,response) {
    
    return {
        type: types.SAVE_GENERAL_REDUCER,
        payload,
        response
    };
}

export function saveResponsePresist(payload,response) {
    
    return {
        type: types.SAVE_PRESIST_REDUCER,
        payload,
        response
    };
}


export function clearPresist() {
    
    return {
        type: types.CLEAR_PRESIST_REDUCER,
    };
}



//Loaders Actions

export function enableLoader(apiType) {
    return {
        type: types.ENABLE_LOADER,
        apiType
    };
}

export function disableLoader(apiType) {
    return {
        type: types.DISABLE_LOADER,
        apiType
    };
}

