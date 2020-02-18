import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth, calcWidthRatio } from '../../config/metrics';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    tabBar: {
        backgroundColor: "transparent",
        // paddingHorizontal: calcWidth(15),
    },
    tabBarUnderLine: {
        backgroundColor: AppStyles.color.COLOR_PRIMARY,
        marginHorizontal: calcWidthRatio(8),
        width: "18%",
    },
    tabBarTitle: {
        fontSize: calcWidth(11)
    }
});

export default styles;
