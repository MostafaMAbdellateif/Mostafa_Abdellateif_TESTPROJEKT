import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Search, ApartmentItem, TabSwiper } from '../../components';
import { calcHeight } from '../../config/metrics';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [
                { key: 'first', title: 'Near Me' },
                { key: 'second', title: 'Explore city' },
                { key: 'third', title: 'Popular' },
                { key: 'fourth', title: 'View Map' },
            ]
        }
    }

    FirstRoute = () => (
        <KeyboardAwareScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={styles.scene}
            contentContainerStyle={styles.sceneContent}>
            <Text
                style={styles.label}>
                {"1 BHK Flats, Apartments near you"}
            </Text>
            <View style={styles.list}>
                <FlatList
                    contentContainerStyle={styles.listContent}
                    data={this.props.Apartments}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>

            <Text
                style={[styles.label, { marginTop: calcHeight(15) }]}>
                {"2 BHK Flats, Apartments near you"}
            </Text>
            <View style={styles.list}>
                <FlatList
                    contentContainerStyle={styles.listContent}
                    data={this.props.Apartments}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        </KeyboardAwareScrollView>

    );

    keyExtractor = item => item.id.toString()

    renderItem = ({ item, index }) => {
        return (
            <ApartmentItem
                item={item}
                onClick={this.navigateHandler}
            />
        )
    }

    navigateHandler = (item) => {
        this.props.navigation.navigate("Apartment", { item })
    }

    EmptyRoute = () => (
        <View style={styles.scene} />
    );

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Search />
                </View>

                <View style={styles.content}>
                    <TabSwiper
                        routes={this.state.routes}
                        FirstRoute={this.FirstRoute}
                        SecondRoute={this.EmptyRoute}
                        ThirdRoute={this.EmptyRoute}
                        FourthRoute={this.EmptyRoute}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default HomeView;
