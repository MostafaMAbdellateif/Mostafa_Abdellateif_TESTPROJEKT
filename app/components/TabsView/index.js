import * as React from 'react';
import { View, Text } from 'react-native';
import { TabView, SceneMap, TabBar, ScrollPager } from 'react-native-tab-view';
import AppStyles from '../../config/styles';
import styles from './styles';

const CustomTabBar = (props) => {
    return (
        <TabBar
            {...props}
            style={styles.tabBar}
            indicatorStyle={styles.tabBarUnderLine}
            activeColor={AppStyles.color.COLOR_PRIMARY}
            inactiveColor={AppStyles.color.COLOR_BLUE_INACTIVE}
            pressColor={AppStyles.color.COLOR_GREY_WHITE}
            renderLabel={({ route, focused, color }) => (
                <Text style={[styles.tabBarTitle, { color }]}>
                    {route.title}
                </Text>
            )}
        />
    )
}

export function TabSwiper(props) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState(props.routes);
    const renderScene = SceneMap({
        first: props.FirstRoute,
        second: props.SecondRoute,
        third: props.ThirdRoute,
        fourth: props.FourthRoute,
    });

    return (
        <TabView
            renderTabBar={CustomTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
        />
    );
}