/* 
 * combines all th existing reducers
 */
import * as userReducer from './userReducer';
import * as homeReducer from './homeReducer';
export default Object.assign(userReducer, homeReducer);
