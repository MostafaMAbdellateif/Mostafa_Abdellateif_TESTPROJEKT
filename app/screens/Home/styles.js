import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import { calcWidth, calcHeight } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: AppStyles.color.COLOR_WHITE
    },
    header: {
        width: "100%",
        backgroundColor: AppStyles.color.COLOR_WHITE
    },
    content: {
        marginTop: calcHeight(10),
        width: '100%',
        height: "100%",
    },
    scene: {
        flex: 1,
        paddingTop: calcHeight(15),
        backgroundColor: AppStyles.color.COLOR_GREY_WHITE
    },
    sceneContent: {
        paddingBottom: calcHeight(80)
    },
    label: {
        paddingLeft: calcWidth(20),
        fontSize: calcWidth(12),
        color: AppStyles.color.COLOR_GREY
    },
    list: {
        marginTop: calcHeight(10),
        width: "100%",
        height: calcHeight(260),
    },
    listContent: {
        paddingLeft: calcWidth(20),
    }
});

export default styles;
