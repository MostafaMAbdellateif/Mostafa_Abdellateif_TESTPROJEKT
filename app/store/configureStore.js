import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import rootReducers from '../reducers'; // where reducers is a object of reducers

const config = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userReducer'],
    debug: true //to get useful logging
};

const middleware = [];
if (__DEV__) {
    middleware.push(createLogger()); // to print the reducer state only in debug
}

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig);
const configureStore = () => {
    return { persistor, store };
};

export default configureStore;
