import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class ApartmentView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Apartment</Text>
            </View>
        );
    }
}

export default ApartmentView;
