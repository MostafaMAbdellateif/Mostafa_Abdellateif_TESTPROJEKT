/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
// import { ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from './navigation';
import configureStore from './store/configureStore';
const { persistor, store } = configureStore();

export default class Entrypoint extends Component {
    render() {
        return (
            <Provider store={store}>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
                <PersistGate loading={null} persistor={persistor} >
                    <SafeAreaProvider>
                        <Navigator />
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        );
    }
}
