import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';
import AppStyles from '../../config/styles'


let { color } = AppStyles

export const Loader = (props) => {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: props.closeOpacity?"transparent":'rgba(0,0,0,.4)',
            position: 'absolute',
            zIndex: 1000001,
            justifyContent: 'center',
            alignItem: 'center', }}>
            <ActivityIndicator color={color.THEME_APP_COLOR} size={props.small?"small":"large"} />
          </View>
    )
}