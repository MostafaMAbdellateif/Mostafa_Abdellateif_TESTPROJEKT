/*
 * Reducer actions related with App
 */
import * as types from './types';

export function updateProfile(newData) {
    return {
        type: types.UPDATE_PROFILE,
        newData
    };
}