/* eslint-disable consistent-return */
import React, { Component } from 'react';
import {
    View,
    Animated,
    Easing,
} from 'react-native';
import styles, { itemWidth } from './styles';
import FooterItem from './FooterItem';
import { DeiceWidthPercentToNumber } from '../../utils/stringUtils';

class FooterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            underlinePosition: new Animated.Value(0),
        };
    }

    onTabPress = (ScreenName) => {
        const { navigation } = this.props
        navigation.navigate(ScreenName);
    }

    animateUnderLine = (val) => {
        Animated.timing(this.state.underlinePosition, {
            useNativeDriver: true,
            toValue: val,
            duration: 350,
            easing: Easing.elastic()
        }).start();
    }

    componentDidUpdate(){
        this.animateUnderLine(this.props.state.index)
    }

    render() {
        let { state } = this.props
        let itemUnderLinePosition = this.state.underlinePosition.interpolate({
            inputRange: [0, 1, 2, 3],
            outputRange: [0, DeiceWidthPercentToNumber(itemWidth), DeiceWidthPercentToNumber(itemWidth) * 2, DeiceWidthPercentToNumber(itemWidth) * 3]
        })

        return (
            <View style={styles.container}>
                <View style={styles.BarContainer}>
                    {state.routes.map((route, index) => {
                        return (
                            <FooterItem
                                key={route.key}
                                name={route.name}
                                onTabPress={this.onTabPress}
                                isFocused={state.index === index}
                            />
                        );
                    })}
                </View>
                <Animated.View style={[styles.underLine, {transform: [{translateX: itemUnderLinePosition}] }]} />
            </View>
        );
    }
}

export default FooterBar;
