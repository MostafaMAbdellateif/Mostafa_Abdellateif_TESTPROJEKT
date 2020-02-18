import React, { memo } from 'react';
import {
    View,
    ActivityIndicator,
    TextInput
} from 'react-native';
import AppStyles from '../../config/styles'
import styles from './styles';
import Icons from '../../config/icons';
import { calcWidth } from '../../config/metrics';

export const Search = React.memo((props) => {
    return (
        <View style={styles.container}>
            <Icons name={"Search"} color={AppStyles.color.COLOR_GREY} size={calcWidth(15)} />
            <TextInput
                placeholder="Type location"
                style={styles.searchInput}
                selectionColor={AppStyles.color.COLOR_PRIMARY}
            />
        </View>
    )
})