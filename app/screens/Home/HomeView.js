import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Octicons from 'react-native-vector-icons/dist/Octicons';
import { Search } from '../../components';

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    navigateHandler = () => {
        this.props.navigation.navigate("Apartment")
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Search />
                </View>
                {/* <Text>Home</Text>
                <Octicons
                name="home"
                size={20}
                />
                <TouchableOpacity onPress={this.navigateHandler}>
                    <Text>Apartments</Text>
                </TouchableOpacity> */}
            </SafeAreaView>
        );
    }
}

export default HomeView;
