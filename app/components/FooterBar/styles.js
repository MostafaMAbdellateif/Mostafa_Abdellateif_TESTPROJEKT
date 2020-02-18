import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth } from '../../config/metrics';
import AppStyles from '../../config/styles';

export const itemWidth = calcWidth(375 / 4)  //375 is the screen width, and there are 4 footer item

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
        width: itemWidth - calcWidth(20),
        marginHorizontal: calcWidth(10),
        height: "6%",
        backgroundColor: AppStyles.color.COLOR_PRIMARY
    }
});

export default styles;
