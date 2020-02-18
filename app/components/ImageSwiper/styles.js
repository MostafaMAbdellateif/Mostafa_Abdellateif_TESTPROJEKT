import { StyleSheet } from 'react-native';
import { calcHeight, calcWidth, calcWidthRatio } from '../../config/metrics';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    contaienr: {
        width: '100%',
        height: '100%'
    },
    blackFade: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: "100%",
        height: "100%"
    },
    contnet: {
        // width: '100%',
        // height: '100%',
    },
    backIcon: {
        position: 'absolute',
        top: calcHeight(30),
        left: calcWidth(20),
        zIndex: 100,
    },
    pagination: {
        position: 'absolute',
        bottom: calcHeight(15),
        right: calcWidth(15),
    },
    pages:{
        fontSize: calcWidth(15),
        fontWeight: "bold",
        color: "#fff"
    }
});

export default styles;
