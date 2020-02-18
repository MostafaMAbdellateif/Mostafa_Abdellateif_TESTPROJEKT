import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class SettingsView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Mostafa Abdellateif</Text>
            </View>
        );
    }
}

export default SettingsView;
