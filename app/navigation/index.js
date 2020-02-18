import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App from "./NavigationStack";

class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <App />
            </NavigationContainer>
        );
    }
}

export default AppNavigator;
