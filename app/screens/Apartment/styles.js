import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.color.COLOR_WHITE
    },
    scrollContent:{
        paddingBottom: calcHeight(20)
    },
    header: {
        width: "100%",
        height: calcHeight(320),
    },
    content:{
        marginTop: calcHeight(35),
        width: "100%",
        paddingLeft: calcWidth(20),
    },
    title: {
        fontSize: calcWidth(14),
        fontWeight: "bold",
        color: AppStyles.color.COLOR_GREY_DARK
    },
    location:{
        marginTop: calcHeight(5),
        fontSize: calcWidth(13),
        color: AppStyles.color.COLOR_GREY
    },
    priceContainer:{
        marginTop: calcHeight(25),
        flexDirection: 'row',
        alignItems: "center"
    },
    price:{
        fontSize: calcWidth(16),
        fontWeight: "bold",
        color: AppStyles.color.COLOR_GREY_DARK
    },
    perSquare:{
        marginLeft: calcWidth(10),
        fontSize: calcWidth(13),
        color: AppStyles.color.COLOR_GREY
    },
    rate:{
        marginLeft: calcWidth(3),
        fontSize: calcWidth(12),
        color: AppStyles.color.COLOR_GREY
    },
    configurationContainer:{
        marginTop: calcHeight(25),
        flexDirection: "row"
    },
    configurationInfo:{
        marginLeft: calcWidth(15),
    },
    configuration:{
        marginTop: calcHeight(3),
        fontSize: calcWidth(13),
        fontWeight: "bold",
        color: AppStyles.color.COLOR_PRIMARY
    },
    room:{
        marginTop: calcHeight(5),
        fontSize: calcWidth(13),
        color: AppStyles.color.COLOR_GREY
    },
});

export default styles;
