import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth, calcWidthRatio } from '../../config/metrics';
import AppStyles from '../../config/styles';
import { percentToNumber } from '../../utils/stringUtils';

export const itemWidth = calcWidthRatio(375 / 4)  //375 is the screen width, and there are 4 footer item

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: calcHeight(50),
        elevation: 20,
        backgroundColor: '#fff',
    },
    BarContainer: {
        width: "100%",
        height: "93%",
        flexDirection: "row",
    },
    itemContainer: {
        width: itemWidth,
        alignItems: 'center',
        justifyContent: "center"
    },
    underLine:{
        width: calcWidthRatio((375 / 4) - 20),
        marginHorizontal: calcWidthRatio(10),
        height: "6%",
        backgroundColor: AppStyles.color.COLOR_PRIMARY
    }
});

export default styles;
