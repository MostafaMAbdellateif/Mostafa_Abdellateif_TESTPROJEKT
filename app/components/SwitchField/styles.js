import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth, calcWidthRatio } from '../../config/metrics';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    container: {
        marginTop: calcHeight(20),
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: calcWidth(14),
        color: AppStyles.color.COLOR_GREY
    },
    switch: {
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
    }
});

export default styles;
