import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth, calcWidthRatio } from '../../config/metrics';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    container:{
        width: calcWidth(240),
        height: calcHeight(240),
        marginRight: calcWidth(15),
        borderRadius: calcWidth(5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        backgroundColor: AppStyles.color.COLOR_GREY_WHITE,
    },
    imageContainer: {
        width: "100%",
        height: "100%",
        // marginRight: calcWidth(15),
        borderRadius: calcWidth(5),
        overflow: 'hidden',
    },
    blackFade: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: calcWidth(5),
    },
    details: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        paddingBottom: calcHeight(10),
        paddingLeft: calcWidth(10),
    },
    price: {
        fontSize: calcWidth(20),
        fontWeight: "bold",
        color: AppStyles.color.COLOR_WHITE
    },
    info: {
        fontSize: calcWidth(15),
        color: AppStyles.color.COLOR_WHITE
    }
});

export default styles;
