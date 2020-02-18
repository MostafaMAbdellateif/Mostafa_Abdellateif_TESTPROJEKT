import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth, calcWidthRatio } from '../../config/metrics';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    container: {
        marginTop: calcHeight(15),
        width: calcWidthRatio(340),
        height: calcHeight(40),
        paddingHorizontal: calcWidthRatio(10),
        flexDirection: "row",
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: calcWidth(20),
        backgroundColor: AppStyles.color.COLOR_GREY_WHITE
    },
    searchInput:{
        width: calcWidthRatio(300,340),
        height: '100%',
        margin: 0,
        paddingHorizontal: calcWidth(15),
        color: AppStyles.color.COLOR_GREY,
        // backgroundColor: 'red'
    }
});

export default styles;
