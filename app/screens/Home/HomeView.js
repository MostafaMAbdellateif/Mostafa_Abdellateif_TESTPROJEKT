import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Octicons from 'react-native-vector-icons/dist/Octicons';

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    navigateHandler = () => {
        this.props.navigation.navigate("Apartment")
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <Octicons
                name="home"
                size={20}
                />
                <TouchableOpacity onPress={this.navigateHandler}>
                    <Text>Apartments</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeView;
