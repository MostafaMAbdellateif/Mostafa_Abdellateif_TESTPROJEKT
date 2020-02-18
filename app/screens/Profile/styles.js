import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth } from '../../config/metrics';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppStyles.color.COLOR_WHITE
    },
    scrollContent: {
        paddingBottom: calcHeight(20),
    },
    header: {
        width: "100%",
        height: calcHeight(200),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppStyles.color.COLOR_PRIMARY
    },
    myProfile: {
        fontSize: calcWidth(15),
        color: AppStyles.color.COLOR_WHITE
    },
    pictureContainer: {
        marginTop: calcHeight(15),
        width: calcWidth(86),
        height: calcWidth(86),
        borderRadius: calcWidth(43),
        overflow: "hidden",
        backgroundColor: AppStyles.color.COLOR_GREY_WHITE,
    },
    picture: {
        width: "100%",
        height: "100%",
    },
    addPicture: {
        position: "absolute",
        width: "100%",
        height: calcWidth(40),
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppStyles.color.rgba(0, 0, 0, 0.5)
    },
    content: {
        marginTop: calcHeight(25),
        width: "100%",
        paddingHorizontal: calcWidth(30),
    },
    switchsContainer: {
        marginTop: calcHeight(8),
    }
});

export default styles;
